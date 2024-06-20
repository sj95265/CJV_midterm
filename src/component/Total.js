
const Total = (props) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 2
  });

  return (
    <div>
      <h1>Total:</h1>
      <div><h1>{formatter.format(props.money)}</h1></div>

    </div>

  );
}

export default Total;
