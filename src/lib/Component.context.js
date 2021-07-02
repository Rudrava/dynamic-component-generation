import React, { useContext } from "react";

const ComponentContext = React.createContext({});

const ComponentProvider = ({ options, children }) => {
  options = {
    onChange: !options.onChange ? () => {} : options.onChange,
    onSubmit: !options.onSubmit ? () => {} : options.onSubmit,
  };
  return (
    <ComponentContext.Provider value={options}>
      {children}
    </ComponentContext.Provider>
  );
};

export const useHandlers = () => useContext(ComponentContext);

export default ComponentProvider;
