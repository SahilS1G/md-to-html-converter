import React from 'react'
import Blog from './Blog'

function Blogs({ files }) {
    return (
        <div>
            <h1>
                All Blogs
            </h1>
            <div className='px-4'>
                {files.map((file, index) => {
                    return (
                        <Blog title={file} key={index} />
                    )
                })
                }
            </div>
        </div>
    )
}

export default Blogs