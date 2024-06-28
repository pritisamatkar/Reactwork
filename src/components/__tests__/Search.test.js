import { fireEvent, render, screen} from "@testing-library/react";
import { act } from "react";
import Body from "../Body";
import "@testing-library/jest-dom";
import MOCK_DATA  from '../mocks/mockResListData.json';
import { BrowserRouter } from "react-router-dom";

//simulate fetch funtion
global.fetch = jest.fn( () =>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    });
})
it('should render Body component with Search ', async () =>{
    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
 ) ) ;

 //assert
const searchButton = screen.getByRole("button",{name:"Search"});
const searchInput = screen.getByTestId("searchInput");
fireEvent.change(searchInput,{ target : {
    value: "pizza"
}})

fireEvent.click(searchButton);
 const cards = screen.getAllByTestId("resCard");
 expect(cards.length).toBe(1);
});
it('should filter top rated restraurants ', async () =>{
    await act(async () => render(
    <BrowserRouter>
        <Body />
    </BrowserRouter>
 ) ) ;

 //assert
 const topRatedBtn = screen.getByRole("button", {name : "Top Rated Restraurants"});
fireEvent.click(topRatedBtn);
//filter card after cliking on top rated btn
const cards = screen.getAllByTestId("resCard");
const cardsafterFilter = screen.getAllByTestId("resCard")
expect(cardsafterFilter.length).toBe(4);

});