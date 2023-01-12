import dayjs, { Dayjs } from "dayjs";
import { ChangeEvent } from "react";
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

export const getFormattedDate = (date: number) => {
  return dayjs(date).format("DD/MM/YYYY hh:mm");
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
