import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import PresentationPokedex from "../../components/presentationPokedex"


test('renders content PresentationPokedex', () => {

    const objPokemon = [{
        "id": 25,
        "name": "pikachu",
    }]
    const component = render(<PresentationPokedex objPokemon={objPokemon} />)
    console.log(component)
})    