import { useState } from "react";
import List from "./components/list/List";
import "./App.css";
import { IState } from "./model/state";
import AddToList from "./components/addToList/AddToList";

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Merdan Atayew",
      age: 25,
      url: "",
      note: "Gonshy",
    },
  ]);

  return (
    <div className="container">
      <h1>People invited to party</h1>
      <List people={people} />
      <AddToList
        people={people}
        setPeople={setPeople}
      />
    </div>
  );
}

export default App;
