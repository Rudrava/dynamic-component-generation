import React from "react";
import { useHandlers } from "../lib/Component.context";

export const TextTypeInput = ({ data }) => {
  const { onChange } = useHandlers();
  return (
    <div className="inputField">
      <label htmlFor={data?.fieldName}>{data?.fieldLabel}</label>
      <input
        onChange={onChange}
        type={data?.fieldType}
        placeholder={data?.fieldPlaceHolder}
        name={data?.fieldName}
        id={data?.fieldName}
        required={data?.required}
      />
    </div>
  );
};
export const OptionTypeInput = ({ data }) => {
  const { onChange } = useHandlers();
  return (
    <div className="inputField">
      <h3 className="label">{data?.fieldLabel}</h3>
      {data?.options.map((opt) => (
        <div className="optionField" key={Math.round(Math.random() * 10000)}>
          <label htmlFor={opt?.value}>{opt?.label}</label>
          <input
            onChange={(e) => {
              const value = [];
              document
                .querySelectorAll(`input[type=${data.fieldType}]`)
                .forEach((node) => node.checked && value.push(node.value));
              onChange({
                target: { name: data?.fieldName, value },
              });
            }}
            type={opt?.optionType}
            name={data?.fieldName}
            id={opt?.value}
            value={opt?.value}
          />
        </div>
      ))}
    </div>
  );
};

export const DropdownTypeInput = ({ data }) => {
  const { onChange } = useHandlers();
  return (
    <div className="inputField">
      <label htmlFor={data?.fieldName}>
        {data?.fieldLabel}
        <select onChange={onChange} name={data?.fieldName} id={data?.fieldName}>
          {data?.options.map((opt) => (
            <option key={Math.round(Math.random() * 10000)} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};
