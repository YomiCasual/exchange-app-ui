import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { SECONDARY_DATE_FORMAT } from "../../libs";
import { OptionProps } from "../../reusables/types";

interface CurrencyFieldProps {
  crypto: OptionProps[];
  fiat: OptionProps[];
}

export const useHistoryFilterForm = () => {
  const { control, handleSubmit, register, watch, setValue } = useForm({
    defaultValues: {
      fromDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      toDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      type: "all",
    },
  });

  const fromDate = watch("fromDate");
  const toDate = watch("toDate");

  const onSubmit = handleSubmit(
    async (data, errors: any) => {
      console.log({ data });
    },
    (errors) => {
      console.log({ errors });
    }
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return {
    control,
    onSubmit,
  };
};
