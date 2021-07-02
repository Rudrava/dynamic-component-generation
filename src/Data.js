const genData = {
  //   ================FORM
  form: {
    test: "form",
    type: "form",
    child: [
      {
        fieldLabel: "First Name",
        fieldName: "first-name",
        fieldType: "text",
        fieldPlaceHolder: "john",
        required: true,
      },
      {
        fieldLabel: "Last Name",
        fieldName: "last-name",
        fieldType: "text",
        fieldPlaceHolder: "doe",
        required: false,
      },
      {
        fieldLabel: "Age",
        fieldName: "age",
        fieldType: "number",
        fieldPlaceHolder: "69",
        required: true,
      },
      {
        fieldLabel: "Email",
        fieldName: "email",
        fieldType: "email",
        fieldPlaceHolder: "johndoe@work.com",
        required: true,
      },
      {
        fieldLabel: "State",
        fieldName: "state",
        fieldType: "select",
        options: [
          { value: "", label: "choose your state", disabled: true },
          { value: "wb", label: "West Bengal" },
          { value: "sk", label: "Sikkim" },
          { value: "bh", label: "Bihar" },
          { value: "as", label: "Assam" },
          { value: "nl", label: "Nagaland" },
        ],
        required: true,
      },
      {
        fieldLabel: "Education",
        fieldName: "education",
        fieldType: "checkbox",
        options: [
          { value: "school", label: "School" },
          { value: "college", label: "College" },
          { value: "phd", label: "PHD" },
        ],
        required: true,
      },
      {
        fieldLabel: "Gender",
        fieldName: "gender",
        fieldType: "radio",
        options: [
          { value: "others", label: "Others" },
          { value: "female", label: "Female" },
          { value: "male", label: "Male" },
        ],
        required: true,
      },
    ],
  },
  //   ================INPUT
  input: {
    test: "input",
    type: "input",
    data: [
      {
        fieldLabel: "First Name",
        fieldName: "first-name",
        fieldType: "text",
        fieldPlaceHolder: "john",
        required: true,
      },
      {
        fieldLabel: "Last Name",
        fieldName: "last-name",
        fieldType: "text",
        fieldPlaceHolder: "doe",
        required: false,
      },
      {
        fieldLabel: "Age",
        fieldName: "age",
        fieldType: "number",
        fieldPlaceHolder: "69",
        required: true,
      },
      {
        fieldLabel: "Email",
        fieldName: "email",
        fieldType: "email",
        fieldPlaceHolder: "johndoe@work.com",
        required: true,
      },
      {
        fieldLabel: "State",
        fieldName: "state",
        fieldType: "select",
        options: [
          {
            value: "",
            label: "choose your state",
            disabled: true,
            optionType: "select",
          },
          {
            value: "wb",
            optionType: "select",
            label: "West Bengal",
          },
          { value: "sk", optionType: "select", label: "Sikkim" },
          { value: "bh", optionType: "select", label: "Bihar" },
          { value: "as", optionType: "select", label: "Assam" },
          {
            value: "nl",
            optionType: "select",
            label: "Nagaland",
          },
        ],
        required: true,
      },
      {
        fieldLabel: "Education",
        fieldName: "education",
        fieldType: "checkbox",
        options: [
          {
            value: "school",
            optionType: "checkbox",
            label: "School",
          },
          {
            value: "college",
            optionType: "checkbox",
            label: "College",
          },
          { value: "phd", optionType: "checkbox", label: "PHD" },
        ],
        required: true,
      },
      {
        fieldLabel: "Gender",
        fieldName: "gender",
        fieldType: "radio",
        options: [
          {
            value: "others",
            optionType: "radio",
            label: "Others",
          },
          {
            value: "female",
            optionType: "radio",
            label: "Female",
          },
          { value: "male", optionType: "radio", label: "Male" },
        ],
        required: true,
      },
    ],
  },
  modalWithData: { test: "modal-with-data" },
  modalWithForm: { test: "modal-with-form" },
  dataList: { test: "data-list" },
  dataTable: { test: "data-table" },
  dataHybrid: { test: "data-hybrid" },
};
export default genData;
