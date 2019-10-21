import React, {Component} from 'react';
import Axios from "axios";
import './DetailPost.css';

class DetailPost extends Component{
    state = {
        post:{
            title: '',
            body: '',
        }
    };

    componentDidMount() {
        let id = this.props.match.params.postID;
        Axios.get(`http://localhost:3004/posts/${id}`)
            .then((res) => {
                console.log('result: ', res.data);
                this.setState({
                    post: res.data
                });
                document.title = res.data.title
            });
    }

    render() {
        console.log(this.props);
        return (
            <div className="p-detail-post">
                <p className="detail-title">{this.state.post.title}</p>
                <p className="detail-body">{this.state.post.body}</p>
            </div>
        );
    }
}

export default DetailPost;