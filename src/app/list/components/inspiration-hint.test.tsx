import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {Recipe} from "./types/recipe";
import InspirationHint from "./inspiration-hint";

describe('InspirationHint', () => {
  it('should render a hint to inspire the user', () => {
    // Arrange
    const thaiRecipeForInspiration: Recipe = {
      name: "Pad Thai",
      description: "Fried noodles with peanuts and vegetables",
      ingredients: ["Noodles", "peanuts", "vegetables"],
      imageSource: "/img/pad-thai.jpg",
    };

    // Act
    render(<InspirationHint recipe={thaiRecipeForInspiration}/>);

    // Assert
    expect(screen.getByRole('paragraph')).toHaveTextContent('Pad Thai');
    expect(screen.getByAltText('Pad Thai')).toBeInTheDocument();
  });
});