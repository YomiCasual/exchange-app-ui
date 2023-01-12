import { toast } from "react-toastify";
import { IExchangeRate } from "./../api/types";
import { useEffect } from "react";
import { useGetAllSavedExchanges } from "./../api/get-all-saved-exchanges";
import { useRef, useState } from "react";
import { socket } from "../libs/socket";

export interface FilterProps {
  type?: string;
  fromDate?: string;
  toDate?: string;
}

export const useAppHook = () => {
  const [historyData, setHistoryData] = useState<IExchangeRate[]>([]);
  const [filteredData, setFilterdData] = useState<IExchangeRate[]>([]);
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
      toast("Live prices fetched successfully");
    });
    socket.on("exchange_rates", (data: any) => {
      console.log("exchanged");
      setHistoryData((prevHistory) => [...data, ...prevHistory]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket]);

  useEffect(() => {
    setFilterdData(historyData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [historyData.length]);

  const clearFilter = () => {
    setFilterdData(historyData);
    setisFiltering(false);
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

    setisFiltering(true);
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
