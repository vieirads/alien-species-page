/**
 * TODO:
 * - [x] list of groups
 * - each one will have a card with basic information: number of species, number of occurrences (native, invasive) etc.
 * - redirect the pages to each group, e.g., when click on "molluscs" go to the page "/groups/molluscs"
 *
 */
import Structure from "../../components/Structure";
import GroupCard from "../../components/Card";
import { Grid } from "@mui/material";

import photoMolluscs from "../../imgs/groups/molluscs.jpg";
import photoArachnids from "../../imgs/groups/arachnids.jpg";
import photoCrustaceans from "../../imgs/groups/crustaceans.jpg";
import photoInsects from "../../imgs/groups/insects.jpg";
import photoFishes from "../../imgs/groups/fishes.jpg";
import photoAmphibians from "../../imgs/groups/amphibians.jpg";
import photoReptiles from "../../imgs/groups/reptiles.jpg";
import photoBirds from "../../imgs/groups/birds.jpg";
import photoMammals from "../../imgs/groups/mammals.jpg";
import photoPteridophytes from "../../imgs/groups/pteridophytes.jpg";
import photoAngiosperms from "../../imgs/groups/angiosperms.jpg";

const Groups = () => {
  return (
    <div>
      <Structure
        title="Grupos"
        feedContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Moluscos"
                imgPath={photoMolluscs}
                textInfo=""
                goToPageLink="molluscs"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Araquinídeos"
                imgPath={photoArachnids}
                textInfo=""
                goToPageLink="arachnids"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Crustáceos"
                imgPath={photoCrustaceans}
                textInfo=""
                goToPageLink="crustaceans"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Insetos"
                imgPath={photoInsects}
                textInfo=""
                goToPageLink="insects"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Peixes"
                imgPath={photoFishes}
                textInfo=""
                goToPageLink="fishes"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Anfíbios"
                imgPath={photoAmphibians}
                textInfo=""
                goToPageLink="amphibians"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Répteis"
                imgPath={photoReptiles}
                textInfo=""
                goToPageLink="reptiles"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Pássaros"
                imgPath={photoBirds}
                textInfo=""
                goToPageLink="birds"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Mamíferos"
                imgPath={photoMammals}
                textInfo=""
                goToPageLink="mammals"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Pteridófitas"
                imgPath={photoPteridophytes}
                textInfo=""
                goToPageLink="pteridophytes"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name="Angiospermas"
                imgPath={photoAngiosperms}
                textInfo=""
                goToPageLink="angiosperms"
              ></GroupCard>
            </Grid>
          </Grid>
        }
      />
    </div>
  );
};

export default Groups;
