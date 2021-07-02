import genForm from "../components/Form";
import genInput from "../components/Inputs";
import { genList } from "../components/List";
import { genModal } from "../components/Modal";
import { genTable } from "../components/Table";
import { ComponentType } from "../ComponentTypes";

export const genComponent = (type, compData) => {
  switch (type) {
    case ComponentType.input:
      return genInput(compData);
    case ComponentType.form:
      return genForm(compData);
    case ComponentType.modal:
      return genModal(compData);
    case ComponentType.list:
      return genList(compData);
    case ComponentType.table:
      return genTable(compData);
    default:
      return "Couldnt gen component";
  }
};
