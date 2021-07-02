import {
  DropdownTypeInput,
  OptionTypeInput,
  TextTypeInput,
} from "../components/Inputs";
import { ComponentType, InputFieldType } from "../ComponentTypes";
import { generateInput } from "./ComponentGenerators";

export const genComponent = (type, compData, onChange) => {
  switch (type) {
    case ComponentType.input:
      return generateInput(compData, onChange);
    case ComponentType.form:
      return "Form";
    default:
      return "Couldnt gen component";
  }
};

export const genInput = (compData, onChange) => {
  switch (compData.fieldType) {
    //   RENDERS same type of input box
    case InputFieldType.text:
    case InputFieldType.number:
    case InputFieldType.email:
      return (
        <TextTypeInput
          key={Math.round(Math.random() * 10000)}
          data={compData}
          onChange={onChange}
        />
      );

    //   RENDERS same type of dropdown
    case InputFieldType.select:
      return (
        <DropdownTypeInput
          key={Math.round(Math.random() * 10000)}
          data={compData}
          onChange={onChange}
        />
      );

    //   RENDERS same type of multiple  field to check one or many from
    case InputFieldType.checkbox:
    case InputFieldType.radio:
      return (
        <OptionTypeInput
          key={Math.round(Math.random() * 10000)}
          data={compData}
          onChange={onChange}
        />
      );
    default:
      return null;
  }
};
