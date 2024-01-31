import { fireEvent, render, screen } from "@testing-library/react"
import Header from "../src/components/Header"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import appStore from "../src/utils/appStore"
import '@testing-library/jest-dom'

test('tests header component', () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )

    // checks button has LogIn as text in it
    const loginBtn = screen.getByRole('button', { name: 'LogIn' });
    expect(loginBtn).toBeInTheDocument();

    // using regular expression /cart/
    const cartText = screen.getByText(/cart/);
    expect(cartText).toBeInTheDocument();
})

test('test login button and logout', () => {
    render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
            </BrowserRouter>
        </Provider>
    )
    const loginBtn = screen.getByRole('button', { name: 'LogIn' });
    expect(loginBtn).toBeInTheDocument();
    fireEvent.click(loginBtn);
    const logoutBtn = screen.getByRole('button', { name: 'Logout' });
    expect(logoutBtn).toBeInTheDocument();
})