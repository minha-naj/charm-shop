const products = {
    cat: {
        name: "Cat Charm",
        price: "₹150",
        image: "🐱",
        description: "A tiny cat charm made to add a little personality to your favourite bag or keys."
    },
    bunny: {
        name: "Bunny Charm",
        price: "₹180",
        image: "🐰",
        description: "A sweet bunny charm for anyone who loves cute little accessories."
    },
    flower: {
        name: "Flower Charm",
        price: "₹120",
        image: "🌸",
        description: "A pretty flower charm with a soft, cheerful look."
    },
    strawberry: {
        name: "Strawberry Charm",
        price: "₹160",
        image: "🍓",
        description: "A tiny strawberry charm that adds a fun pop of colour."
    },
    teddy: {
        name: "Teddy Charm",
        price: "₹200",
        image: "🧸",
        description: "A tiny teddy charm that makes any bag a little cuter."
    },
    bear: {
        name: "Bear Charm",
        price: "₹170",
        image: "🐻",
        description: "A cute bear charm for your everyday accessories."
    },
    mushroom: {
        name: "Mushroom Charm",
        price: "₹140",
        image: "🍄",
        description: "A little mushroom charm with a playful, magical feel."
    },
    butterfly: {
        name: "Butterfly Charm",
        price: "₹190",
        image: "🦋",
        description: "A delicate butterfly charm for bags, keys and more."
    },
    moon: {
        name: "Moon Charm",
        price: "₹130",
        image: "🌙",
        description: "A dreamy moon charm for a subtle celestial touch."
    },
    star: {
        name: "Star Charm",
        price: "₹110",
        image: "⭐",
        description: "A tiny star charm to add a little sparkle to your things."
    }
};

const params = new URLSearchParams(window.location.search);
const item = params.get("item");
const product = products[item] || products.cat;

document.title = product.name + " | Cutie Charms";

document.getElementById("product-name").textContent = product.name;
document.getElementById("product-price").textContent = product.price;
document.getElementById("product-description").textContent = product.description;

function putProductImage(id) {
    const box = document.getElementById(id);

    /*
       For now this uses the product emoji so you can see the layout.
       When you have a real product photo, replace the emoji with:
       <img src="images/cat.jpg">
    */
    const visual = document.createElement("div");
    visual.className = "product-emoji";
    visual.textContent = product.image;

    box.appendChild(visual);
}

putProductImage("photo-one");
putProductImage("photo-two");

document.getElementById("buy-button").addEventListener("click", function () {
    alert("You selected " + product.name + "!");
});
