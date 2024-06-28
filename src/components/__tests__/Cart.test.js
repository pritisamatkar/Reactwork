import { act } from "react";
import RestraurantMenu from "../RestraurantMenu";
import { fireEvent, render , screen} from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Mock_MENU_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

//simulate fetch funtion
global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(Mock_MENU_DATA);
        }
    });
})

test('should load restra menu component', async ()=>{
await act( async () => render( 
    <BrowserRouter>
<Provider store={appStore}>
    <Header />
    <RestraurantMenu /> 
    <Cart/>
</Provider>
</ BrowserRouter>
));

const accordianHeader = screen.getByText("Recommended (15)");
fireEvent.click(accordianHeader);
//assert
const items = screen.getAllByTestId("foodItems");
expect(items.length).toBe(15);
//getall add_ button
const addBtns = screen.getAllByRole("button", { name:'Add +'});
fireEvent.click(addBtns[0]);
//after click on add btn my cart should get updated in header
expect(screen.getByText("Cart-(1)")).toBeInTheDocument();
const clearCartBtn = screen.getByRole("button", { name:'Clear Cart'});
//expect(screen.getAllByTestId(items.length)).toBe(15);
fireEvent.click(clearCartBtn);
expect(screen.getByText("Cart is empty. Please add items to cart..!")).toBeInTheDocument();
})