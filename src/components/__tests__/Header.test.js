import { fireEvent, render , screen} from "@testing-library/react";
import Header from '../Header';
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it('should render Header component with login button', () =>{
    render(
       <BrowserRouter>
         <Provider store={appStore}>
            < Header/>      
        </Provider>
       </BrowserRouter>
    );
    const loginButton = screen.getByRole('button');
    expect(loginButton).toBeInTheDocument();

});
it('should render Header component with Cart items 0', () =>{
    render(
       <BrowserRouter>
         <Provider store={appStore}>
            < Header/>      
        </Provider>
       </BrowserRouter>
    );
    const cartItems = screen.getByText('Cart-(0)');
    expect(cartItems).toBeInTheDocument();

});
it('should render Header component with Cart items 0', () =>{
    render(
       <BrowserRouter>
         <Provider store={appStore}>
            < Header/>      
        </Provider>
       </BrowserRouter>
    );
    //by using regex
    const cartItems = screen.getByText(/Cart/);
    expect(cartItems).toBeInTheDocument();

});
it('should change Login button to Logout on click ', () =>{
    render(
       <BrowserRouter>
         <Provider store={appStore}>
            < Header/>      
        </Provider>
       </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name :"Login"});
    //simulate click
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button",{name :"Logout"});

    expect(logoutButton).toBeInTheDocument();

})