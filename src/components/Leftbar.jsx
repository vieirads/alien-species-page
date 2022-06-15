/**
 * TODO:
 * effects on the side of selected item;
 */

import { Box, Container, Typography } from "@mui/material";
import {
  Workspaces,
  Home,
  Timeline,
  Article,
  Groups,
  FormatListBulleted,
  DataObject,
} from "@mui/icons-material/";
import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    paddingTop: 12,
    marginLeft: -1,
    height: "100vh",
    width: "20vw",
    border: "1px solid rgba(0,0,0,0.08)",
    display: { xs: "none", md: "flex" },
    flexDirection: "column",
    alignItems: "flex-start",
    // backgroundColor: "yellow",
    // boxShadow: "1px 0px 3px 0px rgba(0,0,0,0.42)",
  },
  item: {
    display: "flex",
    color: "gray",
    cursor: "pointer",
    textDecoration: "none",
    marginTop: 2,
  },
  icon: {
    marginRight: 1,
  },
};

const Leftbar = () => {
  return (
    <Container sx={styles.container}>
      <Box component={Link} to="/alien-species-page" sx={styles.item}>
        <Home sx={styles.icon} />
        <Typography>Início</Typography>
      </Box>
      <Box component={Link} to="/alien-species-page/groups" sx={styles.item}>
        <Workspaces sx={styles.icon} />
        <Typography>Grupos</Typography>
      </Box>
      <Box component={Link} to="/alien-species-page/data" sx={styles.item}>
        <DataObject sx={styles.icon} />
        <Typography>Dados</Typography>
      </Box>
      <Box component={Link} to="/alien-species-page/model" sx={styles.item}>
        <Timeline sx={styles.icon} />
        <Typography>Modelo</Typography>
      </Box>
      <Box component={Link} to="/alien-species-page/paper" sx={styles.item}>
        <Article sx={styles.icon} />
        <Typography>Artigo</Typography>
      </Box>
      <Box component={Link} to="/alien-species-page/people" sx={styles.item}>
        <Groups sx={styles.icon} />
        <Typography>Pessoas</Typography>
      </Box>
      <Box
        component={Link}
        to="/alien-species-page/references"
        sx={styles.item}
      >
        <FormatListBulleted sx={styles.icon} />
        <Typography>Referências</Typography>
      </Box>
    </Container>
  );
};

export default Leftbar;
