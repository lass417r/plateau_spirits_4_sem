export const products = Array.from({ length: 10 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  imageUrl: `Product ${i + 1}`,
  price: (i + 1) * 10,
  quantity: 1,
}));

// const products = [
//   {
//     id: 1,
//     name: "Product 1",
//     price: 99.99,
//     imageUrl: "/path/to/image1.jpg",
//   },
//   {
//     id: 2,
//     name: "Product 2",
//     price: 89.99,
//     imageUrl: "/path/to/image2.jpg",
//   },
//   // More products...
// ];
