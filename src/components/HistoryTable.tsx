import { Box, LinearProgress, Typography } from "@mui/material";
import {
  DataGrid,
  DataGridProps,
  GridOverlay,
  GridRow,
} from "@mui/x-data-grid";
import clsx from "clsx";
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
    <Box
      sx={{
        width: "100% !important",
        "& .odd": {
          bgcolor: "#fdfdfd",
        },
        "& .even": {
          bgcolor: "#e5e3e3",
        },
      }}
    >
      <DataGrid
        rows={data}
        columns={columns}
        autoHeight
        headerHeight={40}
        components={{
          LoadingOverlay,
          NoRowsOverlay,
          Row: CustomRow,
        }}
        rowHeight={55}
        sx={{
          width: "100% !important",
          "& .MuiDataGrid-cell:hover": {
            color: "primary.main",
          },
          "& .MuiDataGrid-columnHeader": {
            backgroundColor: "#e5e3e3",
          },
        }}
        {...rest}
      />
    </Box>
  );
};

export default memo(HistoryTable);

const CustomRow = (props: any) => {
  const { className, index, ...other } = props;

  return (
    <GridRow
      index={index}
      className={clsx(className, index % 2 === 0 ? "odd" : "even")}
      {...other}
    />
  );
};
