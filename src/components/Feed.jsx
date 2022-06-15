import { Container, Typography } from "@mui/material";

const styles = {
  container: {
    paddingTop: 12,
    marginBottom: 5,
    // backgroundColor: "yellow",
  },
  title: {
    color: "gray",
    marginLeft: { xs: 3, sm: 3, md: -3, lg: -5, xl: -15 },
  },
};

const Feed = ({ title }) => {
  return (
    <Container sx={styles.container}>
      <Typography variant="h4" sx={styles.title}>
        {title}
      </Typography>
    </Container>
  );
};

export default Feed;
