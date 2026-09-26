const products = {

    cat: {
        name: "Cat Charm",
        price: "₹150",
        image: "🐱",
        description: "A cute little cat charm for your bag, keys or pencil case!"
    },

    bunny: {
        name: "Bunny Charm",
        price: "₹180",
        image: "🐰",
        description: "A sweet bunny charm to add some cuteness to your everyday things!"
    },

    flower: {
        name: "Flower Charm",
        price: "₹120",
        image: "🌸",
        description: "A pretty little flower charm with a soft and cute look!"
    },

    strawberry: {
        name: "Strawberry Charm",
        price: "₹160",
        image: "🍓",
        description: "A tiny strawberry charm that's perfect for your bag or keys!"
    },

    teddy: {
        name: "Teddy Charm",
        price: "₹200",
        image: "🧸",
        description: "A tiny teddy charm for anyone who loves cute things!"
    },

    bear: {
        name: "Bear Charm",
        price: "₹170",
        image: "🐻",
        description: "A cute bear charm to make your accessories extra adorable!"
    },

    mushroom: {
        name: "Mushroom Charm",
        price: "₹140",
        image: "🍄",
        description: "A cute little mushroom charm with a magical vibe!"
    },

    butterfly: {
        name: "Butterfly Charm",
        price: "₹190",
        image: "🦋",
        description: "A beautiful butterfly charm for your favourite accessory!"
    },

    moon: {
        name: "Moon Charm",
        price: "₹130",
        image: "🌙",
        description: "A dreamy little moon charm for your bag or keys!"
    },

    star: {
        name: "Star Charm",
        price: "₹110",
        image: "⭐",
        description: "A tiny star charm to add a little sparkle!"
    }

};


/* Get the product name from the URL */

const url = new URLSearchParams(window.location.search);

const item = url.get("item");


/* Find that product */

const product = products[item];


/* Display the product */

if (product) {

    document.getElementById("product-image").textContent = product.image;

    document.getElementById("product-name").textContent = product.name;

    document.getElementById("product-price").textContent = product.price;

    document.getElementById("product-description").textContent =
        product.description;

}