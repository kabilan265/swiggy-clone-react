import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import Restuarant from "../src/components/Restuarant"
import appStore from '../src/utils/appStore'
import ResMenu from './mocks/ResMenu.json'
import { act } from "react-dom/test-utils"
import '@testing-library/jest-dom'
import Header from '../src/components/Header';
import { BrowserRouter } from "react-router-dom"


global.fetch = jest.fn(() => {
    return Promise.resolve({
        json() {
            return Promise.resolve(ResMenu)
        }
    })
})
test('tests restuarant component', async () => {
    await act(async () =>
        render(
            <Provider store={appStore}>
                <Restuarant></Restuarant>
                <BrowserRouter>
                    <Header></Header></BrowserRouter>
            </Provider>
        ))

    const text = screen.getByText('Burgers')
    expect(text).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: 'Burgers' })
    fireEvent.click(heading);
    const menus = screen.getAllByTestId('menus')
    expect(menus.length).toBe(13)

    const addBtn = screen.getAllByRole('button', { name: 'Add' });
    fireEvent.click(addBtn[0]);
    const cartHas1 = screen.getByText('cart 1')
    expect(cartHas1).toBeInTheDocument();
    
    fireEvent.click(addBtn[0]);
    const cartHas2 = screen.getByText('cart 2')
    expect(cartHas2).toBeInTheDocument();
})