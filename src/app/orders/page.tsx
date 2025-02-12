"use client"
import { useRouter } from "next/navigation"

function Orders() {
    let router = useRouter();
    return (
        <>
            <div>My orders</div>
            <button className="text-white-600/[.06]" onClick={() => router.push('/orders/payments')}>Payments Here</button>
        </>
    )
}

export default Orders