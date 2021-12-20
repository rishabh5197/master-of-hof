import "./App.css";
import FilterByAge from "./components/filterbyage";
import FilterByLetter from "./components/filterbystartletter";
import HOF from "./components/HigherOrderComponent";
import TotalExperience from "./components/totalexperience";
import UserType from "./components/UserType";

function App() {
  return (
    <div className="App">
      <h1>Display All Items</h1>
      <div>
        <HOF />
      </div>
      <h1>Display Based On User Type(Designer)</h1>
      <div>
        <UserType />
      </div>
      <h1>Filter All data starting with J</h1>

      <div>
        <FilterByLetter />
      </div>
      <h1>
        Filter All data based on age greater than 28 and age less than or equal
        to 50
      </h1>

      <div>
        <FilterByAge />
      </div>
      <h1>Filter total years of designers</h1>
      <div>
        <TotalExperience />
      </div>
    </div>
  );
}

export default App;
