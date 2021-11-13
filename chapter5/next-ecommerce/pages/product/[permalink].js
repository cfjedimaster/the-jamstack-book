import { useState } from "react";
import Nav from "../../components/nav";
import commerce from "../../lib/commerce";

export default function ProductDetail({ product }) {
  const [cartText, setCartText] = useState("Add to Cart");

  const fullImage = product.assets.filter((item, index) => {
    return item.image_dimensions.width === 400;
  })[0];

  const handleAddToCart = async (e) => {
    let cart = await commerce.cart.add(product.id, 1);

    let cartText = "Added! (" + cart.quantity + ")";
    setCartText(cartText);
  };

  return (
    <div>
      <Nav />

      <section className="text-gray-700 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={fullImage.url}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {product.categories[0].name}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {product.name}
              </h1>
              <div
                className="leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: product.description,
                }}
              ></div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  {product.price.formatted_with_symbol}
                </span>
                <button
                  onClick={handleAddToCart}
                  className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                >
                  {cartText}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticPaths() {
  const products = await commerce.products.list();

  // create paths with `permalink` param
  const paths = products.data.map((product) => `/product/${product.permalink}`);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { permalink } = ctx.params;
  const product = await commerce.products.retrieve(permalink, {
    type: "permalink ",
  });

  return {
    props: {
      product: product,
    },
  };
}
