import React from "react";
import { Save } from "@mui/icons-material";
import {
  Box,
  Alert,
  ListItemButton,
  ListItemText
} from "@mui/material";
import { Page, Toolbar } from "@mmrl/ui";
import { useActivity, useTheme } from "@mmrl/hooks";
import { write, exist } from "@mmrl/sufile";

const cfgPath = "/data/mkuser/root/.config/code-server/config.yaml";
const cfg = require(cfgPath);
const hasCfg = exist(cfgPath);

import AuthTypes from "<CONFCWD>/util/AuthTypes.js"
import SelectDialog from "<CONFCWD>/components/SelectDialog.jsx"

function App() {
  const { context } = useActivity();

  const [bindAddr, setBindAddr] = React.useState(cfg["bind-addr"]);
  const [auth, setAuth] = React.useState(cfg["auth"]);
  const [password, setPassword] = React.useState(cfg["password"]);
  const [cert, setCert] = React.useState(cfg["cert"]);

  const saveConfig = React.useCallback(() => {
    write(
      cfgPath,
      YAML.stringify(
        {
          "bind-addr": bindAddr,
          auth: auth,
          password: password,
          cert: cert,
        },
        null,
        4
      )
    );
  }, [bindAddr, auth, password, cert]);

  const renderToolbar = () => {
    return (
      <Toolbar modifier="noshadow">
        <Toolbar.Left>
          <Toolbar.BackButton onClick={context.popPage} />
        </Toolbar.Left>
        <Toolbar.Center>Code Server</Toolbar.Center>
        <Toolbar.Right>
          <Toolbar.Button onClick={saveConfig} icon={Save} />
        </Toolbar.Right>
      </Toolbar>
    );
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setAuth(value);
  };

  return (
    <Page renderToolbar={renderToolbar}>
      <Alert sx={{ m: 1 }} severity="info">
        Do not forget to save your config!
      </Alert>

      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setBindAddr(val);
          }}
          inputLabel="Address"
          type="text"
          title="Change address"
          initialValue={bindAddr}
        >
          <ListItemText primary="Change address" secondary={bindAddr} />
        </ListItemDialogEditText>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemText primary="Change auth type" secondary={auth} />
        </ListItemButton>

        <SelectDialog selectedValue={auth} open={open} onClose={handleClose} />

        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setPassword(val);
          }}
          inputLabel="Password"
          type="text"
          title="Change password"
          initialValue={password}
        >
          <ListItemText primary="Change password" secondary={password} />
        </ListItemDialogEditText>
        <ListItem>
          <ListItemText primary="Certificate" />
          <Switch checked={cert} onChange={(e) => setCert(e.target.checked)} />
        </ListItem>
      </List>
    </Page>
  );
}



export default () => {
  const { context } = useActivity();
  const { theme } = useTheme();

  if (hasCfg) {
    return <App />;
  } else {
    return (
      <Page
        renderToolbar={() => (
          <Toolbar modifier="noshadow">
            <Toolbar.Left>
              <Toolbar.BackButton onClick={context.popPage} />
            </Toolbar.Left>
            <Toolbar.Center>Code Server</Toolbar.Center>
          </Toolbar>
        )}
      >
        <Box
          component="h4"
          sx={{
            color: theme.palette.text.secondary,
            position: "absolute",
            left: "50%",
            top: "50%",
            WebkitTransform: "translate(-50%, -50%)",
            transform: "translate(-50%, -50%)",
          }}
        >
          Config file was not found.
        </Box>
      </Page>
    );
  }
};
