import genData from "./Data";
import ComponentProvider from "./lib/Component.context";
import { genComponent } from "./lib/Filter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RootPage from "./RootPage";

function App() {
  return (
    <Router>
      <Route path="/" exact component={RootPage} />
      <Route path="/components" component={Components} />
      <Route path="/data" component={Data} />
    </Router>
  );
}

const Components = () => (
  <ComponentProvider>
    {Object.keys(genData).map((key, i) => {
      const compData = genData[key];
      return (
        <div key={Math.round(Math.random() * 1000)}>
          {genComponent(compData.type, compData.data)}
        </div>
      );
    })}
  </ComponentProvider>
);

const Data = () => (
  <div>
    {Object.keys(genData).map((key, i) => (
      <code key={i}>
        <h1>{genData[key].type}</h1>
        <code>{JSON.stringify(genData[key])}</code>
      </code>
    ))}
  </div>
);

export default App;
