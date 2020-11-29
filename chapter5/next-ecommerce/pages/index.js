import Nav from '../components/nav';
import commerce from '../lib/commerce';
import ProductList from '../components/products/ProductList';

export default function IndexPage({ products }) {
  return (
    <div>
      <Nav />
      <section class="text-gray-700 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <ProductList product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const products = await commerce.products.list();

  return {
    props: {
      products: products.data,
    },
  };
}
