import Link from "next/link";
function Sidebar() {
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
            <Link href="community">Community</Link>
        </>
    )
}

export default Sidebar