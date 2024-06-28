import Contact from "../Contact";
import { render , screen} from "@testing-library/react";
import "@testing-library/jest-dom";

describe( " Contact us page test cases",() =>{
    //you can write it instead of test/ it is alias for test
    it('should load contact us component',() =>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    });
    it('should load button on contact component',() =>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        expect(button).toBeInTheDocument();
    });
    it('should load input name inside contact page',() =>{
        render(<Contact/>);
        const inputName = screen.getByPlaceholderText("name");
        expect(inputName).toBeInTheDocument();
    });
    it('should load all input box inside contact component',() =>{
        render(<Contact/>);
        //querying
        const inputBoxes = screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});

