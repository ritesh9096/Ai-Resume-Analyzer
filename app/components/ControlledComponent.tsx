

import { useState } from "react";

const ControlledComponent = () => {
  const [value, setValue] = useState("");

  // Handle submit function to submit the value and reset the input field
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") alert("Please enter a value");// Handle empty input and show alert
    setValue("");
    console.log(value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default ControlledComponent;
