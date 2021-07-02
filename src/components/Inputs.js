import React from "react";

export const TextTypeInput = ({ data, onChange }) => {
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
export const OptionTypeInput = ({ data, onChange }) => {
  return (
    <div className="inputField">
      <h3 className="label">{data?.fieldLabel}</h3>
      {data?.options.map((opt) => (
        <div className="optionField" key={Math.round(Math.random() * 10000)}>
          <label htmlFor={opt?.value}>{opt?.label}</label>
          <input
            onChange={onChange}
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

export const DropdownTypeInput = ({ data, onChange }) => {
  return (
    <div className="inputField">
      <label htmlFor={data?.fieldName}>{data?.fieldLabel}</label>
      <select onChange={onChange} name={data?.fieldName} id={data?.fieldName}>
        {data?.options.map((opt) => (
          <option key={Math.round(Math.random() * 10000)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
