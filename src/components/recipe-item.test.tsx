import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RecipeItem} from "./recipe-item";

describe('RecipeItem', () => {
  it('should render the recipe item with name, description, image and ingredients', () => {
    // arrange
    const mockPastaRecipe = {
      name: 'Pasta Carbonara',
      description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      imageSource: '/img/carbonara.jpg',
      ingredients: ['pasta', 'tomato sauce'],
      steps: ['boil pasta', 'add sauce']
    };

    // act
    render(<RecipeItem recipe={mockPastaRecipe}/>);

    // assert
    const ingredientList = screen.getAllByRole('listitem');
    const [firstIngredient, secondIngredient] = ingredientList;

    expect(screen.getByRole('heading', {
      level: 2
    })).toHaveTextContent('Pasta');
    expect(screen.getByRole('paragraph')).toHaveTextContent('A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.');
    expect(ingredientList).toHaveLength(2);
    expect(firstIngredient).toHaveTextContent('pasta');
    expect(secondIngredient).toHaveTextContent('tomato sauce');
    expect(screen.getByAltText('Pasta Carbonara')).toBeInTheDocument();
  });
});