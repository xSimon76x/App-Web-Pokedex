import React from "react";
import '@testing-library/jest-dom/extend-expect'
import { screen, render } from "@testing-library/react";
import ImgCard from "../../components/imgCard"

test('renders content ImgCard', () => {
    const name = "pikachu"
    const component = render(<ImgCard namePokemon={name} />)
    console.log(component)
})         