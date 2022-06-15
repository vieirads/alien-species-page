import { Grid, Paper, Typography } from "@mui/material";
import BarPlot from "./BarPlot";
import MapPlot from "./MapPlot";
import PiePlot from "./PiePlot";
import ScatterPlot from "./ScatterPlot";

import mapData from "../data/mapData";
import barData from "../data/barData";
import pieData from "../data/occurrences/pieData";

import groupOccurrences from "../data/group_occurrences";
import occurrencesAll from "../data/occurrences/occurrencesAll";

const styles = {
  paper: {
    height: "25rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexWrap: "wrap",
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

const formatThousand = (n) => {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const Dashboard = ({ groupId }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={3}>
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
                Ocorrências
              </Typography>
              <Typography sx={styles.numbers}>
                {formatThousand(groupOccurrences[groupId].total)}
              </Typography>
            </div>
            <div style={styles.item}>
              <Typography sx={styles.title} color="gray">
                Espécies
              </Typography>
              <Typography sx={styles.numbers}>
                {groupOccurrences[groupId].num_species}
              </Typography>
            </div>
          </div>
          <PiePlot data={pieData[groupId]} />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12} xl={9}>
        <Paper sx={styles.paper}>
          <MapPlot data={mapData} />
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
