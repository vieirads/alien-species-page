/**
 * TODO:
 * information about the data
 */
import { FormattedMessage } from "react-intl";
import Structure from "../../components/Structure";

const Model = () => {
  return (
    <div>
      <Structure
        title={
          <FormattedMessage
            id="model.title"
            default="Modelo"
          ></FormattedMessage>
        }
        feedContent={<div>Under development</div>}
      />
    </div>
  );
};

export default Model;
