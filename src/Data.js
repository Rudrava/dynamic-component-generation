const genData = {
  //   ================FORM
  form: {
    test: "form",
    type: "form",
    data: {
      formHeader: "Info Form",
      child: [
        {
          fieldLabel: "First Name",
          fieldName: "first-name",
          fieldType: "text",
          fieldPlaceHolder: "john",
          required: false,
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
          min: 0,
          max: 99,
          fieldPlaceHolder: "69",
          required: false,
        },
        {
          fieldLabel: "Email",
          fieldName: "email",
          fieldType: "email",
          fieldPlaceHolder: "johndoe@work.com",
          required: false,
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
          multiple: false,
          required: false,
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
              checked: true,
            },
            {
              value: "college",
              optionType: "checkbox",
              label: "College",
            },
            { value: "phd", optionType: "checkbox", label: "PHD" },
          ],
          required: false,
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
          required: false,
        },
      ],
    },
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
        required: false,
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
        min: 18,
        max: 99,
        fieldPlaceHolder: "69",
        required: false,
      },
      {
        fieldLabel: "Email",
        fieldName: "email",
        fieldType: "email",
        fieldPlaceHolder: "johndoe@work.com",
        required: false,
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
        required: false,
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
        required: false,
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
        required: false,
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
