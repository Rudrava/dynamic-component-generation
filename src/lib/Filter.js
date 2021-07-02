import genForm from "../components/Form";
import { ComponentType } from "../ComponentTypes";

export const genComponent = (type, compData) => {
  switch (type) {
    // case ComponentType.input:
    //   return genInput(compData);
    case ComponentType.form:
      return genForm(compData);
    default:
      return "Couldnt gen component";
  }
};
