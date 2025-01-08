import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/react";
import {RecipeItem} from "./recipe-item";

describe('RecipeItem', () => {
  it('should render the recipe item', () => {
    // arrange
    const mockPastaRecipe = {
      name: 'Pasta',
      description: 'A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      image: {
        alternativeText: 'A plate of spaghetti carbonara',
        url: '/img/carbonara.jpg'
      },
      ingredients: ['pasta', 'tomato sauce'],
      steps: ['boil pasta', 'add sauce']
    };

    // act
    render(<RecipeItem recipe={mockPastaRecipe}/>);

    // assert
    const ingredientList = screen.getAllByRole('listitem');
    const [firstIngredient, secondIngredient] = ingredientList;

    expect(screen.getByRole('heading')).toHaveTextContent('Pasta');
    expect(screen.getByRole('paragraph')).toHaveTextContent('A classic Italian pasta dish with eggs, cheese, pancetta, and pepper.');
    expect(ingredientList).toHaveLength(2);
    expect(firstIngredient).toHaveTextContent('pasta');
    expect(secondIngredient).toHaveTextContent('tomato sauce');
    expect(screen.getByAltText('A plate of spaghetti carbonara')).toBeInTheDocument();
  });
});