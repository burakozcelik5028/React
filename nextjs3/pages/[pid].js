import { Fragment } from "react";
import fs from "fs/promises";
import path from "path";

function ProductDetailPage(props) {
  const { loadedProduct } = props;

  if (!loadedProduct) {
    //if me make fallback: "blocking" in getStaticPaths, we don't need this control here.
    return (
      <Fragment>
        <h1>Loading...</h1>
      </Fragment>
    );
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;
  const productID = params.pid;

  const data = await getData();
  const product = data.products.find((product) => product.id === productID);

  if (!product) {
    //if the fallback: true in getStaticPaths, it will get error if there is no data. than we should use this control
    return { notFound: true };
  }

  return { props: { loadedProduct: product } };
}

export async function getStaticPaths(pid) {
  const data = await getData();
  const ids = data.products.map((product) => product.id);
  //I am creating all possible ID pages before opening the page. that is why I can set fallback: false
  const pathWithParams = ids.map((id) => ({ params: { pid: id } }));

  return {
    paths: pathWithParams, //indicates that no page needs be created at build time
    fallback: false, //indicates the type of fallback you can put "blocking" as a value than you dont need to check !loadedProduct for Loading
  };
}

export default ProductDetailPage;
