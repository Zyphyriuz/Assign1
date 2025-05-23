// this calls lazada.js to use the functions
const lazada = require('./lazada.js');

// Add a product, will also return name for so we know the change in name later
console.log(lazada.addProduct("202", "Mini Plush", 15, 30));

// Update a product, 
console.log(lazada.updateProduct("202", "Slightly Minier Plush", 13, 27));

// Delete a product using the ID
console.log(lazada.deleteProduct("202"));

// Get a specific product using the ID too
console.log(lazada.getProductID("198"));

// Get a specific product using the name since ID's are hard to remember
console.log(lazada.getProductName("Slightly Minier Plush"));
console.log(lazada.getProductName("Large Nui"));

// List all products 
console.log(lazada.getallProducts());
