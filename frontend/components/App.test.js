import AppFunctional from "./AppFunctional";
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const testText = "Koordinatlar (2-1)";

test("Header Text Check", () => {
  render(<AppFunctional />);
  const info = screen.getByText(/0 kere ilerlediniz/i);
  expect(info).toBeInTheDocument();
  const left = screen.getByText("SOL");
  fireEvent.click(left);
  fireEvent.click(left);
  expect(screen.getByText(/1 kere ilerlediniz/i)).toBeInTheDocument();
});

test("Coordinate Text Check", () => {
  render(<AppFunctional />);
  const info = screen.getByText(/Koordinatlar/i);
  expect(info).toBeInTheDocument();
  const left = screen.getByText("SOL");
  fireEvent.click(left);
  fireEvent.click(left);
  expect(screen.getByText(/Koordinatlar/i).textContent).toBe(
    "Koordinatlar (1-2)"
  );
});

test("Button Check", () => {
  render(<AppFunctional />);
  const button = screen.getAllByRole("button");
  expect(button.length).toBe(6);
});

test("Check B class", () => {
  render(<AppFunctional />);
  const bCell = screen.getByText(/B/i);
  expect(bCell.className).toBe("square active");
});

test("Check e-mail input", () => {
  render(<AppFunctional />);
  const emailInput = screen.getByPlaceholderText("email girin");
  fireEvent.change(emailInput, {
    target: { value: "aksoyhakan" },
  });
  expect(screen.getByDisplayValue("aksoyhakan")).toBeInTheDocument();
});
