import { useEffect } from "react";
import { useGetAllSavedExchanges } from "./../api/get-all-saved-exchanges";
import { useRef, useState } from "react";
import { socket } from "../libs/socket";

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

  return {
    historyData,
    setHistoryData,
    setFilterdData,
    filteredData,
    isFiltering,
    setisFiltering,
  };
};
