import Nav from '../components/nav';
import agility from '@agility/content-fetch';
import ProductList from '../components/products/ProductList';

const api = agility.getApi({
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_FETCH_KEY,
});

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
  const contentList = await api.getContentList({
    referenceName: 'Products',
    languageCode: 'en-us',
  });

  return {
    props: {
      products: contentList.items,
    },
  };
}
