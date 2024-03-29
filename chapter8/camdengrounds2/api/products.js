let products = [
    {
        "name" : "Coffee",
        "price" : 2.99, 
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "thumbnail" : "http://placehold.it/700x400", 
        "image" : "http://placehold.it/900x350"
    },
    {
        "name" : "Espresso",
        "price" : 3.99, 
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "thumbnail" : "http://placehold.it/700x400", 
        "image" : "http://placehold.it/900x350"
    },
    {
        "name" : "Americano",
        "price" : 5.99, 
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "thumbnail" : "http://placehold.it/700x400", 
        "image" : "http://placehold.it/900x350"
    },
    {
        "name" : "Double Espresso",
        "price" : 8.99, 
        "description" : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!",
        "thumbnail" : "http://placehold.it/700x400", 
        "image" : "http://placehold.it/900x350"
    },
    {
        "name" : "Tea",
        "price" : 1.99, 
        "description" : "For those who prefer tea.",
        "thumbnail" : "http://placehold.it/700x400", 
        "image" : "http://placehold.it/900x350"
    }
]

module.exports = (req, res) => {
    let filter = req.query.filter;
    if(filter) {
        products = products.filter(
            p => p.name.toLowerCase().indexOf(filter.toLowerCase()) >= 0
        );
    }

    res.json({
        products
    })
}