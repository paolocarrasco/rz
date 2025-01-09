import Image from 'next/image';
import {Recipe} from "@/app/list/components/types/recipe";
import {sanitizeImageSourceForProduction} from "../../list/lib/image-sanitization";

type RecipeItemProps = {
  recipe: Recipe;
}

export const RecipeItem = ({
                             recipe: {
                               description,
                               imageSource,
                               ingredients,
                               name
                             }
                           }: RecipeItemProps) => {
  return (
    <article>
      <Image
        src={sanitizeImageSourceForProduction(imageSource)}
        alt={name} width={150} height={133}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <section>
        <h3>Ingredientes principales</h3>
        <ul>{ingredients.map((ingredient: string, index: number) => (<li key={index}>{ingredient}</li>))}</ul>
      </section>
    </article>
  );
};