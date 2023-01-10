import { useEffect, useRef, useState } from "react";
import { HistoryTable } from "./components";
import ExchangeForm from "./components/ExchangeForm";
import { HISTORY_TABLE_COLUMNS, TEST_HISTORY_DATA } from "./constants";

function App() {
  const [historyData, setHistoryData] = useState<any[]>([]);
  const loaded = useRef(false);

  useEffect(() => {
    // socket.on("stream_rates", (data: any) => {
    //   const rates = data.data?.rates;
    //   console.log({ rates, data });
    //   //   setHistoryData([...historyData, ...rates]);
    // });
    console.log("running");
    const timeout = setTimeout(() => {
      if (!loaded.current) {
        console.log({ TEST_HISTORY_DATA });
        setHistoryData([...historyData, ...TEST_HISTORY_DATA.rates]);
        loaded.current = true;
      }
    }, 5000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="app-container">
      <ExchangeForm />
      <HistoryTable
        rows={historyData}
        columns={HISTORY_TABLE_COLUMNS}
        getRowId={(data) => data.name}
      />
    </div>
  );
}

export default App;
