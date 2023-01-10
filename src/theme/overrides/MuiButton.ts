const MuiButton = {
  root: {
    "&.Mui-disabled": {
      cursor: "not-allowed",
      pointerEvents: "auto",
    },
    borderRadius: "5px",
    fontWeight: 500,
    fontSize: "14px!important ",
    textTransform: "unset",
    padding: ".75rem 2.5rem",
    border: "1.5px solid transparent",
    lineHeight: "1.5 !important",
  },
  containedPrimary: {
    "&.Mui-disabled": {
      backgroundColor: "#1123AB80 !important",
      borderColor: "#1123AB80",
      color: "rgba(255,255,255,0.8)",
      "&:hover": {
        backgroundColor: "#1123AB80",
        borderColor: "#1123AB80",
        color: "rgba(255,255,255,0.8)",
      },
    },
    "&:hover": {
      backgroundColor: "#0A198E",
      borderColor: "#0A198E",
    },
    backgroundColor: "#204ECF",
    borderColor: "#204ECF",
    color: "#fff",
    lineSpacing: 20,
  },
  containedSecondary: {
    backgroundColor: "#00CC83",
    color: "#fff",
    borderColor: "#00CC83",
    "&.Mui-disabled": {
      backgroundColor: "#0114310D",
      "&:hover": {
        borderColor: "#0114310D",
      },
    },
    "&:hover": {
      backgroundColor: "#00CC83",
      borderColor: "#00CC83",
    },
  },
  outlined: {
    color: "#204ECF",
    borderColor: "#204ECF",
    borderWidth: "1.5px",
    "&.Mui-disabled": {
      borderColor: "#0114310D",
    },
    "&:hover": {
      borderColor: "#204ECF",
      backgroundColor: "none",
    },
  },
  outlinedSecondary: {
    color: "#fff",
    borderColor: "#fff",
    borderWidth: "1.5px",
    "&.Mui-disabled": {
      borderColor: "#fff",
    },
    "&:hover": {
      borderColor: "#fff",
      backgroundColor: "none",
    },
  },
  text: {
    color: "#204ECF",
    backgroundColor: "none",
    textAlign: "left",
    "&:hover": {
      background: "none",
      color: "#1123ab",
    },
    "&.Mui-disabled": {
      "&:hover": {
        color: "#A6A6A6",
      },
    },
  },
};

export default MuiButton;
