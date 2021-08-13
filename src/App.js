import genData from "./Data";
import ComponentProvider from "./lib/Component.context";
import { genComponent } from "./lib/Filter";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RootPage from "./RootPage";
import { useEffect, useRef } from "react";

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
    <main>
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
    </main>
);

const preetyLib = {
    replacer: function (match, pIndent, pKey, pVal, pEnd) {
        var key = "<span class=json-key>";
        var val = "<span class=json-value>";
        var str = "<span class=json-string>";
        var end = "<span class=json-end>";
        var r = pIndent || "";
        if (pKey)
            r =
                r +
                key +
                pKey.split(":")[0] +
                "</span><span class=json-semicolon>:</span>";
        if (pVal)
            r = r + (pVal[0] === '"' ? str : val) + " " + pVal + "</span>";
        if (pEnd) r += end + pEnd + `</span>`;

        return r;
    },
    print: function (obj) {
        var jsonLine = /^( *)("[\w]+": )?("[^"]*"|[\w.+-]*)?([,[{}])?$/gm;
        return JSON.stringify(obj, null, 3)
            .replace(/&/g, "&amp;")
            .replace(/\\"/g, "&quot;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/],/g, `<span class=json-end>],</span>`)
            .replace(/]/g, `<span class=json-end>]</span>`)
            .replace(/},/g, `<span class=json-end>},</span>`)
            .replace(/}/g, `<span class=json-end>}</span>`)

            .replace(jsonLine, this.replacer);
    },
};

const PreetyJSON = ({ json }) => {
    const codeRef = useRef(null);
    useEffect(() => {
        codeRef.current.innerHTML = preetyLib.print(json);
    }, [codeRef, json]);
    return (
        <pre>
            <code ref={codeRef}></code>
        </pre>
    );
};

const Data = () => (
    <body className="data-page">
        {Object.values(genData).map((d, i) => (
            <div className="code" key={i}>
                <h1>{d.type}</h1>
                <PreetyJSON json={d} />
            </div>
        ))}
    </body>
);

export default App;
