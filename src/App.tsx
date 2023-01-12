import { Typography } from "@mui/material";
import { useState } from "react";
import { IExchangeRate } from "./api/types";
import { HistoryTable, MobileExchangeDialog } from "./components";
import ExchangeForm from "./components/ExchangeForm";
import HistoryFilterForm from "./components/HistoryFilterForm";
import { HISTORY_TABLE_COLUMNS } from "./constants";
import useAppContext from "./context/AppContext";
import { useDialogHook } from "./hooks";

function App() {
  const { filteredData } = useAppContext();

  const { open, handleClose, handleOpen } = useDialogHook();

  const [selectedExchange, setSelectedExchange] =
    useState<IExchangeRate | null>();

  console.log({ selectedExchange });

  return (
    <>
      <div>
        <ExchangeForm />
        <div className="app-container mt-[100px]">
          <Typography variant="h4" className="!font-bold !text-xl !mb-3">
            History
          </Typography>
          <HistoryFilterForm />
          <HistoryTable
            rows={filteredData}
            columns={HISTORY_TABLE_COLUMNS}
            getRowId={(data) => data._id}
            mobileAction={(data) => {
              setSelectedExchange(data);
              handleOpen();
            }}
          />
        </div>
      </div>
      {selectedExchange && (
        <MobileExchangeDialog
          open={open}
          handleClose={handleClose}
          exchange={selectedExchange}
        />
      )}
    </>
  );
}

export default App;
