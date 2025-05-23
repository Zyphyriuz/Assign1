# Assignment 1

This node module is meant to be for the shopping platform Lazada, an e-commerce platform similar to stores like Amazon, Shopeee, etc. where sellers can have entire shop sites for customers to look through. In this case, the node module focuses on a single seller shop, where the functions include CRUD along with a standard function search for all database objects, basically simulating a seller managing their shop.

# How to use
### Note: You will need Node JS to run this module
### 1. If you do not have Node JS, [install Node JS here](https://nodejs.org/en/)
### 2. app.js is what will be used to call the functions, which is the file under the same name in the repository. Simply download the file, or else copy and paste the text content into your own app.js. app.js should look like this:
```javascript
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
```
### 3. Open the terminal in this directory and run
```
node app.js
```
- It will return values or feedback for each functions. You can tweak the values slightly if you wish, but it may return errors if you search for a specific product ID that does not exist, as an example. This is a simple node module after all.
- Another thing to note is that you would notice the Slightly Minier Plush return a "product not found" when searched. This is intended since at that point in the code, that item has already been deleted. I did include the Large Nui to simulate it actually returning the result. As mentioned, feel free to mess around with some of the values.

# References
- Link for the targetted deletion in array for this module: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array-in-javascript
- Lazada website that this module is based on: https://www.lazada.sg/
