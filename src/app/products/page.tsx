import Link from "next/link"

function Products () {
    return (
        <div className="m-4">
            <h1>Products List</h1>
           <Link href="products/1">Product 1</Link>
            <span>product 2</span>
            <span>Product 3</span>
        </div>
    )
}

export default Products