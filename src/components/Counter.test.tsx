import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("Counter", () => {
  it("renders initial count", () => {
    render(<Counter />);
    expect(screen.getByText("Count: 0")).toBeDefined();
  });

  it("increments count when increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText("Count: 1")).toBeDefined();
  });

  it("decrements count when decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText("Count: -1")).toBeDefined();
  });

  it("resets count when reset button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    fireEvent.click(incrementButton);
    const resetButton = screen.getByText("Reset");
    fireEvent.click(resetButton);
    expect(screen.getByText("Count: 0")).toBeDefined();
  });
});
