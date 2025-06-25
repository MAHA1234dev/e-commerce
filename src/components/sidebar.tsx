import Link from "next/link";
import { useContext } from "react";
// import { useGlobalState } from "./globalStateProvider";
import { useDispatch, useSelector } from "react-redux";

interface State {
    sum?: { a: number; b: number };
    // Add other state properties as needed
}

function Sidebar() {

    // const user = useGlobalState();

    const dispatch = useDispatch();
    const sum = useSelector((state: State) => state.sum)

    console.log(sum);

    const handleClick = () => {
        dispatch({
            type: "sum",
            payload: {
                a: 10,
                b: 20
            }
        });
    }

    return (
        <>
            <Link href="/">Dashboard</Link>
            <Link href="/orders" >Orders</Link>
            <Link href="/products">Products</Link>
            <Link href="/customers">Customers</Link>
            <Link href="/analytics">Analytics</Link>
            <Link href="/awesome">Awesome</Link>
            <Link href="/blogs"> BLogs</Link>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
            <div onClick={handleClick}>{"user"}</div>
        </>
    )
}

export default Sidebar