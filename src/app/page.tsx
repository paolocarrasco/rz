import Image from 'next/image';
import lomoSaltadoImage from '../../public/img/lomo-saltado.jpg';
import arrozConPolloImage from "../../public/img/arroz-con-pollo.jpg";
import carapulcraImage from "../../public/img/carapulcra.jpg";
import Footer from "@/components/footer";
import {RecipeItem} from "@/components/recipe-item";

const Page = () => {
  const recipes = [
    {
      name: "Lomo Saltado",
      description: "Riquísimo plato peruano como para chuparse los dedos.",
      ingredients: ["Papa", "carne de vaca", "cebolla", "ají amarillo"],
      imageSource: lomoSaltadoImage,
    },
    {
      name: "Arroz con pollo",
      description: "Típico plato peruano que se cocina en cualquier día.",
      ingredients: ["Arroz", "pollo", "culantro", "ají amarillo"],
      imageSource: arrozConPolloImage,
    },
    {
      name: "Carapulcra",
      description: "Plato de la costa peruana que se cocina con papa seca.",
      ingredients: ["Papa seca", "carne de cerdo", "ají panca"],
      imageSource: carapulcraImage,
    }
  ];

  const [lomoSaltado, arrozConPollo] = recipes;

  return (
    <div className="main wrapper clearfix">
      <section className="dishes">
        <RecipeItem recipe={lomoSaltado} key={0}/>
        <RecipeItem recipe={arrozConPollo} key={1}/>
      </section>
      <aside>
        <h3>Inspiración para el día:</h3>
        <p>Carapulcra</p>
        <Image src={carapulcraImage} alt="Carapulcra"/>
      </aside>
      <Footer/>
    </div>
  );
};

export default Page;
