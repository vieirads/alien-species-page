/**
 * TODO:
 * - component to display the species
 * - [x]fix birds occurrences data
 * - [x]make scatter plots for number of occurrences
 * - make maps with number of occurrences in each country
 * - make bar plots for number of occurrences (per status) in each continent
 */

import { Link } from "@mui/material";
import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";

import Dashboard from "../../components/Dashboard";
import Structure from "../../components/Structure";

const groupIdToWiki = {
  pt: {
    molluscs: "Moluscos",
    arachnids: "Aracn%C3%ADdeos",
    crustaceans: "Crust%C3%A1ceo",
    insects: "Insetos",
    fishes: "Peixe",
    amphibians: "Anf%C3%ADbios",
    reptiles: "R%C3%A9pteis",
    birds: "Aves",
    mammals: "Mam%C3%ADferos",
    pteridophytes: "Pteridophyta",
    angiosperms: "Angiosperma",
  },
  en: {
    molluscs: "Mollusca",
    arachnids: "Arachnid",
    crustaceans: "Crustacean",
    insects: "Insect",
    fishes: "Fish",
    amphibians: "Amphibian",
    reptiles: "Reptile",
    birds: "Bird",
    mammals: "Mammal",
    pteridophytes: "Pteridophyte",
    angiosperms: "Flowering_plant",
  },
};

const Group = () => {
  const { groupId } = useParams();

  return (
    <div>
      <Structure
        title={<FormattedMessage id={`groups.${groupId}.title`} />}
        feedContent={
          <div>
            <FormattedMessage
              id={`group.${groupId}.description`}
              values={{
                Wikipedia: (
                  <Link
                    href={`https://en.wikipedia.org/wiki/${groupIdToWiki.en[groupId]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage id="Wikipedia" message="Wikipedia" />
                  </Link>
                ),
                Wikipédia: (
                  <Link
                    href={`https://pt.wikipedia.org/wiki/${groupIdToWiki.pt[groupId]}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FormattedMessage id="Wikipédia" message="Wikipédia" />
                  </Link>
                ),
              }}
            />
            <Dashboard groupId={groupId} />
          </div>
        }
      />
    </div>
  );
};

export default Group;
