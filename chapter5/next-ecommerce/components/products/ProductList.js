export default function ProductList({ ...props }) {
  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a
        href={'/product/' + props.product.contentID}
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt={props.product.fields.productName}
          class="object-cover object-center w-full h-full block"
          src={props.product.fields.thumbnail.url}
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {props.product.fields.category.fields.name}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          {props.product.fields.productName}
        </h2>
        <p class="mt-1">${props.product.fields.price}</p>
      </div>
    </div>
  );
}
