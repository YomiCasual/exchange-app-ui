import { useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { useGetExchangeRates, useGetSupportedCurrencies } from "../../api";
import { API_ROUTES } from "../../api/constants";
import http from "../../api/resources/http";
import { convertToSelectFieldsOptions, currencyConverter } from "../../libs";
import { OptionProps } from "../../reusables/types";

interface CurrencyFieldProps {
  crypto: OptionProps[];
  fiat: OptionProps[];
}

export const useExchangeForm = () => {
  const { data, isLoading } = useGetSupportedCurrencies();

  const { data: exchangeRates, isLoading: exchangeRateLoading } =
    useGetExchangeRates();

  const { control, handleSubmit, register, watch, setValue, formState } =
    useForm({
      defaultValues: {
        currencyFrom: "",
        amountFrom: "",
        currencyTo: "",
        amountTo: "",
      },
    });

  const amountFrom = watch("amountFrom");
  const currencyFrom = watch("currencyFrom");
  const currencyTo = watch("currencyTo");

  const shouldNotExchangeData =
    exchangeRateLoading || !amountFrom || !currencyTo || !currencyFrom;

  const amountTo = useMemo(() => {
    if (shouldNotExchangeData) return 1;
    const amount = currencyConverter({
      rates: exchangeRates,
      amountFrom: Number(amountFrom),
      from: currencyFrom,
      to: currencyTo,
    });
    return amount;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountFrom, exchangeRateLoading, currencyTo, currencyFrom]);

  useEffect(() => {
    if (!shouldNotExchangeData) {
      setValue("amountTo", amountTo?.toString());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [amountTo]);

  const onSubmit = handleSubmit(
    async (data, errors: any) => {
      const exchangeFrom = exchangeRates[currencyFrom?.toLowerCase()];
      const exchangeTo = exchangeRates[currencyTo?.toLowerCase()];

      await http().post(API_ROUTES.CREATE_EXCHANGE, {
        ...data,
        currencyFrom: exchangeFrom?.name,
        unitFrom: exchangeFrom?.unit,
        currencyTo: exchangeTo?.name,
        unitTo: exchangeTo?.unit,
      });
    },
    (errors) => {
      console.log({ errors });
    }
  );

  const getCurrenciesSelectFields = useMemo(() => {
    const field: CurrencyFieldProps = {
      crypto: [],
      fiat: [],
    };

    if (data) {
      for (const key in data) {
        if (data[key]) {
          field[key as keyof typeof field] = convertToSelectFieldsOptions(
            data[key],
            { formatter: (value: string) => (value ?? "")?.toUpperCase() }
          );
        }
      }
    }

    return field;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoading]);

  return {
    data,
    getCurrenciesSelectFields,
    control,
    register,
    onSubmit,
    formState,
  };
};
