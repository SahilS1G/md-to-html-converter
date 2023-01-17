import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router';

function BlogDetails() {

    const { id } = useParams();

    const [html, setHtml] = useState("");
    useEffect(() => {
        fetch('/getfiles/' + id).then(
            res => res.json()
        ).then(data => {
            setHtml(data.html);
        })
    }, [])

    return (
        <>
            {html}
        </>
    )
}

export default BlogDetails