/**
 * TODO:
 * - component to display the species
 * - [x]fix birds occurrences data
 * - [x]make scatter plots for number of occurrences
 * - make maps with number of occurrences in each country
 * - make bar plots for number of occurrences (per status) in each continent
 */

import { FormattedMessage } from "react-intl";
import { useParams } from "react-router-dom";

import Dashboard from "../../components/Dashboard";
import Structure from "../../components/Structure";

const Group = () => {
  const { groupId } = useParams();

  return (
    <div>
      <Structure
        title={<FormattedMessage id={`groups.${groupId}.title`} />}
        feedContent={
          <div>
            <FormattedMessage
              id={`groups.${groupId}.paragraph`}
            ></FormattedMessage>
            <Dashboard groupId={groupId} />
          </div>
        }
      />
    </div>
  );
};

export default Group;
