
const CashClearRandom = (props) => {

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 2
    });

    const clickCash = () => {
        if (props.numbers.length !== 5) {
            props.setMessage("Must Select 5 Numbers!!!!!!");
        } else if (props.money <= 0) {
            props.setMessage("Add Money!!!!!!");
        } else {
            props.setMessage("Numbers Selected: " + props.numbers + "\n\nTotal: " + formatter.format(props.money));
        }
    }
    

    const clickClear = () => {
        props.setNumbers([]);
        props.setMoney(0);
        props.setMessage("Juyn-Wei Lo");
    }

    const clickRandom = () => {
        let randomTemp = [];
        while (randomTemp.length < 5) {
            let num = Math.floor(Math.random() * 20 + 1);
            if (!randomTemp.includes(num)) {
                randomTemp.push(num);
            }
        }
        props.setNumbers(randomTemp);
        props.setMessage("Juyn-Wei Lo");
    }

    const buttonStyle = {
        height: '70px',
        width: '150px',
        cursor: 'pointer',
        margin: '3px',
        fontSize: '24px',
        fontWeight: '900',
    };

    return (
        <div>
            <button onClick={clickCash} style={buttonStyle}>CASH</button>
            <button onClick={clickClear} style={buttonStyle}>CLEAR</button>
            <button onClick={clickRandom} style={buttonStyle}>RANDOM</button>
        </div>
    );
}

export default CashClearRandom;
