import { Box, LinearProgress, Typography } from "@mui/material";
import {
  DataGrid,
  DataGridProps,
  GridOverlay,
  GridRow,
} from "@mui/x-data-grid";
import clsx from "clsx";
import { memo, useState } from "react";
import { useWindowSize } from "../hooks";
import HistoryTableCards from "./HistoryTableCards";

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
  //   pageSize = 15,
  className,
  ...rest
}: DataGridProps & {
  nextPage?: () => void;
}): JSX.Element => {
  const [pageSize, setPageSize] = useState<number>(5);

  const { width: clientWidth } = useWindowSize();

  if (clientWidth && clientWidth <= 767) {
    return <HistoryTableCards {...rest} rows={data} columns={columns} />;
  }

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
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 20]}
        pagination
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
