import Cards from "./Cards";
import Maps from "./Maps";
import Filter from "./filters";

function Homepage() {
  return (
    <div>
      <Filter />
      <div className="grid grid-cols-2 gap-5">
        <Cards />
        <Maps />
      </div>
    </div>
  );
}

export default Homepage;
