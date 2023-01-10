import { LinearProgress, Typography } from "@mui/material";
import { DataGrid, DataGridProps, GridOverlay } from "@mui/x-data-grid";
import { memo } from "react";

// Custom loading component
const LoadingOverlay = () => {
  return (
    <GridOverlay>
      <div style={{ position: "absolute", top: 0, width: "100%" }}>
        <LinearProgress color="info" />
      </div>
    </GridOverlay>
  );
};

const NoRowsOverlay = () => {
  return (
    <GridOverlay className="!space-y-4 !flex-col min-h-[180px] !bg-transparent !top-0">
      <Typography align="center" sx={{ color: "text.secondary" }}>
        No data to display
      </Typography>
    </GridOverlay>
  );
};

/** View to render tables */
const HistoryTable = ({
  rows: data,
  columns,
  pageSize = 15,
  className,
  ...rest
}: DataGridProps & {
  nextPage?: () => void;
}): JSX.Element => {
  return (
    <DataGrid
      rows={data}
      columns={columns}
      autoHeight
      headerHeight={40}
      components={{
        LoadingOverlay,
        NoRowsOverlay,
      }}
      {...rest}
    />
  );
};

export default memo(HistoryTable);
