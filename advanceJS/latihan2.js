const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Gaming Laptop", price: 1800, category: "laptops", stock: 7 },
  { id: 5, title: "MacBook Pro", price: 2200, category: "laptops", stock: 4 },
  { id: 6, title: "Tablet", price: 500, category: "tablets", stock: 10 },
  { id: 7, title: "iPhone 15", price: 999, category: "phones", stock: 12 },
  { id: 8, title: "Samsung Galaxy S24", price: 899, category: "phones", stock: 8 },
  { id: 9, title: "Wireless Earbuds", price: 75, category: "audio", stock: 20 },
  { id: 10, title: "Bluetooth Speaker", price: 120, category: "audio", stock: 6 },
  { id: 11, title: "Gaming Mouse", price: 60, category: "accessories", stock: 25 },
  { id: 12, title: "Mechanical Keyboard", price: 110, category: "accessories", stock: 14 },
  { id: 13, title: "USB-C Hub", price: 45, category: "accessories", stock: 30 },
  { id: 14, title: "Webcam", price: 80, category: "accessories", stock: 9 },
  { id: 15, title: "Monitor 24 Inch", price: 180, category: "monitors", stock: 11 },
  { id: 16, title: "Monitor 27 Inch", price: 300, category: "monitors", stock: 6 },
  { id: 17, title: "4K Monitor", price: 450, category: "monitors", stock: 5 },
  { id: 18, title: "iPad Air", price: 699, category: "tablets", stock: 13 },
  { id: 19, title: "Android Tablet", price: 350, category: "tablets", stock: 9 },
  { id: 20, title: "Smartwatch", price: 250, category: "wearables", stock: 16 },
  { id: 21, title: "Fitness Tracker", price: 90, category: "wearables", stock: 18 },
  { id: 22, title: "Power Bank", price: 50, category: "accessories", stock: 35 },
  { id: 23, title: "Wireless Charger", price: 40, category: "accessories", stock: 22 },
  { id: 24, title: "External SSD 1TB", price: 130, category: "storage", stock: 10 },
  { id: 25, title: "External HDD 2TB", price: 90, category: "storage", stock: 12 },
  { id: 26, title: "USB Flash Drive 128GB", price: 25, category: "storage", stock: 40 },
  { id: 27, title: "Printer", price: 200, category: "printers", stock: 7 },
  { id: 28, title: "Laser Printer", price: 350, category: "printers", stock: 5 },
  { id: 29, title: "Gaming Controller", price: 70, category: "gaming", stock: 15 },
  { id: 30, title: "Gaming Headset", price: 150, category: "gaming", stock: 8 }
];

 function findProductById(products, id){
  return products.find(product => product.id === id);1
 }
 
 function findProductBystock(products, stock){
  return products.filter(product => product.stock < 10);
}
function updateStock(products, id, newStock) {
 return products.map(p => p.id === id ? { ...p, stock: newStock } : p
 );
}

 console.log(findProductById(products, 25 ));
 console.log(findProductBystock(products ));

const updatedProducts = updateStock(products, 25, 20);
