"use client"
import { useRouter } from "next/navigation";
function Payments () {
    
    const route = useRouter();

    return (
        <>
        <div>Please select your payment method</div>
        <button onClick={() => route.push("/orders/placeOrder")}>Place Order </button>
        </>
    )
}

export default Payments;