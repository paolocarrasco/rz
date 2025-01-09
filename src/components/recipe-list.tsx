import {Recipe} from "@/components/types/recipe";
import {RecipeItem} from "./recipe-item";

type RecipeListProps = {
  recipes: Recipe[];
}

export function RecipeList({recipes}: RecipeListProps) {
  return (
    <section className="dishes">
      {
        recipes.map((recipe, index) => (
          <RecipeItem recipe={recipe} key={index}/>
        ))
      }
    </section>
  );
}