import Nav from '../components/nav';
import commerce from '../lib/commerce';
import ProductList from '../components/products/ProductList';

export default function IndexPage({ products }) {
  return (
    <div>
      <Nav />
      <section className="text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            {products.map((product, index) => (
              <ProductList product={product} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export async function getStaticProps() {
  const products = await commerce.products.list({include: 'assets',});

  return {
    props: {
      products: products.data,
    },
  };
}
