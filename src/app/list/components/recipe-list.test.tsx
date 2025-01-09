import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RecipeList} from "./recipe-list";

describe('RecipeList', () => {
  it('should render as many recipes as received', () => {
    // Arrange
    const indianMockRecipes = [
      {
        name: "Butter Chicken",
        description: "Delicious Indian dish with a creamy sauce.",
        ingredients: ["Chicken", "tomato", "cream", "butter"],
        imageSource: "/img/butterChickenImage.jpg",
      },
      {
        name: "Chicken Tikka Masala",
        description: "Typical Indian dish with a spicy sauce.",
        ingredients: ["Chicken", "tomato", "cream", "spices"],
        imageSource: "/img/chickenTikkaMasalaImage.jpg",
      },
      {
        name: "Chana Masala",
        description: "Indian dish with chickpeas and a spicy sauce.",
        ingredients: ["Chickpeas", "tomato", "spices"],
        imageSource: "/img/chanaMasalaImage.jpg",
      }
    ];

    // Act
    render(<RecipeList recipes={indianMockRecipes}/>);

    // Assert
    const indianRecipes = screen.getAllByRole('article');

    expect(indianRecipes).toHaveLength(3)
    const [butterChickenItem, chickenTikkaMasalaItem, chanaMasalaItem] = screen.getAllByRole('heading', {level: 2,});
    expect(butterChickenItem).toHaveTextContent('Butter Chicken');
    expect(chickenTikkaMasalaItem).toHaveTextContent('Chicken Tikka Masala');
    expect(chanaMasalaItem).toHaveTextContent('Chana Masala');
  });
});