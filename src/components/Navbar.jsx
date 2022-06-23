/**
 * TODO:
 * - [x]redirect uem-logo to the uem home page
 * - [x]show cascade menu when button menu is clicked
 *
 */

import { AppBar, Box, Link, Toolbar, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";
import uemLogo from "../imgs/uem.png";
import LanguageIcon from "@mui/icons-material/Language";
import DropdownMenu from "./DropdownMenu";

import { FormattedMessage } from "react-intl";

const styles = {
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: teal[400],
  },
  title: {
    display: { xs: "none", sm: "block" },
  },
  logoAndMenu: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuButton: {
    display: { xs: "block", md: "none" },
    marginRight: { xs: 2, md: 0 },
  },
  logo: {
    display: "block",
    height: 50,
    cursor: "pointer",
  },
  pageConfig: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  langContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginRight: 3,
    cursor: "pointer",
  },
  langText: { display: { xs: "none", sm: "block" }, marginLeft: 1 },
};

const Navbar = ({ changeLanguageFunction }) => {
  return (
    <AppBar position="fixed">
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.logoAndMenu}>
          <DropdownMenu />
          <Link
            component="button"
            onClick={() => window.open("http://www.uem.br")}
          >
            <Box
              component="img"
              sx={styles.logo}
              alt="uem-logo."
              src={uemLogo}
            />
          </Link>
        </Box>
        <Typography variant="h6" sx={styles.title}>
          <FormattedMessage id="navbar.title" default="PT"></FormattedMessage>
        </Typography>
        <Box sx={styles.pageConfig}>
          <Box sx={styles.langContainer}>
            <LanguageIcon onClick={changeLanguageFunction} />
            <Typography sx={styles.langText}>
              <FormattedMessage
                id="navbar.icon.text"
                default="PT"
              ></FormattedMessage>
            </Typography>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
