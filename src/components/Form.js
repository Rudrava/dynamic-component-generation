import { useHandlers } from "../lib/Component.context";
import genInput from "./Inputs";

const Form = ({ compData }) => {
  const { onSubmit } = useHandlers();
  return (
    <form onSubmit={onSubmit}>
      <h1>{compData.formHeader}</h1>
      {genInput(compData.child)}
      <button type="submit">Submit</button>
    </form>
  );
};

const genForm = (compData) => {
  return <Form compData={compData} />;
};
export default genForm;
