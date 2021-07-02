import genData from "./Data";
import ComponentProvider from "./lib/Component.context";
import { genComponent } from "./lib/Filter";

const options = {
  onChange: (e) => console.log({ name: e.target.name, value: e.target.value }),
};

function App() {
  return (
    <ComponentProvider options={options}>
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
}

export default App;
