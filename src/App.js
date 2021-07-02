import genData from "./Data";
import ComponentProvider from "./lib/Component.context";
import { genComponent } from "./lib/Filter";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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

const RootPage = () => (
  <main>
    <ul>
      <h1>links</h1>
      <li>
        <Link to="/components">Components</Link>
      </li>
      <li>
        <Link to="/data">Raw data</Link>
      </li>
    </ul>

    <Readme />
  </main>
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

const Markdown = `
# COMPONENT DYNAMIC GENERATION

    THIS PROJECT IS A SORT OF pet project where i aim to produce components with JSON data and do it in as much modular form as possible.

## COMPONENTS TARGETED

- [x] input - of types

      - text
      - email
      - number
      - select
      - radio
      - checkbox

- [x] form - takes data and generates a form with given fields

- [x] modal - generates a modal and button to trigger modal

- [x] Data display field - list type data display

- [x] tables - html table GENERATION

# TODO

- [ ] unified data structure
- [ ] data parsing from inputs unified
- [ ] hooks for opening closing modals
- [ ] integration of inputs on lists
- [ ] modal trigger on list
`;

const Readme = () => <ReactMarkdown children={Markdown} />;

export default App;
