import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { useState } from "react";
import { AiFillDelete } from "react-icons/ai";

import { boxStyles } from "../dashboard-components/buttons-stack/buttons-stack";

import successfullyDeleted from "../../assets/successful-deletion.png";

export const Dashboard = () => {
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openDeletionDialog, setOpenDeletionDialog] = useState<boolean>(false);

  return (
    <Box component="section" sx={boxStyles}>
      <Box>
        <Button variant="contained" onClick={() => setOpenDialog((prevState) => !prevState)}>
          Open Modal
        </Button>

        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          sx={{ borderRadius: "2rem" }}
        >
          <DialogTitle margin="0 auto">
            <AiFillDelete size={50} />
          </DialogTitle>
          <DialogTitle margin="0 auto">Delete Contacts</DialogTitle>
          <DialogContent>
            <DialogContentText>Sure you want delete this Contacts ?</DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ backgroundColor: "orange", "&:hover": { backgroundColor: "orange" } }}
              variant="contained"
              onClick={() => setOpenDialog(false)}
            >
              Cancel
            </Button>
            <Button
              sx={{
                color: "black",
                fontSize: "1rem",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "wheat" },
              }}
              onClick={() => {
                setOpenDeletionDialog(true);
                setOpenDialog(false);
              }}
            >
              Ok
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={openDeletionDialog} onClose={() => setOpenDeletionDialog(false)}>
          <DialogTitle sx={{ margin: "5rem 8rem 0 8rem", padding: "0" }}>
            {/* <FaCheck size={25}/> */}
            <img src={successfullyDeleted} alt="Successfully Deleted" />
          </DialogTitle>
          <DialogTitle sx={{ margin: "0 auto 2rem auto", fontSize: "1.25rem" }}>
            Deleted Contacts
          </DialogTitle>
        </Dialog>
      </Box>
    </Box>
  );
};
