import Nav from '../components/nav';
import commerce from '../lib/commerce';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cartID: '',
      items: [],
      subtotal: {},
      total: {},
      checkoutToken: '',
      checkoutURL: '',
      discountCode: '',
      discountMessage: '',
    };
  }
  loadCart = async () => {
    let cart = await commerce.cart.retrieve();
    return cart;
  };
  generateToken = async (id) => {
    let token = await commerce.checkout.generateToken(id, { type: 'cart' });
    console.log(token);
    return token;
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value.trim() });
  };
  handleUpdateQuantity = async (id, quantity) => {
    let res = await commerce.cart.update(id, { quantity: quantity });
    let items = res.cart.line_items;
    this.setState({ items: items, subtotal: res.cart.subtotal });
  };
  handleDiscountCode = async () => {
    if (this.state.discountCode !== '') {
      // generate a token so that we can validate the discount code
      let token = await this.generateToken(this.state.cartID);
      this.setState({ checkoutToken: token.id });
      let res = await commerce.checkout.checkDiscount(
        this.state.checkoutToken,
        {
          code: this.state.discountCode,
        }
      );
      if (!res.valid) {
        this.setState({ discountMessage: 'The code is not valid.' });
      } else {
        let foo = await commerce.cart.update(this.state.items[0].id, {
          discount_code: this.state.discountCode,
        });
        console.log(foo);
        this.setState({ total: res.live.total_due, discountMessage: '' });
      }
    }
  };
  handleCheckout = () => {
    // for now we're just opening a new window to the hosted checkout
    window.open(this.state.checkoutURL);
  };
  async componentDidMount() {
    let cart = await this.loadCart();
    this.setState({
      cartID: cart.id,
      items: cart.line_items,
      subtotal: cart.subtotal,
      total: cart.subtotal,
      checkoutURL: cart.hosted_checkout_url,
    });
    console.log(cart);
  }
  render() {
    return (
      <div>
        <Nav />
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="w-3/4 bg-white px-10 py-10">
              <div className="flex justify-between border-b pb-8">
                <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                <h2 className="font-semibold text-2xl">
                  {this.state.items.length} Item(s)
                </h2>
              </div>
              <div className="flex mt-10 mb-5">
                <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5">
                  Product Details
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Quantity
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Price
                </h3>
                <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center">
                  Total
                </h3>
              </div>

              {this.state.items.map((item, index) => (
                <div
                  className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5"
                  key={index}
                >
                  <div className="flex w-2/5">
                    <div className="w-20">
                      <img className="h-24" src={item.media.source} alt="" />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow">
                      <span className="font-bold text-sm">
                        {item.product_name}
                      </span>
                      <a
                        href="#"
                        onClick={() => this.handleUpdateQuantity(item.id, 0)}
                        className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      >
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5">
                    <button
                      onClick={() =>
                        this.handleUpdateQuantity(item.id, item.quantity - 1)
                      }
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                    <input
                      className="mx-2 border text-center w-8"
                      type="text"
                      defaultValue={item.quantity}
                    />
                    <button
                      onClick={() =>
                        this.handleUpdateQuantity(item.id, item.quantity + 1)
                      }
                    >
                      <svg
                        className="fill-current text-gray-600 w-3"
                        viewBox="0 0 448 512"
                      >
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.price.formatted_with_symbol}
                  </span>
                  <span className="text-center w-1/5 font-semibold text-sm">
                    {item.line_total.formatted_with_symbol}
                  </span>
                </div>
              ))}

              <a
                href="/"
                className="flex font-semibold text-indigo-600 text-sm mt-10"
              >
                <svg
                  className="fill-current mr-2 text-indigo-600 w-4"
                  viewBox="0 0 448 512"
                >
                  <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
                </svg>
                Continue Shopping
              </a>
            </div>

            <div id="summary" className="w-1/4 px-8 py-10">
              <h1 className="font-semibold text-2xl border-b pb-8">
                Order Summary
              </h1>
              <div className="flex justify-between mt-10 mb-5">
                <span className="font-semibold text-sm uppercase">
                  {this.state.items.length} items
                </span>
                <span className="font-semibold text-sm">
                  {this.state.subtotal.formatted_with_symbol &&
                    this.state.subtotal.formatted_with_symbol}
                </span>
              </div>
              <div>
                <label className="font-medium inline-block mb-3 text-sm uppercase">
                  Shipping
                </label>
                <select className="block p-2 text-gray-600 w-full text-sm">
                  <option>Standard shipping - $10.00</option>
                </select>
              </div>
              <div className="py-10">
                <label
                  htmlFor="promo"
                  className="font-semibold inline-block mb-3 text-sm uppercase"
                >
                  Promo Code
                </label>
                <input
                  name="discountCode"
                  type="text"
                  id="promo"
                  placeholder="Enter your code"
                  className="p-2 text-sm w-full"
                  value={this.state.discountCode}
                  onChange={this.handleChange}
                />
                <p className="text-xs text-red-800 m-0.5">
                  {this.state.discountMessage}
                </p>
              </div>
              <button
                onClick={this.handleDiscountCode}
                className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase"
              >
                Apply
              </button>
              <div className="border-t mt-8">
                <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                  <span>Total cost</span>
                  <span>
                    {this.state.total.formatted_with_symbol &&
                      this.state.total.formatted_with_symbol}
                  </span>
                </div>
                <button
                  onClick={this.handleCheckout}
                  className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full"
                >
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ShoppingCart;
