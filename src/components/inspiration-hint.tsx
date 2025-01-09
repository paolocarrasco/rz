import {Recipe} from "@/components/types/recipe";
import Image from "next/image";

const InspirationHint = ({recipe: {name, imageSource}}: { recipe: Recipe }) => (
  <aside>
    <h3>Inspiración para el día:</h3>
    <p>{name}</p>
    <Image src={imageSource} alt={name} width={150} height={133}/>
  </aside>
);

export default InspirationHint;