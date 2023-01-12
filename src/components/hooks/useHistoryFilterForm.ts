import { useAppHook } from "./../../hooks/useAppHook";
import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { SECONDARY_DATE_FORMAT } from "../../libs";
import { OptionProps } from "../../reusables/types";
import useAppContext from "../../context/AppContext";

interface CurrencyFieldProps {
  crypto: OptionProps[];
  fiat: OptionProps[];
}

export const useHistoryFilterForm = () => {
  const { handleFilter, clearFilter } = useAppContext();
  const { control, handleSubmit, reset } = useForm({
    defaultValues: {
      fromDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      toDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      type: "all",
    },
  });

  const onSubmit = handleSubmit(
    async (data, errors: any) => {
      handleFilter({ ...data });
    },
    (errors) => {
      console.log({ errors });
    }
  );

  const handleClearFilter = () => {
    reset({
      fromDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      toDate: dayjs(new Date()).format(SECONDARY_DATE_FORMAT),
      type: "all",
    });
    clearFilter();
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps

  return {
    control,
    onSubmit,
    handleClearFilter,
  };
};
