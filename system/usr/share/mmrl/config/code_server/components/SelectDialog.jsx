import React from "react"
import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    DialogTitle,
    Dialog,
  } from "@mui/material";

const AuthTypes = include("util/authTypes.js")

function SelectDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Select auth type</DialogTitle>
      <List sx={{ pt: 0 }}>
        {AuthTypes.map((type) => (
          <ListItem disableGutters key={type}>
            <ListItemButton onClick={() => handleListItemClick(type)}>
              <ListItemText primary={type} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Dialog>
  );
}

export default SelectDialog;
