/**
 * TODO:
 * - [x] add radio button to change from linear to log scale in bar and scatter plots.
 */

import { Grid, Paper, Typography } from "@mui/material";
import BarPlot from "./BarPlot";
import MapPlot from "./MapPlot";
import PiePlot from "./PiePlot";
import ScatterPlot from "./ScatterPlot";

import mapData from "../data/finalMapData";
import barData from "../data/finalBarData";
import pieData from "../data/occurrences/pieData";

import groupOccurrences from "../data/group_occurrences";
import occurrencesAll from "../data/occurrences/occurrencesAll";
import { FormattedMessage, FormattedNumber } from "react-intl";

const styles = {
  paper: {
    height: "25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: 5,
  },
  numbers: {
    fontSize: "1.2rem",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: "1.5rem",
  },
};

const angleGroups = {
  pooled: -100,
  molluscs: -20,
  arachnids: 0,
  crustaceans: -50,
  insects: -70,
  fishes: -290,
  amphibians: -300,
  reptiles: -260,
  birds: -280,
  mammals: -320,
  pteridophytes: -280,
  angiosperms: -295,
};

// const formatThousand = (n) => {
//   return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
// };

const Dashboard = ({ groupId }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={4}>
        <Paper sx={styles.paper}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              gap: "3rem",
            }}
          >
            <div style={styles.item}>
              <Typography sx={styles.title} color="gray">
                <FormattedMessage
                  id="dashboard.pie.occurrences"
                  default="Ocorrências"
                ></FormattedMessage>
              </Typography>
              <Typography sx={styles.numbers}>
                <FormattedNumber value={groupOccurrences[groupId].total} />
                {/* {formatThousand(groupOccurrences[groupId].total)} */}
              </Typography>
            </div>
            <div style={styles.item}>
              <Typography sx={styles.title} color="gray">
                <FormattedMessage
                  id="dashboard.pie.species"
                  default="Espécies"
                ></FormattedMessage>
              </Typography>
              <Typography sx={styles.numbers}>
                {groupOccurrences[groupId].num_species}
              </Typography>
            </div>
          </div>
          <PiePlot data={pieData[groupId]} angle={angleGroups[groupId]} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={8}>
        <Paper sx={styles.paper}>
          <MapPlot data={mapData[groupId]} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper sx={styles.paper}>
          <BarPlot data={barData[groupId]} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
        <Paper sx={styles.paper}>
          <ScatterPlot data={occurrencesAll[groupId]} />
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
