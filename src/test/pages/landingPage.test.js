import React from "react";
import { screen, render } from "@testing-library/react";
import LandingPage from "../../pages/landingPage"


//1-crear un test que falle (RED)
// 2 - lo MINIMO NECESARIO000000 para que el test pase (GREEN)
// 3- REFACTORS (clean code, code smells)
// beforeEach(() => render(<LandingPage />));
describe("LandingPage", () => {
    it("must display a title", () => {
        render(<LandingPage />);

        expect(screen.queryByText(/Pokedex/i)).toBeInTheDocument();
    });
    // it("must display the product name CARRITO", () => {
    //     expect(screen.queryByText(/carrito/i)).toßeInTheDocument();
    // });
});