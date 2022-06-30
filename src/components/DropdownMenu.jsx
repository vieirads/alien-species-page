import { Button } from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import MenuIcon from "@mui/icons-material/Menu";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Article,
  DataObject,
  FormatListBulleted,
  Groups,
  Home,
  Timeline,
  Workspaces,
} from "@mui/icons-material";
import { FormattedMessage } from "react-intl";

const DropdownMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const styles = {
    item: {
      display: "flex",
      color: "gray",
      cursor: "pointer",
      textDecoration: "none",
    },
    icon: {
      marginRight: 1,
    },
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <MenuIcon
          sx={{
            display: { xs: "block", md: "none" },
            marginRight: { xs: 2, md: 0 },
            color: "white",
          }}
        />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page"
          onClick={handleClose}
        >
          <Home sx={styles.icon} />
          <FormattedMessage
            id="leftbar.home"
            default="Início"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/groups"
          onClick={handleClose}
        >
          <Workspaces sx={styles.icon} />
          <FormattedMessage
            id="leftbar.groups"
            default="Grupos"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/data"
          onClick={handleClose}
        >
          <DataObject sx={styles.icon} />
          <FormattedMessage
            id="leftbar.data"
            default="Dados"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/model"
          onClick={handleClose}
        >
          <Timeline sx={styles.icon} />
          <FormattedMessage
            id="leftbar.model"
            default="Modelo"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/paper"
          onClick={handleClose}
        >
          <Article sx={styles.icon} />
          <FormattedMessage
            id="leftbar.paper"
            default="Artigo"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/people"
          onClick={handleClose}
        >
          <Groups sx={styles.icon} />
          <FormattedMessage
            id="leftbar.people"
            default="People"
          ></FormattedMessage>
        </MenuItem>
        <MenuItem
          sx={styles.item}
          component={Link}
          to="/alien-species-page/references"
          onClick={handleClose}
        >
          <FormatListBulleted sx={styles.icon} />
          <FormattedMessage
            id="leftbar.references"
            default="Referências"
          ></FormattedMessage>
        </MenuItem>
      </Menu>
    </>
  );
};

export default DropdownMenu;
