/**
 * TODO:
 * - [x] list of groups
 * - [x] each one will have a card with basic information: number of species, number of occurrences (native, invasive) etc.
 * - [x] redirect the pages to each group, e.g., when click on "molluscs" go to the page "/groups/molluscs"
 * - Brief description of each group in the card.
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
                    id="group.molluscs.description"
                    default="Moluscos"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Mollusca"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Moluscos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.arachnids.description"
                    default="Aracnídeos"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Arachnid"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Aracn%C3%ADdeos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.crustaceans.description"
                    default="Crustáceos"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Crustacean"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Crust%C3%A1ceo"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.insects.description"
                    default="Insetos"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Insect"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Insetos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.fishes.description"
                    default="Peixes"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Fish"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Peixe"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.amphibians.description"
                    default="Anfíbios"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Amphibian"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Anf%C3%ADbios"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.reptiles.description"
                    default="Répteis"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Reptile"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/R%C3%A9pteis"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.birds.description"
                    default="Répteis"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Bird"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Aves"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.mammals.description"
                    default="Répteis"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Mammal"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Mam%C3%ADferos"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.pteridophytes.description"
                    default="Pteridófitas"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Pteridophyte"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Pteridophyta"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
                    id="group.angiosperms.description"
                    default="Pteridófitas"
                    values={{
                      Wikipedia: (
                        <a
                          href="https://en.wikipedia.org/wiki/Flowering_plant"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipedia"
                            message="Wikipedia"
                          />
                        </a>
                      ),
                      Wikipédia: (
                        <a
                          href="https://pt.wikipedia.org/wiki/Angiosperma"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <FormattedMessage
                            id="Wikipédia"
                            message="Wikipédia"
                          />
                        </a>
                      ),
                    }}
                  ></FormattedMessage>
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
