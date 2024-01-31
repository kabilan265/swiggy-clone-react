import Contact from "../src/components/Contact";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


test('test heading render', () => {
  render(<Contact />)
  const heading = screen.getByRole('heading')
  expect(heading).toBeInTheDocument();
})

test('test length of input boxes', () => {
  render(<Contact />)
  const inputBoxes = screen.getAllByRole('textbox');
  expect(inputBoxes.length).toBe(2)
})