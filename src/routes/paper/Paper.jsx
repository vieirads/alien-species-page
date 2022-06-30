/**
 * TODO:
 * Information about the paper
 */
import { FormattedMessage } from "react-intl";
import Structure from "../../components/Structure";

const Paper = () => {
  return (
    <div>
      <Structure
        title={
          <FormattedMessage
            id="paper.title"
            default="Artigo"
          ></FormattedMessage>
        }
        feedContent={<div>Under development.</div>}
      />
    </div>
  );
};

export default Paper;
