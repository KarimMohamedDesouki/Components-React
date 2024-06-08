import { IProduct, IformInput } from "../interface";

export const productList: IProduct[] = [
  {
    id: "1",
    title: "2024 Red Sports Car",
    description:
      "A high-performance sports car with a sleek red finish and powerful engine.",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/62/51/76/360_F_562517637_cRcbpMBacqnl89fjdvlGgc77PixfpfOF.jpg",
    price: "75000",
    colors: ["#FF3333", "#3357FF", "#FF5733"],
    category: {
      name: "Sports Car",
      imageURL:
        "https://t3.ftcdn.net/jpg/05/62/51/76/360_F_562517637_cRcbpMBacqnl89fjdvlGgc77PixfpfOF.jpg",
    },
  },
  {
    id: "2",
    title: "2024 Electric Sedan",
    description:
      "A modern electric sedan with advanced technology and a luxurious interior.",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
    price: "65000",
    colors: ["#33FFF6", "#FF5733", "#3357FF"],
    category: {
      name: "Electric Car",
      imageURL:
        "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325726_GtgjRiyc37BLPn9OmisBVVZec9frLaL0.jpg",
    },
  },
  {
    id: "3",
    title: "2024 Family SUV",
    description:
      "A spacious and comfortable SUV perfect for family trips and off-road adventures.",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325759_ZOVFqu94cA76Fb6xRXXTa4pVqnX6g5Ey.jpg",
    price: "55000",
    colors: ["#3357FF", "#8F33FF", "#FF3333"],
    category: {
      name: "SUV",
      imageURL:
        "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325759_ZOVFqu94cA76Fb6xRXXTa4pVqnX6g5Ey.jpg",
    },
  },
  {
    id: "4",
    title: "2024 Convertible Coupe",
    description:
      "A stylish convertible coupe with a retractable roof and exceptional handling.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NJyvrdIQCl8UY8kw-2kG1vCxseMPHKeAlA&s",
    price: "80000",
    colors: ["#FF3333", "#8F33FF", "#3357FF"],
    category: {
      name: "Convertible",
      imageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NJyvrdIQCl8UY8kw-2kG1vCxseMPHKeAlA&s",
    },
  },
  {
    id: "5",
    title: "2024 Hybrid Hatchback",
    description:
      "An eco-friendly hybrid hatchback with great fuel efficiency and a compact design.",
    imageUrl:
      "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325759_ZOVFqu94cA76Fb6xRXXTa4pVqnX6g5Ey.jpg",
    price: "30000",
    colors: ["#FF3333", "#3357FF", "#8F33FF"],
    category: {
      name: "Hybrid Car",
      imageURL:
        "https://t4.ftcdn.net/jpg/05/37/32/57/360_F_537325759_ZOVFqu94cA76Fb6xRXXTa4pVqnX6g5Ey.jpg",
    },
  },
  {
    id: "6",
    title: "2024 Red Sports Car",
    description:
      "A high-performance sports car with a sleek red finish and powerful engine.",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/62/51/76/360_F_562517637_cRcbpMBacqnl89fjdvlGgc77PixfpfOF.jpg",
    price: "75000",
    colors: ["#3357FF", "#FF3333", "#8F33FF"],
    category: {
      name: "Sports Car",
      imageURL:
        "https://t3.ftcdn.net/jpg/05/62/51/76/360_F_562517637_cRcbpMBacqnl89fjdvlGgc77PixfpfOF.jpg",
    },
  },
];

export const formInputList: IformInput[] = [
  {
    id: "title",
    name: "title",
    label: "Product Title",
    type: "text",
  },
  {
    id: "description",
    name: "description",
    label: "Product Description",
    type: "text",
  },
  {
    id: "imageUrl",
    name: "imageUrl",
    label: "Product Image URL",
    type: "text",
  },
  {
    id: "price",
    name: "price",
    label: "Product Price",
    type: "text",
  },
];

export const colors = [
  "#FF5733",
  "#33FF57",
  "#3357FF",
  "#FF33A1",
  "#FF8F33",
  "#8F33FF",
  "#33FFF6",
  "#F633FF",
  "#33FF8F",
  "#FF3333",
];

