// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
const handler = async (event) => {
  try {
    const product = event.queryStringParameters.product;
    let available = true;
    if(product.toLowerCase() == 'tea') available = false;

    return {
      statusCode: 200,
      body: JSON.stringify({ available }),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
