/**
 * TODO:
 * - [x] make navbar
 * - [x] make sidebar
 * - make bottom bar with contact information about the developer and important links
 * - fix page open when click on the logo
 * - create event to drop a menu down when the `MenuIcon` is clicked in `xs` size.
 */

import Structure from "../../components/Structure";
import Dashboard from "../../components/Dashboard";

const Home = () => {
  const groupId = "fishes";
  return (
    <div>
      <Structure
        title={"Início"}
        feedContent={<Dashboard groupId={groupId} />}
      />
    </div>
  );
};

export default Home;
