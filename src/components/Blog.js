import React from 'react'

function Blog({ title }) {
    return (
        <div>
            <a href="">
                <h4>{title}</h4>
                <p>Summary of {title}</p>
            </a>
        </div>
    )
}

export default Blog