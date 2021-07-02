import React from "react";
import { InputFieldType } from "../ComponentTypes";
import { useHandlers } from "../lib/Component.context";

export const TextTypeInput = ({ data }) => {
  const { onChange } = useHandlers();
  return (
    <div className="inputField">
      <label htmlFor={data?.fieldName}>{data?.fieldLabel}</label>
      <input
        className="input"
        onChange={onChange}
        type={data?.fieldType}
        placeholder={data?.fieldPlaceHolder}
        name={data?.fieldName}
        id={data?.fieldName}
        min={data?.min}
        max={data?.max}
        required={data?.required}
      />
    </div>
  );
};
export const OptionTypeInput = ({ data }) => {
  const { onChange } = useHandlers();
  const OptionOnChangeHandlerDefault = (e) => {
    const value = [];
    document
      .querySelectorAll(`input[type=${data.fieldType}]`)
      .forEach((node) => node.checked && value.push(node.value));
    onChange({
      target: { name: data?.fieldName, value },
    });
  };
  return (
    <div className="inputField">
      <h3 className="label">{data?.fieldLabel}</h3>
      {data?.options.map((opt) => (
        <div className="optionField" key={Math.round(Math.random() * 10000)}>
          <label htmlFor={opt?.value}>{opt?.label}</label>
          <input
            className="input"
            onChange={OptionOnChangeHandlerDefault}
            type={opt?.optionType}
            name={data?.fieldName}
            id={opt?.value}
            value={opt?.value}
            checked={opt?.checked}
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
      <label key={Math.round(Math.random() * 10000)} htmlFor={data?.fieldName}>
        {data?.fieldLabel}
      </label>

      <select
        className="input"
        onChange={onChange}
        name={data?.fieldName}
        id={data?.fieldName}
        required={data?.required}
      >
        {data?.options.map((opt) => (
          <option key={Math.round(Math.random() * 10000)} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

const genInput = (data) => {
  return data?.map((compData) => {
    switch (compData.fieldType) {
      //   RENDERS same type of input box
      case InputFieldType.text:
      case InputFieldType.number:
      case InputFieldType.email:
      case InputFieldType.password:
        return (
          <TextTypeInput
            key={Math.round(Math.random() * 10000)}
            data={compData}
          />
        );

      //   RENDERS same type of dropdown
      case InputFieldType.select:
        return (
          <DropdownTypeInput
            key={Math.round(Math.random() * 10000)}
            data={compData}
          />
        );

      //   RENDERS same type of multiple  field to check one or many from
      case InputFieldType.checkbox:
      case InputFieldType.radio:
        return (
          <OptionTypeInput
            key={Math.round(Math.random() * 10000)}
            data={compData}
          />
        );
      default:
        return null;
    }
  });
};

export default genInput;
