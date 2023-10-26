const CurrencyFormatter = (data:any, decimals=0) => {

  if(data === '') return "$ -";
  const d = {amount:data,currency:"USD"};

  const formattedAmount = new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency:d.currency,
    maximumFractionDigits:0
  }).format(d.amount);

  const formatted = formattedAmount.split("US$")[0].trim().replaceAll(".","");
  const value: number = (decimals == 0) ? (+formatted) : ((+formatted) / Math.pow(10,decimals));

  return "$"+value.toLocaleString("de-DE");
};

export default CurrencyFormatter;
