
const NumberBoard = (props) => {

    const selectNumber = (num) => {
        if (props.numbers.length < 5 || props.numbers.includes(num)) {
            let temp = props.numbers.slice();
            if (props.numbers.includes(num)) {
                temp.splice(temp.indexOf(num), 1);
            } else {
                temp.push(num);
            }
            props.setNumbers(temp);
        } else{
            props.setMessage("No more than 5 numbers!!!!!!");
        }
    }
    
    const displayNumBoard = () => {
        let rows = [];
        let count = 1;

        for (let i = 0; i < 4; i++) {
            let row = [];
            for (let j = 0; j < 5; j++) {
                const optionNumber = count;
                const backgroundColor = props.numbers.includes(optionNumber) ? '#00DB00' : '#ACD6FF';

                const buttonStyle = {
                    height: '70px',
                    width: '70px',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    margin: '3px',
                    fontSize: '24px',
                    fontWeight: '900',
                    backgroundColor: backgroundColor,
                };

                row.push(
                    <button
                        onClick={() => selectNumber(optionNumber)}
                        className="selectionButton"
                        style={buttonStyle}
                    >
                        {optionNumber}
                    </button>
                );
                count++;
            }
            rows.push(<div>{row}</div>);
        }

        return rows;
    }

    return (
        <div>{displayNumBoard()}</div>
    );
}

export default NumberBoard;
