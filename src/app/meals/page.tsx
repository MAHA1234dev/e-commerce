import Link from "next/link";
import React from "react";

function Meal() {
    return (
        <>
            <div>Meals</div>
            <Link href="/meals/categories">Categories</Link>
            <Link  href="/meals/chapati">Go to Meal Details</Link>
        </>
    )
}
export default Meal;