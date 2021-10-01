import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
  render(<CheckoutForm/>);
});

test("shows success message on submit with form details", () => {
  render(<CheckoutForm/>);
  const fnInput = screen.getByLabelText("First Name:");
  const lnInput = screen.getByLabelText("Last Name:");
  const addressInput = screen.getByLabelText("Address:");
  const cityInput = screen.getByLabelText("City:");
  const stateInput = screen.getByLabelText("State:");
  const zipInput = screen.getByLabelText("Zip:");

  const fn = "Daniel";
  const ln = "Reinagel";
  const address = "123 Baker St.";
  const city = "Cornville";
  const state = "AZ";
  const zip = "86325";

  userEvent.type(fnInput, fn);
  userEvent.type(lnInput, ln);
  userEvent.type(addressInput, address);
  userEvent.type(cityInput, city);
  userEvent.type(stateInput, state);
  userEvent.type(zipInput, zip);

  const button = screen.getByRole("button");
  userEvent.click(button);

  const successMessage = screen.findByTestId("successMessage");
  successMessage.then(() => {
    screen.getByText(new RegExp(fn));
    screen.getByText(new RegExp(ln));
    screen.getByText(new RegExp(address));
    screen.getByText(new RegExp(city));
    screen.getByText(new RegExp(state));
    screen.getByText(new RegExp(zip));
  });
});
