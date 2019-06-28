export const intialState = {
  tableDef: {
    columns: [
      { label: "Nombre", property: "name" },
      { label: "Edad", property: "age" }
    ]
  },
  pagination: {
    total: 5,
    page: 1,
    pageSize: 10,
    items: [
      { name: "Juan", age: 23 },
      { name: "Mateo", age: 32 },
      { name: "Lucas", age: 25 }
    ]
  }
};
