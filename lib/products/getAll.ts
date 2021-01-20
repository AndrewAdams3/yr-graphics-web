import { IProduct } from "types";

const getAllProducts = async () => {
  const products: IProduct[] = [{
    product_id: "asdlf",
    images: ["", "/images/blank-shirt.png"],
    name: "product 1"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 2"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 3"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 4"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 5"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 6"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 7"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 8"
  }, {
    product_id: "afsdfasdf",
    images: [],
    name: "product 9"
  }]

  return products;
}

export { getAllProducts }