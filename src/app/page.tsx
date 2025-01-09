import Footer from "@/components/footer";
import {RecipeList} from "@/components/recipe-list";
import InspirationHint from "@/components/inspiration-hint";
import {obtainRecipes} from "@/app/lib/recipe-fetcher";

const Page = async () => {
  const recipes = await obtainRecipes();

  return (
    <div className="main wrapper clearfix">
      <RecipeList recipes={recipes}/>
      <InspirationHint recipe={recipes[3]}/>
      <Footer/>
    </div>
  );
};

export default Page;
