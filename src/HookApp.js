import React, { useState } from "react";

const useInput = (initValue, validator) => {
  const [value, setValue] = useState(initValue);
  const onChange = (event) => {
    const {
      target: { value },
    } = event;

    let willUpdate = true;
    if (typeof validator === "function") willUpdate = validator(value);
    if (willUpdate) setValue(value);

    return { value, onChange };
  };
};

const HookApp = () => {
  const name = useInput("Mr.");
  return (
    <div>
      <h1>Hello!</h1>
      <input placeholder="name" {...name} />
    </div>
  );
};

export default HookApp;
