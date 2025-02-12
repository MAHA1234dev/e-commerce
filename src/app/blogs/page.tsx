import Link from "next/link"
import React from "react"
function Blogs() {
    return (
        <div>
            <Link href="/blogs/post-1">Post-1</Link>
            <Link href="/blogs/post-2">Post -2 </Link>
        </div>
    )
}

export default Blogs