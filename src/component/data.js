const data = [
  {
    id: 1,
    name: "Nike Slim T-Shirt-N",
    brand: "NIKE",
    code: 2453,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/61FF%2BzoZgYL._UX466_.jpg",
    price: 200,
    price25: 180,
    price50: 170,
    price75: 165,
    price150: 160,
    rating: 4,
    quantity: 4,
  },
  {
    id: 2,
    name: "Portwest girls 1 Part",
    brand: "PORTWEST",
    code: 8235,
    image:
      "https://i.pinimg.com/originals/7e/c1/91/7ec1917e6dab0189f382b79168e3418c.jpg",
    price: 189,
    price25: 183,
    price50: 178,
    price75: 175,
    price150: 170,
    rating: 5,
    quantity: 2,
  },
  {
    id: 3,
    name: "Thiland Slim Shirt",
    brand: "THILAND",
    code: 6347,
    image: "https://m.media-amazon.com/images/I/51n0mwXuSvS._AC._SR360,460.jpg",
    price: 78,
    price25: 75,
    price50: 72,
    price75: 71,
    price150: 70,
    rating: 3,
    quantity: 0,
  },
  {
    id: 4,
    name: "Bangladeshi Slim Hoody",
    brand: "Bangladesh",
    code: 8453,
    image:
      "https://images-na.ssl-images-amazon.com/images/I/71pxkizPYlL._UY550_.jpg",
    price: 98,
    price25: 96,
    price50: 95,
    price75: 92,
    price150: 90,
    rating: 4,
    quantity: 5,
  },
  {
    id: 5,
    name: "Evana Baby Dress",
    brand: "EVANA",
    code: 5353,
    image:
      "https://images.unsplash.com/photo-1578897366846-358bb1c2412a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmFieSUyMGRyZXNzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: 88,
    price25: 86,
    price50: 85,
    price75: 83,
    price150: 80,
    rating: 4,
    quantity: 1,
  },
  {
    id: 6,
    name: "Zhord Slim T-Shirt",
    brand: "ZHORD",
    code: 2123,
    image:
      "https://images.unsplash.com/photo-1620012150748-c759a494c133?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: 99,
    price25: 98,
    price50: 96,
    price75: 94,
    price150: 91,
    rating: 1,
    quantity: 8,
  },
  {
    id: 7,
    name: "Mongo Girls T-Shirt",
    brand: "MONGO",
    code: 2490,
    image:
      "https://rukminim1.flixcart.com/image/714/857/k6xxua80/t-shirt/g/x/a/m-w-necktop-olive-base-41-original-imafpaewvnugkfuf.jpeg?q=50",
    price: 55,
    price25: 54,
    price50: 53,
    price75: 52,
    price150: 50,
    rating: 3,
    quantity: 6,
  },
  {
    id: 8,
    name: "Plain Color Shirt",
    brand: "PLAIN",
    code: 2751,
    image:
      "https://assets.myntassets.com/dpr_1.5,q_60,w_400,c_limit,fl_progressive/assets/images/7460067/2018/9/21/70680d67-69a3-4b33-b121-168bff8aae331537519529754-NA-4201537519529611-1.jpg",
    price: 78,
    price25: 76,
    price50: 75,
    price75: 72,
    price150: 70,
    rating: 2,
    quantity: 4,
  },
  {
    id: 9,
    name: "Nike Slim Panjabi",
    brand: "NIKE",
    code: 1207,
    image:
      "https://lh3.googleusercontent.com/proxy/G7T5O6WWPMBh9VfIDDobwxbHfcEPuvRnl54vy_WX5h5iPte92bpDQ7GMuGa4WXv_anKNIsVKXf5BhaTTOrquVpLgquPBz7oEqQ3ss2-nLIZMu957Yh4liewV5Pfq75yso70PWAhJJsE",
    price: 110,
    price25: 108,
    price50: 106,
    price75: 103,
    price150: 100,
    rating: 4,
    quantity: 1,
  },
  {
    id: 10,
    name: "Rolux 1 Part",
    brand: "ROLUX",
    code: 7586,
    image:
      "https://i.pinimg.com/originals/e7/d9/83/e7d983cfdafab2b68651f44524e9d430.jpg",
    price: 189,
    price25: 186,
    price50: 185,
    price75: 183,
    price150: 180,
    rating: 3,
    quantity: 0,
  },
  {
    id: 11,
    name: "Tedy Slim Shirt",
    brand: "TEDY",
    code: 7985,
    image:
      "https://images.unsplash.com/photo-1617113930975-f9c7243ae527?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: 78,
    price25: 76,
    price50: 75,
    price75: 72,
    price150: 70,
    rating: 3,
    quantity: 9,
  },
  {
    id: 12,
    name: "Japanese Slim Hoody",
    brand: "JAPAN",
    code: 7751,
    image:
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHN3ZWF0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
    price: 98,
    price25: 96,
    price50: 95,
    price75: 93,
    price150: 90,
    rating: 4,
    quantity: 3,
  },
  {
    id: 13,
    name: "Portugal Dress Eve",
    brand: "PORTUGAL",
    code: 7772,
    image: "https://4.imimg.com/data4/UO/EU/MY-23515953/404d1-500x500.jpg",
    price: 88,
    price25: 86,
    price50: 85,
    price75: 83,
    price150: 80,
    rating: 4,
    quantity: 7,
  },
  {
    id: 14,
    name: "Indian Slim T-Shirt",
    brand: "INDIA",
    code: 1001,
    image:
      "https://static2.wellmadeclothes.com/media/product/31ad3ec8/t-shirt-dress-evergreen-kowtow-tshirtdress-evergreen-c.jpg",
    price: 99,
    price25: 96,
    price50: 95,
    price75: 93,
    price150: 90,
    rating: 3.5,
    quantity: 12,
  },
  {
    id: 15,
    name: "UK Girls Dress",
    brand: "UK",
    code: 3130,
    image:
      "https://5.imimg.com/data5/HC/HN/MY-8330475/pr-fashion-new-designer-indo-western-dress-500x500.jpg",
    price: 55,
    price25: 53,
    price50: 52,
    price75: 51,
    price150: 50,
    rating: 3,
    quantity: 4,
  },
  {
    id: 16,
    name: "Plain Color Suit",
    brand: "PLAIN",
    code: 4444,
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG1lbnMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: 78,
    price25: 76,
    price50: 75,
    price75: 73,
    price150: 70,
    rating: 4,
    quantity: 8,
  },
];

export default data;
