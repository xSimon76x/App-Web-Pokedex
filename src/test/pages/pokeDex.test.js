import React from "react";
import { screen, render } from "@testing-library/react";
import PokeDex from "../../pages/pokeDex"

describe("PokeDex", () => {
    it("must display a title", () => {
        render(<PokeDex />);

        expect(screen.queryByText(/Pokedex registration completed /i)).toBeInTheDocument();
    });
});

// ERROR!!! Link