import { fireEvent, render , screen} from "@testing-library/react";
import RestraurantCard from '../RestraurantCard';
import "@testing-library/jest-dom";
import MOCK_DATA from '../mocks/resDataMock.json'

it('should render RestraurantCard component with props data ', () =>{
    render(< RestraurantCard   resData ={MOCK_DATA}/> );
    const name = screen.getByText("KFC");
    expect(name).toBeInTheDocument();

});