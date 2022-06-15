/**
 * TODO:
 * - card for each specie within the group
 * - details about the specie: number of occurrences (native, invasive) etc.
 * - barplot with the species occurrences
 * - line plot with number of occurrences over time with model
 * - option to active/deactivate the model
 */
import Structure from "../../components/Structure";

const Species = () => {
  return (
    <div>
      <Structure
        title="Species"
        feedContent={
          <div>
            <ul>
              <li>1 - sp</li>
              <li>2 - sp</li>
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default Species;
