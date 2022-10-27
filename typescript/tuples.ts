const drink = {
  color: "brown",
  carbonated: true,
  sugar: 40,
};

// Tuple -> Specific data type order.
const pepsi: [string, boolean, number] = ["brown", true, 40];

// Type alias
type Drink = [string, boolean, number];
const sprite: Drink = ["clear", true, 20];
