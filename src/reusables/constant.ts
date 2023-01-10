export const customButtonTypes = {
  primary: {
    variant: "contained",
    color: "primary",
    sx: {
      fontSize: "h5.fontSize",
      minWidth: 90,
      "& .MuiLoadingButton-loadingIndicator": { color: "white" },
    },
  },
  secondary: {
    variant: "contained",
    color: "secondary",
    sx: {
      fontSize: "h5.fontSize",
      minWidth: 90,
      "& .MuiLoadingButton-loadingIndicator": { color: "primary.main" },
    },
  },
  outlined: {
    variant: "outlined",
    sx: {
      fontSize: "h5.fontSize",
      minWidth: 90,
      "& .MuiLoadingButton-loadingIndicator": { color: "primary.main" },
    },
  },
  text: {
    variant: "text",
    sx: {
      color: "primary.main",
    },
  },
};
