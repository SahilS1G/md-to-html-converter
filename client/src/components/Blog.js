import React from 'react'

function Blog({ title }) {
    return (
        <div>
            <p className='h4 mt-4'>            <a href={"/" + title}>{title}</a>
            </p>
        </div>
    )
}

export default Blog