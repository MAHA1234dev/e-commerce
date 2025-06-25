const addNum = (WrappedComponent) => {
    return (props) => {
        let sum = props.num1 + props.num2;
        return <WrappedComponent sum={sum} {...props}></WrappedComponent>
    }
}

const MyComponent = (props) => {
    return <div>{props.sum}</div>;
};

const SumTwonumbers = addNum(MyComponent);

function AddingTwonumbers() {
    return (
        <SumTwonumbers num1={1} num2={3}></SumTwonumbers>
    )
}

export default AddingTwonumbers