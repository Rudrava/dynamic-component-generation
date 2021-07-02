import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

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

export default RootPage;
