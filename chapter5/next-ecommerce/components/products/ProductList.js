import Link from 'next/link';

export default function ProductList({ ...props }) {
  const thumbnail = props.product.assets.filter((item, index) => {
    return (item.image_dimensions.width === 350);
  })[0];

  return (
    <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
      <Link href={'/product/' + props.product.permalink}>
        <a className="block relative h-48 rounded overflow-hidden">
          <img
            alt={props.product.name}
            className="object-cover object-center w-full h-full block"
            src={thumbnail.url}
          />
        </a>
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {props.product.categories[0].name}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {props.product.name}
        </h2>
        <p className="mt-1">{props.product.price.formatted_with_symbol}</p>
      </div>
    </div>
  );
}
