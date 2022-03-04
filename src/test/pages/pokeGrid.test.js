import React from "react";
import { screen, render } from "@testing-library/react";
import PokeGrid from "../../pages/pokeGrid"

describe("PokeGrid", () => {
    it("must display a title", () => {
        render(<PokeGrid />);

        expect(screen.queryByText(/PokeGrid/i)).toBeInTheDocument();
    });
});