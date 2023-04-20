import React, { useEffect, useState } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import data from "../data/index.js";

const Question = () => {
  const [value, setValue] = useState("");
  const question = data[1];

  const handleChange = (event) => {
    setValue(event.target.value);
    console.log("Selected value:", event.target.value);
  };

  useEffect(() => {
    console.log(data);
  }, []);

  return (
    <div key={question.id}>
      <Typography variant="h5">{question.question}</Typography>
      <RadioGroup value={value} onChange={handleChange}>
        {question.options.map((option, index) => (
          <FormControlLabel
            key={index}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default Question;
