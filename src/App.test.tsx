import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";
import './App.css'

test("renders greeting", () => {
  render(<App />);
  const soughtElement = screen.getByText(/Hello, Steph!/i);
  expect(soughtElement).toBeInTheDocument();
});
