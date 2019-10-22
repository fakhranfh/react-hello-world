import React, {Component, Fragment} from 'react';
import './BlogPost.css';
import Post from "../../Post/Post";
import axios from "axios";
import API from "../../../services";

class BlogPost extends Component{
    state = {
        post: [],
        formBlogPost: {
            id: 1,
            title: '',
            body: '',
            userId: 1
        },
        isUpdate: false,
        comments: []
    };

    getPostAPI = () => {
        API.getNewsBlog().then(result => {
            this.setState({
                post: result
            });
        });
        API.getComments().then(result => {
            this.setState({
                comments: result
            });
        });
    };

    postDataToAPI = () => {
        API.postNewsBlog(this.state.formBlogPost).then((res) => {
            this.getPostAPI();
            this.setState({
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        });
    };

    putDataToAPI = () => {
        API.updateNewsBlog(this.state.formBlogPost, this.state.formBlogPost.id).then(res => {
            this.getPostAPI();
            this.setState({
                isUpdate: false,
                formBlogPost: {
                    id: 1,
                    title: '',
                    body: '',
                    userId: 1
                }
            });
        });
    };

    handleRemove = (data) => {
        API.deleteNewsBlog(data).then(res => {
            this.getPostAPI();
        });
    };

    handleUpdate = (data) => {
        console.log(data);
        this.setState({
            formBlogPost: data,
            isUpdate: true
        });
    };

    handleFormChange = (event) => {
        // console.log(`berubah`, event.target);
        let formBlogPostNew = {...this.state.formBlogPost};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate){
            formBlogPostNew[`id`] = timestamp;
        }
        formBlogPostNew[event.target.name] = event.target.value;
        // console.log('init', this.state.formBlogPost);
        // console.log('new value', formBlogPostNew);
        this.setState({
            formBlogPost: formBlogPostNew
        }, () => {
            // console.log(`value obj formBlogPost`, this.state.formBlogPost);
        });
    };

    handleSubmit = () => {
        if(this.state.isUpdate){
            this.putDataToAPI();
        }
        else{
            this.postDataToAPI();
        }
        this.setState({
            formBlogPost: {
                id: 1,
                title: '',
                body: '',
                userId: 1
            },
            isUpdate: false
        });
    };

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`);
    };

    componentDidMount() {
        document.title = 'Blog Post';
        this.getPostAPI();
    }

    render() {
        return (
            <Fragment>
                <p>Halaman Blog Post</p>
                <hr/>
                <div className="form-add-post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogPost.title} name="title" placeholder="add title" onChange={this.handleFormChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" id="body" cols="30" rows="10" placeholder="add blog content" onChange={this.handleFormChange} value={this.state.formBlogPost.body}></textarea>
                    <button className="btn-submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/*{
                    this.state.comments.map(comment => {
                       return <p>{comment.name} - {comment.email}</p>
                    })
                }*/}
                {
                    this.state.post.map(post => {
                       return <Post key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        );
    }
}

export default BlogPost;