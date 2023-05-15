export const range = (start, end, step = 1) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};

export const currencyFormat = new Intl.NumberFormat("uk", {
  style: "currency",
  currency: "UAH",
  currencyDisplay: 'symbol',
  maximumFractionDigits: 0,
}); 