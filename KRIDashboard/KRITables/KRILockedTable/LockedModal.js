import React, { useEffect, useState } from "react";
import axios from "axios";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import KRIBreachesTable from "./KRILockedTable";

export default function MaxWidthDialog() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("xl");
  const [kriLockedTableData, setkriLockedTableData] = useState([]);

  useEffect(() => {
    axios
      .get("https://table-data-42a0a-default-rtdb.firebaseio.com/data.json")
      .then((res) => {
        setkriLockedTableData(res.data);
      });
  }, []);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <div className='pl-3 pb-3'>
        <i
          class='fa fa-table'
          style={{ cursor: "pointer", color: "#EFA239" }}
          onClick={handleClickOpen}
          title='Table View'
        ></i>
      </div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby='max-width-dialog-title'
      >
        <DialogContent>
          <KRIBreachesTable kriLockedTableData={kriLockedTableData} />
          <div className='text-right'></div>
        </DialogContent>
        <DialogActions>
          <button className='other-white-button' onClick={handleClose}>
            Close
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
