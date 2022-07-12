/**
 * TODO:
 * - [x] make navbar
 * - [x] make sidebar
 * - [x] fix page open when click on the logo
 * - [x] create event to drop a menu down when the `MenuIcon` is clicked in `xs` size.
 * - make bottom bar with contact information about the developer and important links.
 * - fix the y tick labels 10M, 11M, 12M, 13M.
 */

import Structure from "../../components/Structure";
import Dashboard from "../../components/Dashboard";
import { Typography } from "@mui/material";

import { FormattedMessage } from "react-intl";
import { Link } from "react-router-dom";

const Home = () => {
  const groupId = "pooled";

  return (
    <div>
      <Structure
        title={
          <FormattedMessage id="home.title" default="Início"></FormattedMessage>
        }
        feedContent={
          <div>
            <Typography variant="body1" mb={5}>
              <FormattedMessage
                id="home.paragraph1"
                default=""
                values={{
                  aqui: (
                    <Link to="/alien-species-page/people">
                      <FormattedMessage id="aqui" message="aqui" />
                    </Link>
                  ),
                  here: (
                    <Link to="/alien-species-page/people">
                      <FormattedMessage id="here" message="here" />
                    </Link>
                  ),
                }}
              ></FormattedMessage>
              <Typography variant="body1">
                <FormattedMessage id="home.paragraph2" default="" />
              </Typography>
            </Typography>
            <Typography variant="h2" color="gray" mb={3}>
              <FormattedMessage id="home.dataTitle" default="Dados" />
            </Typography>
            <Typography variant="body1">
              <FormattedMessage id="home.dataParagraph1" default="" />
            </Typography>
            <Typography variant="body1" mb={5}>
              <FormattedMessage
                id="home.dataParagraph2"
                default=""
                values={{
                  aqui: (
                    <Link to="/alien-species-page/groups">
                      <FormattedMessage id="aqui" message="aqui" />
                    </Link>
                  ),
                  here: (
                    <Link to="/alien-species-page/groups">
                      <FormattedMessage id="here" message="here" />
                    </Link>
                  ),
                }}
              />
            </Typography>
            <Dashboard groupId={groupId} />
          </div>
        }
      />
    </div>
  );
};

export default Home;
