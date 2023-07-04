import React from "react";
import { Button } from "@mui/material";
import { render, screen } from "@testing-library/react";

describe(`App`, () => {
  it(`renders headline`, () => {
    render(<Button>test</Button>);

    screen.debug();
  });
});
