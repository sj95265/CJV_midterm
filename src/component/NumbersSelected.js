
const NumbersSelected = (props) => {
  const numsSelected = props.numbers.map((num, index) => <div key={index}><h2>Mark: {num}</h2></div>);

  return (
    <div>
      <div><h2>Numbers Selected:</h2></div>
      {props.numbers.length !== 0 && numsSelected}
    </div>
  );
}

export default NumbersSelected;