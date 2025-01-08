import Image from 'next/image';

type RecipeItem = {
  name: string;
  description: string;
  image: {
    alternativeText: string;
    url: string;
  };
  ingredients: string[];
}

type RecipeItemProps = {
  recipe: RecipeItem;
}

export const RecipeItem = ({recipe: {description, image, ingredients, name}}: RecipeItemProps) => (
  <article>
    <h2>{name}</h2>
    <p>{description}</p>
    <ul>{ingredients.map((ingredient, index) => (<li key={index}>{ingredient}</li>))}</ul>
    <Image src={image.url} alt={image.alternativeText} width={180} height={150} />
  </article>
);