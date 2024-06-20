
const Money = (props) => {

    const addMoney = (value) => {
        let newValue = props.money + value;
        props.setMoney(newValue);
    }

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        maximumFractionDigits: 0
    });

    const buttonStyle = {
        height: '80px',
        width: '90px',
        margin: '3px',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '30px',
        fontWeight: '500',
        backgroundColor: '#FFDC35',
    }

    return (
        <div className="moneyContainer">
            <button style={buttonStyle} onClick={() => addMoney(1)}>{formatter.format(1)}</button>
            <button style={buttonStyle} onClick={() => addMoney(5)}>{formatter.format(5)}</button>
            <br />
            <button style={buttonStyle} onClick={() => addMoney(10)}>{formatter.format(10)}</button>
            <button style={buttonStyle} onClick={() => addMoney(25)}>{formatter.format(25)}</button>
        </div>
    );
}

export default Money;
