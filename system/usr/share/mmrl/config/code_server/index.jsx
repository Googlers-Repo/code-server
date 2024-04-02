import React from "react";
import { ListItemButton, ListItemText, List, ListItem, ListSubheader, Switch } from "@mui/material";
import { Page, Toolbar, ListItemDialogEditText } from "@mmrl/ui";
import { withRequireNewVersion } from "@mmrl/hoc";
import { ConfigProvider } from "@mmrl/providers";
import { useActivity, useConfig } from "@mmrl/hooks";

const SelectDialog = include("components/SelectDialog.jsx");

function App() {
  const { context } = useActivity();
  const [config, setConfig] = useConfig();

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
          background: `radial-gradient(125.71% 125.71% at 50% 125.71%, #BD0B00C8 0%, #B16000C8 100%), url(data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20300%20300%22%3E%3Cfilter%20id%3D%22noiseFilter%22%3E%3CfeTurbulence%20type%3D%22fractalNoise%22%20baseFrequency%3D%225%22%20numOctaves%3D%222%22%20stitchTiles%3D%22stitch%22%2F%3E%3C%2Ffilter%3E%3Crect%20width%3D%22100%25%22%20height%3D%22100%25%22%20filter%3D%22url%28%23noiseFilter%29%22%2F%3E%3C%2Fsvg%3E)`,
        }}
        modifier="noshadow"
      >
        <Toolbar.Left>
          <Toolbar.BackButton onClick={context.popPage} />
        </Toolbar.Left>
        <Toolbar.Center>Code Server</Toolbar.Center>
      </Toolbar>
    );
  };

  const [open, setOpen] = React.useState(false);
  const passwordDisabled = React.useMemo(() => config["auth"] === "none", [config["auth"]]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setConfig("auth", value);
  };

  return (
    <Page renderToolbar={renderToolbar}>
      <List subheader={<ListSubheader>Settings</ListSubheader>}>
        <ListItemDialogEditText
          onSuccess={(val) => {
            if (val) setConfig("bind-addr", val);
          }}
          inputLabel="Address"
          type="text"
          title="Change address"
          initialValue={config["bind-addr"]}
        >
          <ListItemText primary="Change address" secondary={config["bind-addr"]} />
        </ListItemDialogEditText>

        <ListItemButton onClick={handleClickOpen}>
          <ListItemText primary="Change auth type" secondary={config["auth"]} />
        </ListItemButton>

        <SelectDialog selectedValue={config["auth"]} open={open} onClose={handleClose} />

        <ListItemDialogEditText
          disabled={passwordDisabled}
          onSuccess={(val) => {
            if (val) setConfig("password", val);
          }}
          inputLabel="Password"
          type="text"
          title="Change password"
          initialValue={config["password"]}
        >
          <ListItemText primary="Change password" secondary={config["password"]} />
        </ListItemDialogEditText>
        <ListItem>
          <ListItemText primary="Certificate" />
          <Switch checked={config["cert"]} onChange={(e) => setConfig("cert", e.target.checked)} />
        </ListItem>
      </List>
    </Page>
  );
}

export default withRequireNewVersion({
  versionCode: 21510,
  component: () => {
    return (
      <ConfigProvider
        loadFromFile="/data/mkuser/root/.config/code-server/config.yaml"
        initialConfig={{
          "bind-addr": "0.0.0.0:8989",
          auth: "password",
          password: "Waffenfähiges Plutonium",
          cert: false,
        }}
        loader="yaml"
      >
        <App />
      </ConfigProvider>
    );
  },
});
