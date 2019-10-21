import React from 'react';

const Post = (props) => {
    return(
        <div className="blog-card">
            <div className="meta">
                <div className="photo" style={{backgroundImage: "url('http://placeimg.com/200/100/tech')"}}></div>
            </div>
            <div className="description">
                <h1 onClick={() => props.goDetail(props.data.id)}>{props.data.title}</h1>
                <p>{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    );
};

export default Post;