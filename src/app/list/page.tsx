import {obtainRecipes} from "@/app/list/lib/recipe-fetcher";
import {RecipeList} from "@/app/list/components/recipe-list";
import InspirationHint from "@/app/list/components/inspiration-hint";

const Page = async () => {
  const recipes = await obtainRecipes();

  return (
    <div className="main wrapper clearfix">
      <RecipeList recipes={recipes}/>
      <InspirationHint recipe={recipes[3]}/>
    </div>
  );
};

export default Page;