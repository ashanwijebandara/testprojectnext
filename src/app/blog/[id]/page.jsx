import { notFound } from 'next/navigation'
import React from 'react'

async function getData(id) {
    const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
        cache: "no-store" // This ensures that the data is always fresh and not cached
    })
    if (!res.ok) {
        return notFound()
    }
    return res.json()
}

export async function generateMetadata({ params }) {

    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc,
    };
}

const BlogPost = async ({ params }) => {
    const data = await getData(params.id);
    console.log(data);
    return (
        <div>
            <h1>{data.title}</h1>
            <p>{data.body}</p>
            {/* <p>Author ID: {data.userId}</p> */}
        </div>
    )
}

export default BlogPost