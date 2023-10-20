import { screen, render, fireEvent } from "@testing-library/react";
import Counter from "./Counter";
import { Button } from "bootstrap";

test ("counter should have 10 by default", () => {
    render (<Counter/>);

    const count = screen.getByText('10')
    expect(count).toBeInTheDocument

})

test ("Increment button is there", () => {
    render (<Counter/>)

    const incrementBtn = screen.getByRole("button", {name:/increment/i})
    const decrementBtn = screen.getByRole("button", {name:/decrement/i})
    
    expect(incrementBtn).toBeInTheDocument;
    expect(decrementBtn).toBeInTheDocument;
})

test ("increment and decrement buttons work", () => {
    render(<Counter/>)
    
    const incrementBtn = screen.getByRole("button", {name:/increment/i})
    const decrementBtn = screen.getByRole("button", {name:/decrement/i})
    const count = screen.getByText('10')
    
    fireEvent.click(decrementBtn)
    expect(count).toHaveTextContent("9")

    fireEvent.click(incrementBtn)
    expect(count).toHaveTextContent("10")

    
})