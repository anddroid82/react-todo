import React from 'react';

function Bloglist({posts}) {
    let i = 1;
    return (
        <div>
            {posts.map( (post) => {
                return <div key={post.id}>
                    <h4>{i++} - {post.title}</h4>
                    <p>{post.body}</p>
                    </div>
            })}
        </div>
    );
}

export default Bloglist;