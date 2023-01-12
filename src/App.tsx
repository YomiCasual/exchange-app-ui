import { Typography } from "@mui/material";
import { HistoryTable } from "./components";
import ExchangeForm from "./components/ExchangeForm";
import HistoryFilterForm from "./components/HistoryFilterForm";
import { HISTORY_TABLE_COLUMNS } from "./constants";
import { useAppHook } from "./hooks";

function App() {
  const { historyData } = useAppHook();

  return (
    <div>
      <ExchangeForm />
      <div className="app-container mt-[100px]">
        <Typography variant="h4" className="!font-bold !text-xl !mb-3">
          History
        </Typography>
        <HistoryFilterForm />
        <HistoryTable
          rows={historyData}
          columns={HISTORY_TABLE_COLUMNS}
          getRowId={(data) => data._id}
        />
      </div>
    </div>
  );
}

export default App;
