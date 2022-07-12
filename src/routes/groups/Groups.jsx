/**
 * TODO:
 * - [x] list of groups
 * - [x] each one will have a card with basic information: number of species, number of occurrences (native, invasive) etc.
 * - [x] redirect the pages to each group, e.g., when click on "molluscs" go to the page "/groups/molluscs"
 * - [x] Brief description of each group in the card.
 * - make the description with a limit size and a button to expand the text so the cards have all the same size.
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
import { FormattedMessage } from "react-intl";

const Groups = () => {
  return (
    <div>
      <Structure
        title={
          <FormattedMessage
            id="groups.title"
            default="Grupos"
          ></FormattedMessage>
        }
        feedContent={
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.molluscs.title"
                    default="Moluscos"
                  ></FormattedMessage>
                }
                imgPath={photoMolluscs}
                textInfo={
                  <FormattedMessage
                    id="groups.molluscs.resume"
                    default="Moluscos"
                  />
                }
                goToPageLink="molluscs"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.arachnids.title"
                    default="Araquinídeos"
                  ></FormattedMessage>
                }
                imgPath={photoArachnids}
                textInfo={
                  <FormattedMessage
                    id="groups.arachnids.resume"
                    default="Araquinídeos"
                  />
                }
                goToPageLink="arachnids"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.crustaceans.title"
                    default="Crustáceos"
                  ></FormattedMessage>
                }
                imgPath={photoCrustaceans}
                textInfo={
                  <FormattedMessage
                    id="groups.crustaceans.resume"
                    default="Crustáceos"
                  />
                }
                goToPageLink="crustaceans"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.insects.title"
                    default="Insetos"
                  ></FormattedMessage>
                }
                imgPath={photoInsects}
                textInfo={
                  <FormattedMessage
                    id="groups.insects.resume"
                    default="Insetos"
                  />
                }
                goToPageLink="insects"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.fishes.title"
                    default="Peixes"
                  ></FormattedMessage>
                }
                imgPath={photoFishes}
                textInfo={
                  <FormattedMessage
                    id="groups.fishes.resume"
                    default="Peixes"
                  />
                }
                goToPageLink="fishes"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.amphibians.title"
                    default="Anfíbios"
                  ></FormattedMessage>
                }
                imgPath={photoAmphibians}
                textInfo={
                  <FormattedMessage
                    id="groups.amphibians.resume"
                    default="Anfíbios"
                  />
                }
                goToPageLink="amphibians"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.reptiles.title"
                    default="Répteis"
                  ></FormattedMessage>
                }
                imgPath={photoReptiles}
                textInfo={
                  <FormattedMessage
                    id="groups.reptiles.resume"
                    default="Répteis"
                  />
                }
                goToPageLink="reptiles"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.birds.title"
                    default="Pássaros"
                  ></FormattedMessage>
                }
                imgPath={photoBirds}
                textInfo={
                  <FormattedMessage
                    id="groups.birds.resume"
                    default="Répteis"
                  />
                }
                goToPageLink="birds"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.mammals.title"
                    default="Mamíferos"
                  ></FormattedMessage>
                }
                imgPath={photoMammals}
                textInfo={
                  <FormattedMessage
                    id="groups.mammals.resume"
                    default="Répteis"
                  />
                }
                goToPageLink="mammals"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.pteridophytes.title"
                    default="Pteridófitas"
                  ></FormattedMessage>
                }
                imgPath={photoPteridophytes}
                textInfo={
                  <FormattedMessage
                    id="groups.pteridophytes.resume"
                    default="Pteridófitas"
                  />
                }
                goToPageLink="pteridophytes"
              ></GroupCard>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <GroupCard
                name={
                  <FormattedMessage
                    id="groups.angiosperms.title"
                    default="Angiospermas"
                  ></FormattedMessage>
                }
                imgPath={photoAngiosperms}
                textInfo={
                  <FormattedMessage
                    id="groups.angiosperms.resume"
                    default="Pteridófitas"
                  />
                }
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
