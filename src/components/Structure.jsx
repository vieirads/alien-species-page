import Navbar from "./Navbar";
import Leftbar from "./Leftbar";
import Feed from "./Feed";
import { Grid } from "@mui/material";

const Structure = ({ title, feedContent }) => {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <Grid
        container
        spacing={2}
        sx={{
          marginLeft: { xl: -20 },
        }}
      >
        <Grid item xs={0} sm={0} md={3} lg={3} xl={3}>
          <Leftbar />
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9} xl={9}>
          <Feed title={title} />
          {feedContent}
        </Grid>
      </Grid>
    </div>
  );
};

export default Structure;
