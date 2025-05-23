// This module is used to simulate product management for a single store (single seller)
// The functions include CRUD operations along with a function to list all products as the 5th function.


// Database for Product Store
const product = [
    {
        product_id: "197",
        title: "Fuwapuchi",
        cost: 25,
        weight: 45,
    },
    {
        product_id: "198",
        title: "Large Fuwapuchi",
        cost: 50,
        weight: 125,
    },
    {
        product_id: "199",
        title: "Small plushie",
        cost: 20,
        weight: 65,
    },
    {
        product_id: "200",
        title: "Medium Nui",
        cost: 35,
        weight: 85,
    },
    {
        product_id: "201",
        title: "Large Nui",
        cost: 60,
        weight: 115,
    },
];

// functions placed here


// Adding Product
function addProduct(product_id, title, cost, weight) {
    const newProduct = {
        product_id: product_id,
        title: title,
        cost: cost,
        weight: weight
    };
    product.push(newProduct);
    return "Product added, product ID is: " + product_id + ", the name is: " + title + "."; // states the id so you know what is made
}

// Updating existing Product
function updateProduct(product_id, title, cost, weight) {
    const index = product.findIndex(p => p.product_id === product_id);
    if (index !== -1) {
        product[index].title = title;
        product[index].cost = cost;
        product[index].weight = weight;
        return "Product updated, the name is now " + title + "."; // uses title so that users know which product exactly was updated
    }
    else {
        return "Double check the ID if it's correct"; // error message
    }
}

// Delete Existing Product
function deleteProduct(product_id) {
    const index = product.findIndex(p => p.product_id === product_id);
    if (index !== -1) {
        product.splice(index, 1); // basically js's way of deleting array elements
        return "ID number: " + product_id + " has been deleted"; // simple success message
    }

    else {
        return "Double check the ID if it's correct"; //returns error if id does not exist
    }
}


// Get a specific product by using product_id
function getProductID(product_id) {
    const p = product.find(p => p.product_id == product_id);
    if (p) {
        return `ID: ${p.product_id}, Title: ${p.title}, Cost: ${p.cost}, Weight: ${p.weight}`;
    } else {
        return "Product not found."; // simple error if it returns nothing
    }
}

// Get a specific product by using product title
function getProductName(title) {
    const p = product.find(p => p.title.toLowerCase() === title.toLowerCase());
    if (p) {
        return `ID: ${p.product_id}, Title: ${p.title}, Cost: ${p.cost}, Weight: ${p.weight}`;
    } else {
        return "Product not found.";
    }
}

// List all product function
function getallProducts() {
    return product.map(p =>
        `ID: ${p.product_id}, Title: ${p.title}, Cost: ${p.cost}, Weight: ${p.weight}` // format to return the results as text, similar as the search feature above
    ).join('\n');
}

// Export all functions at the bottom at once
module.exports = {
    addProduct,
    updateProduct,
    deleteProduct,
    getProductID,
    getallProducts,
    getProductName
};
