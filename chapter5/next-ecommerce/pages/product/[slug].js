import Nav from '../../components/nav';
import agility from '@agility/content-fetch';

const api = agility.getApi({
  guid: process.env.AGILITY_GUID,
  apiKey: process.env.AGILITY_API_FETCH_KEY,
});

export default function Products({ ...props }) {
  return (
    <div>
      <Nav />

      <section class="text-gray-700 body-font overflow-hidden">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={props.product.fields.image.url}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest uppercase">
                {props.product.fields.category.fields.name}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {props.product.fields.productName}
              </h1>
              <p class="leading-relaxed">{props.product.fields.description}</p>
              <div class="flex">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${props.product.fields.price}
                </span>
                <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add to Cart
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
  const contentList = await api.getContentList({
    referenceName: 'Products',
    languageCode: 'en-us',
  });
  // create paths with `slug` param
  const paths = contentList.items.map(
    (product) => `/product/${product.contentID}`
  );
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ ...ctx }) {
  const { slug } = ctx.params;

  const product = await api.getContentItem({
    contentID: slug,
    languageCode: 'en-us',
  });

  console.log(product);

  return {
    props: {
      product: product,
    },
  };
}
