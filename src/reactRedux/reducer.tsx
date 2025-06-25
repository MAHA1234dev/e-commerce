interface State {
    sum?: { a: number; b: number };
    // Add other state properties as needed
}
const initialState: State = {};

const Reducer = (state: State = initialState, action: any) => {
    if (action.type === "sum") {
        console.log(action);
        return {
            ...state,
            sum: action.payload
        }
    } else {
        return state
    }
}

export default Reducer