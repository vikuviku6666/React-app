import React from "react";
import { Nav } from "./components/NavBar/Nav";
import { Search } from "./components/Search";
import { Tick } from "./components/Tick";
import { Function } from './components/Function';
import { Store } from "./Store";
import "./App.scss";



const App: React.FC = () => {
  const store = React.useContext(Store);
  return (
    <React.Fragment>
     
      <Nav firstName="Vinay" lastName="Kumar" />
      <Search />
      <Tick />
      <Function message="Learning React" age={34} />
    </React.Fragment>
  );
};
export default App;
