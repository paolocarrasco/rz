import Image from 'next/image';
import lomoSaltadoImage from '../../public/img/lomo-saltado.jpg';
import arrozConPolloImage from "../../public/img/arroz-con-pollo.jpg";
import carapulcraImage from "../../public/img/carapulcra.jpg";

const Page = () => (
  <div className="main wrapper clearfix">
    <section className="dishes">
      <article>
        <Image src={lomoSaltadoImage} alt="Lomo Saltado"/>
        <header>
          <h1>Lomo Saltado</h1>
          <p>Riqu&iacute;simo plato peruano como para chuparse los dedos.</p>
        </header>
        <section>
          <h2>Ingredientes principales</h2>
          <p>Papa, carne de vaca, cebolla, aj&iacute; amarillo</p>
        </section>
      </article>
      <article>
        <Image src={arrozConPolloImage} alt="Arroz con Pollo"/>
        <header>
          <h1>Arroz con pollo</h1>
          <p>T&iacute;pico plato peruano que se cocina en cualquier d&iacute;a.</p>
        </header>
        <section>
          <h2>Ingredientes principales</h2>
          <p>Arroz, pollo, culantro, aj&iacute;</p>
        </section>
      </article>
    </section>
    <aside>
      <h3>Inspiraci&oacute;n para el d&iacute;a:</h3>
      <p>Carapulcra</p>
      <Image src={carapulcraImage} alt="Carapulcra"/>
    </aside>
    <footer>
      <h3>RZ&reg; 2025</h3>
      <p>Lima - Peru. Derechos de reserva en gesti&oacute;n.</p>
    </footer>
  </div>
);

export default Page;
