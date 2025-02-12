
import React from "react";

interface Params {
    slug: string
}

interface Params2 {
    sklf: string
}

type Ssdasd = Params & Params2

const BlogPostPage: React.FC<Ssdasd> = async (props) => {
    console.log("sdfndm");
    return (
        <div>
            <h2>Posts posts</h2>
            <h1>{props.slug}</h1>
        </div>
    )
}

export default BlogPostPage;