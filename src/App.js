import genData from "./Data";
import { genComponent } from "./lib/Filter";

function App() {
  return (
    <>
      {Object.keys(genData).map((key, i) => {
        const compData = genData[key];
        return (
          <section key={i + 1}>
            <div>
              {genComponent(compData.type, compData.data, (e) =>
                console.log({ name: e.target.name, value: e.target.value })
              )}
            </div>
          </section>
        );
      })}
    </>
  );
}

export default App;
