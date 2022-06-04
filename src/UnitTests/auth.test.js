import {render, screen} from "@testing-library/react";
import Auth from "../components/auth";

test("firstname input should be rendered", ()=>{
    render(<Auth/>);
    const userInputEl = screen.getByPlaceholderText(/Enter firstname/i);
    expect(userInputEl).toBeInTheDocument()
});