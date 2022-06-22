/**
 * TODO:
 * - [x] make navbar
 * - [x] make sidebar
 * - make bottom bar with contact information about the developer and important links
 * - fix page open when click on the logo
 * - create event to drop a menu down when the `MenuIcon` is clicked in `xs` size.
 */

import Structure from "../../components/Structure";
import Dashboard from "../../components/Dashboard";
import { Typography } from "@mui/material";

import translateJson from "../../data/translate.json";
import Navbar from "../../components/Navbar";
import { useState } from "react";

const Home = () => {
  const groupId = "pooled";

  const [language, setLanguage] = useState("pt");

  const handleLanguageChange = () => {
    language === "pt" ? setLanguage("en") : setLanguage("pt");
  };

  return (
    <div>
      {/* <Navbar /> */}
      <Structure
        title={translateJson.home.title[language]}
        feedContent={
          <div>
            <Typography variant="text">
              {translateJson.home.firstParagraph[language]}
            </Typography>
            <Dashboard groupId={groupId} />
          </div>
        }
      />
    </div>
  );
};

export default Home;
