const getOrderedSales = (sales) => {
  const salesOrder = sales.map((sale) => ({
    ...sale,
    Total: sale.amount * sale.quantity,
  }));

  return salesOrder.sort((a, b) => b.Total - a.Total);
};

const salesArray = [
  { amount: 10000, quantity: 10 },
  { amount: 9000, quantity: 2 },
  { amount: 2000, quantity: 20 },
  { amount: 7000, quantity: 3 },
];

const res = getOrderedSales(salesArray);
console.log(res);
