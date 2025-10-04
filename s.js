// // **Product Data (This would be fetched from your e-commerce platform)**
// const productDetails = {
//     // Single Product Example
//     item: "Luxury Watch - Model X",
//     catalog_id: "CAT-9876", // Optional, but useful for tracking
//     price: 35000, // PKR
//     quantity: 1
// };

// // **Function to Generate the WhatsApp URL**
// function generateWhatsAppUrl(details) {
//     // 1. WhatsApp Number (Your Business API Number)
//     const phoneNumber = "+923308136380"; // Replace with your registered WhatsApp Business number

//     // 2. The Text Message (Pre-filled message with product details)
//     let prefilledText = `I want to buy the following product from your catalog:

// - Product: ${details.item}
// - Price: PKR ${details.price.toLocaleString()}
// - Quantity: ${details.quantity}
// - Catalog ID: ${details.catalog_id}

// Please confirm the total amount and delivery.`;

//     // 3. URL Encoding
//     // encodeURIComponent is essential to convert spaces, newlines, and special characters
//     // into a format (like %20, %0A) that the URL can safely carry.
//     const encodedText = encodeURIComponent(prefilledText);

//     // 4. Construct the Final URL
//     return `https://wa.me/${phoneNumber}?text=${encodedText}`;
// }

// // **Execution**
// const whatsappLink = generateWhatsAppUrl(productDetails);
// console.log(whatsappLink);

// // Example of setting the button link on your webpage:
// // document.getElementById('buyButton').href = whatsappLink;

// **Data for Multiple Products**
const cartItems = [
    { item: "Silk Scarf", price: 2500, quantity: 2 },
    { item: "Leather Wallet", price: 8000, quantity: 1 }
];

function generateMultiProductUrl(items) {
    const phoneNumber = "923308136380";
    let prefilledText = "I would like to order the following items (My Virtual Cart):\n\n";
    let totalPrice = 0;

    // Build the itemized list
    items.forEach((item, index) => {
        const lineTotal = item.price * item.quantity;
        prefilledText += `${index + 1}. ${item.item} (${item.quantity} x PKR ${item.price.toLocaleString()}) = PKR ${lineTotal.toLocaleString()}\n`;
        totalPrice += lineTotal;
    });

    prefilledText += `\n**Subtotal:** PKR ${totalPrice.toLocaleString()}`;
    prefilledText += `\n\n**Please confirm the order and shipping charges.**`;

    const encodedText = encodeURIComponent(prefilledText);
    return `https://wa.me/${phoneNumber}?text=${encodedText}`;
}

const multiProductLink = generateMultiProductUrl(cartItems);
console.log(multiProductLink);
// The resulting message will be a clean, itemized cart list.