import {Recipe} from "@/app/list/components/types/recipe";
import Image from "next/image";
import {sanitizeImageSourceForProduction} from "../lib/image-sanitization";

const InspirationHint = ({recipe: {name, imageSource}}: { recipe: Recipe }) => (
  <aside>
    <h3>Inspiración para el día:</h3>
    <p>{name}</p>
    <Image src={sanitizeImageSourceForProduction(imageSource)} alt={name} width={150} height={133}/>
  </aside>
);

export default InspirationHint;