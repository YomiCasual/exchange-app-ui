const MuiInputBase = {
  root: {
    borderRadius: 5,
    fontWeight: 400,
    lineHeight: 1,

    "&.Mui-focused": {
      backgroundColor: "#fff",
    },
    "&.Mui-disabled": {
      color: "#8C8C8C",
      WebkitTextFillColor: "#8C8C8C",

      "& .MuiOutlinedInput-notchedOutline": {
        borderColor: "#204ECF !important",
      },
    },
  },
  input: {
    padding: "15px",
    borderColor: "#204ECF !important",
    height: "auto",
  },
};

export default MuiInputBase;
