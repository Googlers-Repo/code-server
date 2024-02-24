import React from "react";
import { Save } from "@mui/icons-material";
import { Box, Alert, ListItemButton, ListItemText } from "@mui/material";
import { Page, Toolbar } from "@mmrl/ui";
import { useActivity, useTheme } from "@mmrl/hooks";
import { read, write, exist } from "@mmrl/sufile";

const cfgPath = "/data/mkuser/root/.config/code-server/config.yaml";
const cfg = require(cfgPath);
const hasCfg = exist(cfgPath);

const AuthTypes = require(confpath("<CONFCWD>/util/authTypes.js"));
const SelectDialog = require(confpath("components/SelectDialog.jsx"));

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
      <Toolbar
        sx={{
          ":before": {
            left: "48px",
            color: "rgba(255, 255, 255, 0.07)",
           top: "-55px",
            content: "'</></>'",
            position: "absolute",
            fontSize: "128px",
          },
          background: `radial-gradient(125.71% 125.71% at 50% 125.71%, #BD0B00C8 0%, #B16000C8 100%), url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%225%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E)`
        }}
        modifier="noshadow"
      >
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
      <Alert sx={{ m: 1 }} severity="warning">
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
