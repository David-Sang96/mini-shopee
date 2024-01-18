import Card from "../components/Card";

const fruits = [
  {
    id: 1,
    price: 10,
    name: "Banana",
    description: "Fresh Fruit for your health",
  },
  {
    id: 2,
    price: 15.5,
    name: "Apple",
    description: "Fresh Fruit for your health",
  },
  {
    id: 3,
    price: 17.59,
    name: "Grape",
    description: "Fresh Fruit for your health",
  },
  {
    id: 4,
    price: 5.89,
    name: "Mango",
    description: "Fresh Fruit for your health",
  },
  {
    id: 5,
    price: 10.59,
    name: "Lychee",
    description: "Fresh Fruit for your health",
  },
  {
    id: 6,
    price: 20.49,
    name: "Lime",
    description: "Fresh Fruit for your health",
  },
  {
    id: 7,
    price: 10.49,
    name: "Papaya",
    description: "Fresh Fruit for your health",
  },
  {
    id: 8,
    price: 13.49,
    name: "Strawberry",
    description: "Fresh Fruit for your health",
  },
];

const Body = () => {
  return (
    <section className="space-y-6 mx-auto p-2 py-10 lg:space-y-0  lg:grid lg:grid-cols-2 lg:gap-6  ">
      {fruits.map((item) => (
        <Card key={item.id} fruit={item} />
      ))}
    </section>
  );
};

export default Body;
