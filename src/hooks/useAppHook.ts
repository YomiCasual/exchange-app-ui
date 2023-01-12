import { useEffect } from "react";
import { useGetAllSavedExchanges } from "./../api/get-all-saved-exchanges";
import { useRef, useState } from "react";
import { socket } from "../libs/socket";
import dayjs from "dayjs";

export interface FilterProps {
  type?: string;
  fromDate?: string;
  toDate?: string;
}

export const useAppHook = () => {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const [filteredData, setFilterdData] = useState<any[]>([]);
  const [isFiltering, setisFiltering] = useState(false);
  const loaded = useRef(false);

  const { data } = useGetAllSavedExchanges();

  useEffect(() => {
    if (data && !loaded.current) {
      setHistoryData(data);
      setFilterdData(data);
      loaded.current = true;
    }
  }, [data]);

  useEffect(() => {
    socket.on("stream_rates", (data: any) => {
      setHistoryData((prevHistory) => [...data, ...prevHistory]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  const clearFilter = () => {
    setFilterdData(historyData);
  };

  const handleFilter = ({ type, fromDate, toDate }: FilterProps) => {
    let newFilteredData = [...(historyData || [])];

    if (type && type !== "all") {
      newFilteredData = newFilteredData.filter(
        (data) => data.type?.toLowerCase() === type?.toLowerCase()
      );
    }

    if (fromDate) {
      newFilteredData = newFilteredData.filter(
        (data) => new Date(data.createdAt) >= new Date(fromDate)
      );
    }

    if (toDate) {
      newFilteredData = newFilteredData.filter(
        (data) => new Date(data.createdAt) <= new Date(toDate)
      );
    }

    setFilterdData(newFilteredData);
  };

  return {
    historyData,
    setHistoryData,
    setFilterdData,
    filteredData,
    isFiltering,
    setisFiltering,
    handleFilter,
    clearFilter,
  };
};
