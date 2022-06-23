import fs from "fs/promises";
import path from "path";

import Link from "next/link";

function HomePage(props) {
  const { products } = props;

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps(context) {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");

  console.log("jsonData");
  console.log(jsonData);

  const data = JSON.parse(jsonData);
  //return { props: { products: [{ id: "p1", title: "Produc t 1" }] } };
  return {
    props: {
      products: data.products,
    },
    revalidate: 10,
    //notFound: true, // sayfayı 404 döndürür
    //redirect: { destination: "/page..." },
  };
}

export default HomePage;
