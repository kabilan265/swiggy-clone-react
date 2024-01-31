import { render, screen } from "@testing-library/react"
import ResCard, { isHighlyRated } from "../src/components/ResCard"
import resCardDetails from "./mocks/resCardDetails.json"
import '@testing-library/jest-dom'

test('test rescard render', () => {
    render(<ResCard resData={resCardDetails} />)
    const name = screen.getByText('Oven Story Pizza - Standout Toppings');
    expect(name).toBeInTheDocument();
})

test('test higher order functions(highly rated)', () => {
    const HighlyRated = isHighlyRated(ResCard)
    render(<HighlyRated resData={resCardDetails}></HighlyRated>)
    const ratedText = screen.getByText('Top Rated');
    expect(ratedText).toBeInTheDocument();
})