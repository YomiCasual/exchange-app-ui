import { ChangeEvent } from "react";
import dayjs from "dayjs";
import { OptionProps } from "../reusables/types";

export const formatUnderScoreAndCapitalize = (value: string) => {
  if (!value) return "";
  let newvalue = value.replaceAll("_", " ");
  return capitalizeWord(newvalue);
};

export const capitalizeWord = (word: string = "") => {
  let newValue = word[0]?.toUpperCase() + word.slice(1)?.toLowerCase();
  return newValue?.replace(/(^\w{1})|(\s+\w{1})/g, (letter) =>
    letter?.toUpperCase()
  );
};

export const convertToSelectFieldsOptions = (
  values: string[],
  { formatter }: { formatter?: (value: any) => any } = {}
): OptionProps[] => {
  return values.map((value) => ({
    label: formatter ? formatter(value) : formatUnderScoreAndCapitalize(value),
    value: value,
  }));
};

export const currencyConverter = ({
  rates = {},
  from = "btc",
  to = "usd",
  amountFrom = 1,
}: {
  rates: Record<string, any>;
  from?: string;
  to?: string;
  amountFrom?: number;
}) => {
  // Base conversion is btc

  const converterFrom = rates?.[from?.toLowerCase() || "btc"];
  const converterTo = rates?.[to?.toLowerCase() || "usd"];

  const amount =
    (amountFrom * (converterTo?.value || 1)) / (converterFrom?.value || 1);

  return amount?.toFixed(9);
};

export const DISABLE_REFRESH = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

export const getFormattedDate = (date: number | string) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm A");
};

export const formatNumberToCurrency = ({
  number,
  currencyCode = "USD",
  precision = 0,
  language = "en-US",
  removeCurrency = true,
}: {
  number: string | number;
  currencyCode?: string;
  precision?: number;
  language?: string;
  removeCurrency?: boolean;
}): string => {
  const formatter = new Intl.NumberFormat(language, {
    style: "currency",
    currency: currencyCode,
    maximumFractionDigits: precision ? 2 : 20,
  });

  let value = Number(number);

  if (isNaN(value)) {
    value = 0;
  }

  let result = formatter.format(value);

  if (removeCurrency) {
    result = result.replace(/[^0-9.,]+/g, "");
  }

  return result;
};

export const formatAmountWithDecimal = (value: string) => {
  const amountString = (value || "").toString();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [amount, decimal = "", ...others] = amountString.split(".");

  const hasDecimal = amountString.indexOf(".") !== -1;

  const replacedComma = amount.replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");

  const formattedAmount = hasDecimal
    ? `${replacedComma}.${decimal}`
    : `${replacedComma}`;

  return formattedAmount;
};

export const transformNonEventChange = (
  {
    name,
    value,
  }: { name: string; value?: string | number | File | Blob | any },
  domEvent = {}
): ChangeEvent<HTMLInputElement> => {
  const event = {
    ...domEvent,
    target: {
      ...domEvent,
      name,
      value,
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return event as any;
};

export const DATE_PICKER_FORMATTER = "DD/MM/YYYY";
export const SECONDARY_DATE_FORMAT = "YYYY-MM-DD";
export const MOBILE_SIZE = 767;
