import { Container, Typography } from "@mui/material";

const styles = {
  container: {
    paddingTop: 12,
    marginBottom: 5,
    marginLeft: -3,
    // backgroundColor: "yellow",
  },
  title: {
    color: "gray",
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
