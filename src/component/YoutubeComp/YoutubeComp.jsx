import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = (props) => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://i.ytimg.com/vi/GLRnz-TzjEM/hqdefault.jpg?sqp=-oaymwEYCKgBEF5IVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLD3y7YQAz_fIfuG1cA3or94LYvNEw" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    );
}

YoutubeComp.defaultProps = {
    time: "00:00",
    title: "Untitled",
    desc: "Tiada kata untukmu"
}

export default YoutubeComp;