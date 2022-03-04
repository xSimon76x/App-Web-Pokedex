import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import DescriptionPokedex from "../../components/descriptionPokedex"

test('renders content DescriptionPokedex', () => {
    const note = 1
    const component = render(<DescriptionPokedex idPokemon={note} />)
    console.log(component)
})                           