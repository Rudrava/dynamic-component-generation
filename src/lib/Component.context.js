import React, { useContext, useRef } from "react";

const ComponentContext = React.createContext({});

const ComponentProvider = ({ options, children }) => {
    let value = {};
    const components = useRef([]);
    // compData = { compId, type }
    const registerComponents = (compData) => {
        components.current.push(compData);
    };
    options = {
        onChange: !options?.onChange
            ? (e) => {
                  value = { ...value, [e.target.name]: e.target.value };
                  console.log({ name: e.target.name, value: e.target.value });
              }
            : (e) => {
                  value = { ...value, [e.target.name]: e.target.value };
                  options?.onChange(e);
              },
        onSubmit: !options?.onSubmit
            ? (e) => {
                  e.preventDefault();
                  console.log({ e, value });
              }
            : options?.onSubmit,
        value,
    };
    return (
        <ComponentContext.Provider value={{ ...options, registerComponents }}>
            {children}
        </ComponentContext.Provider>
    );
};

export const useHandlers = () => useContext(ComponentContext);

export default ComponentProvider;
