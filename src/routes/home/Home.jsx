/**
 * TODO:
 * - [x] make navbar
 * - [x] make sidebar
 * - [x] fix page open when click on the logo
 * - [x] create event to drop a menu down when the `MenuIcon` is clicked in `xs` size.
 * - make bottom bar with contact information about the developer and important links
 */

import Structure from "../../components/Structure";
import Dashboard from "../../components/Dashboard";
import { Typography } from "@mui/material";

import { useState } from "react";
import { FormattedMessage } from "react-intl";

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
            <Typography variant="text">
              <FormattedMessage
                id="home.paragraph"
                default="Testando umas coisas aqui."
              ></FormattedMessage>
            </Typography>
            <Dashboard groupId={groupId} />
          </div>
        }
      />
    </div>
  );
};

export default Home;
