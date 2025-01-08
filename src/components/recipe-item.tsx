import Image from 'next/image';
import {StaticImport} from "next/dist/shared/lib/get-img-props";

type RecipeItem = {
  name: string;
  description: string;
  imageSource: string | StaticImport;
  ingredients: string[];
}

type RecipeItemProps = {
  recipe: RecipeItem;
}

export const RecipeItem = ({recipe: {description, imageSource, ingredients, name}}: RecipeItemProps) => (
  <article>
    <Image src={imageSource} alt={name} width={150} height={133}/>
    <h2>{name}</h2>
    <p>{description}</p>
    <section>
      <h3>Ingredientes principales</h3>
      <ul>{ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
    </section>
  </article>
);