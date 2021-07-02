const genData = {
  //   ================ FORM ================
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
  //   ================ INPUT ================
  input: {
    test: "input",
    type: "input",
    data: [
      {
        fieldLabel: "Username",
        fieldName: "username",
        fieldType: "text",
        fieldPlaceHolder: "username",
        required: false,
      },
      {
        fieldLabel: "Password",
        fieldName: "password",
        fieldType: "password",
        fieldPlaceHolder: "password",
        required: false,
      },
    ],
  },
  modalWithData: {
    test: "modal-with-data",
    type: "modal",
    data: {
      modalHeader: "New Modal",
      buttonLabel: "Open Modal",
      modelId: "modal",
      modalState: false,
      child: [
        {
          type: "list",
          data: {
            listHeader: "List 1",
            child: [
              { name: "this", value: "that" },
              { name: "who", value: "what" },
            ],
          },
        },
        {
          type: "list",
          data: {
            listHeader: "List 2",
            child: [
              { name: "him", value: "her" },
              { name: "it ", value: "it" },
            ],
          },
        },
        {
          type: "input",
          data: [
            {
              fieldLabel: "Username",
              fieldName: "username",
              fieldType: "text",
              fieldPlaceHolder: "username",
              required: false,
            },
            {
              fieldLabel: "Password",
              fieldName: "password",
              fieldType: "password",
              fieldPlaceHolder: "password",
              required: false,
            },
          ],
        },
        {
          type: "form",
          data: {
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
            ],
          },
        },
        {
          type: "table",
          data: {
            tableHeader: "Menu",
            headers: ["Food Name", "Price"],
            records: [
              ["Egg Rolls", "80"],
              ["Momo", "60"],
              ["Biriyani", "120"],
              ["Chilli Momo", "80"],
              ["Wai Wai", "30"],
              ["Omlette", "20"],
            ],
          },
        },
      ],
    },
  },
  list: {
    test: "list",
    type: "list",
    data: {
      listHeader: "Hustle",
      child: [
        { name: "one", value: "1" },
        { name: "two", value: "2" },
      ],
    },
  },
  dataTable: {
    test: "data-table",
    type: "table",
    data: {
      tableHeader: "Frands",
      headers: ["First Name", "Last Name"],
      records: [
        ["Rudrava", "Mukherjee"],
        ["Adwait", "Pradhan"],
        ["Avilash", "Ghosh"],
        ["Purab", "Sharma"],
        ["Yuvraj", "Singh"],
      ],
    },
  },
};
export default genData;
