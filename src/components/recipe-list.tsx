import {Recipe} from "@/components/types/recipe";
import {RecipeItem} from "./recipe-item";

export function RecipeList({recipes}: {
  recipes: Recipe[]
}) {
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