/**
 * TODO:
 * - component to display the species
 * - [x]fix birds occurrences data
 * - [x]make scatter plots for number of occurrences
 * - make maps with number of occurrences in each country
 * - make bar plots for number of occurrences (per status) in each continent
 */

import { useParams } from "react-router-dom";

import Dashboard from "../../components/Dashboard";
import Structure from "../../components/Structure";

const translateGroup = {
  molluscs: "Moluscos",
  arachnids: "Araquinídeos",
  crustaceans: "Crustáceos",
  insects: "Insetos",
  fishes: "Peixes",
  amphibians: "Anfíbios",
  reptiles: "Répteis",
  birds: "Pássaros",
  mammals: "Mamíferos",
  algae: "Algas",
  pteridophytes: "Pteridófitas",
  angiosperms: "Angiospermas",
};

const Group = () => {
  const { groupId } = useParams();

  return (
    <div>
      <Structure
        title={translateGroup[groupId]}
        feedContent={<Dashboard groupId={groupId} />}
      />
    </div>
  );
};

export default Group;
