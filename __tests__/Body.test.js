import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../src/components/Body"
import { BrowserRouter } from "react-router-dom"
import resList from "../__tests__/mocks/ResList.json"
import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom'

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(resList)
        }
    })
})
test('tests body component', async () => {
    await act(async () => render(
        <BrowserRouter><Body /></BrowserRouter>
    ))
    const searchBtn = screen.getByRole('button', { name: 'search' });
    const cardsBeforeSearch = screen.getAllByTestId('res-card');
    const input = screen.getByTestId('search-input');

    expect(cardsBeforeSearch.length).toBe(20)
    fireEvent.change(input, { target: { value: "KFC" } });
    fireEvent.click(searchBtn);
    const cardsAfterSearch = screen.getAllByTestId('res-card');
    expect(cardsAfterSearch.length).toBe(2);
})