"use client"
import { useRouter } from "next/navigation"
import { Suspense } from "react";

function Orders() {
    let router = useRouter();
    return (
        <Suspense fallback={<p>Lioading</p>}>
            <div>My orders</div>
            <button className="text-white-600/[.06]" onClick={() => router.push('/orders/payments')}>Payments Here</button>
        </Suspense>
    )
}

export default Orders