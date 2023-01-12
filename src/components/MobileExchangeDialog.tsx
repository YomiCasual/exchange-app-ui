import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import { IExchangeRate } from "../api/types";
import { CustomDialogProps } from "../hooks";
import { formatNumberToCurrency, getFormattedDate } from "../libs";
import { CustomButton } from "../reusables";

const CustomList = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex ">
      <Typography className="!w-1/3 !text-lg">{label}</Typography>
      <Typography className="!font-bold !text-lg">{value}</Typography>
    </div>
  );
};

export const MobileExchangeDialog = ({
  exchange,
  open,
  handleClose,
}: Pick<CustomDialogProps, "open" | "handleClose"> & {
  exchange: IExchangeRate;
}) => {
  const {
    createdAt,
    currencyFrom,
    currencyTo,
    amountFrom,
    amountTo,
    unitFrom,
    unitTo,
  } = exchange;
  return (
    <Dialog fullWidth onClose={handleClose} open={open}>
      <DialogTitle>
        <Typography className="!font-bold !text-xl border-b pb-6">
          Exchange
        </Typography>
      </DialogTitle>

      <DialogContent>
        <div className="space-y-2 mt-6">
          <CustomList
            label="Date & Time"
            value={getFormattedDate(createdAt)?.toString()}
          />
          <CustomList label="From" value={currencyFrom} />
          <CustomList label="To" value={currencyTo} />
          <CustomList
            label="Amount From"
            value={`${unitFrom} ${formatNumberToCurrency({
              number: amountFrom,
            })}`}
          />
          <CustomList
            label="Amount To"
            value={`${unitTo} ${formatNumberToCurrency({
              number: amountTo,
            })}`}
          />
        </div>
      </DialogContent>
      <DialogActions
        sx={{
          justifyContent: "center",
          width: "100%",
          marginBottom: "10px",
          paddingX: "30px",
        }}
      >
        <CustomButton buttonType="secondary" onClick={handleClose} fullWidth>
          Close
        </CustomButton>
      </DialogActions>
    </Dialog>
  );
};
