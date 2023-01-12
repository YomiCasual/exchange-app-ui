import dayjs from "dayjs";
import { useForm } from "react-hook-form";
import { SECONDARY_DATE_FORMAT } from "../../libs";
import useAppContext from "../../context/AppContext";

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
    async (data) => {
      handleFilter({ ...data });
    },
    (errors) => {}
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
