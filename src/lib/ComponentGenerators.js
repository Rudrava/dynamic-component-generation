import React from "react";
import { genInput } from "./Filter";

export const generateInput = (data, onChange) =>
  data.map((data) => genInput(data, onChange));

export const generateForm = (data) => (
  <>
    <form className="Form">{console.log(data)}</form>
  </>
);
