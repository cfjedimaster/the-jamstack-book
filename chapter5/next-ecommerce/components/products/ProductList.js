export default function ProductList({ ...props }) {
  const thumbnail = props.product.assets.filter((item, index) => {
    if (item.image_dimensions.width === 350) return true;
    return false;
  })[0];

  return (
    <div class="lg:w-1/4 md:w-1/2 p-4 w-full">
      <a
        href={'/product/' + props.product.permalink}
        class="block relative h-48 rounded overflow-hidden"
      >
        <img
          alt={props.product.name}
          class="object-cover object-center w-full h-full block"
          src={thumbnail.url}
        />
      </a>
      <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {props.product.categories[0].name}
        </h3>
        <h2 class="text-gray-900 title-font text-lg font-medium">
          {props.product.name}
        </h2>
        <p class="mt-1">{props.product.price.formatted_with_symbol}</p>
      </div>
    </div>
  );
}
