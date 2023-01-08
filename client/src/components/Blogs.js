import React from 'react'
import Blog from './Blog'

function Blogs({ files }) {
    return (
        <div>
            <h1>
                All Blogs
            </h1>
            {files.map((file, index) => {
                return (
                    <h1>{file}</h1>
                )
            })
            }
        </div>
    )
}

export default Blogs