/**
 * TODO:
 * - information about the data
 */
import { FormattedMessage } from "react-intl";
import Structure from "../../components/Structure";

const Data = () => {
  return (
    <div>
      <Structure
        title={
          <FormattedMessage id="data.title" default="Dados"></FormattedMessage>
        }
        feedContent={<div>Under development.</div>}
      />
    </div>
  );
};

export default Data;
