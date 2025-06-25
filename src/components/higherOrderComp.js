
const WithupperCase = (WrappedComponent) => {
    return (props) => {
        const uppercaseText = props.text ? props.text.toUpperCase() : '';
        return <WrappedComponent {...props} text={uppercaseText} />;
    }
}

const MyComponent = (props) => {
    return <div>{props.text}</div>;
};


const HigherOrderComp = WithupperCase(MyComponent)

function HigherOrderComponent() {
    return (
        <HigherOrderComp text={"hello"}>

        </HigherOrderComp>
    )
}


export default HigherOrderComponent