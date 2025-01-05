import type {Metadata} from "next";
import "./globals.css";

// https://nextjs.org/docs/app/building-your-application/optimizing/metadata#default-fields
// Charset and viewport meta tags are added by default.
export const metadata: Metadata = {
  title: "¡RZ listo para lo bueno!",
  description: "Sitio de recetas de comida peruana",
  keywords: ["recetas", "comida", "peruana"],
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
    <body className="antialiased">
    <div className="header-container">
      <header className="wrapper clearfix">
        <h1 className="title">RZs de comida peruana</h1>
        <nav>
          <ul>
            <li><a href="#">Noticias</a></li>
            <li><a href="#">Tus platos</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </nav>
      </header>
    </div>
    <div className="main-container">
      {children}
    </div>
    </body>
    </html>
);
}
