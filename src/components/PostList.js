import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import UserHeader from './UserHeader';

class PostList extends React.Component{
    componentDidMount(){
        this.props.fetchPosts();
    }

    renderList(){
        //posts from the action that has all of the data 
        //for all posts, cycle through each post and output each
        return this.props.posts.map(post =>{
            return (
                <div className = 'item' key ={post.id}>
                    <i className = "large middle aligned icon user" />
                    <div className = "content">
                        <div className = "description">
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                        <div>
                            <UserHeader userId={post.userId}/>
                        </div>
                    </div>

                </div>
            )

        });
    }


    render() {
        console.log(this.props.posts);
        return <div className = 'ui relaxed divided list'> {this.renderList()} </div>
    }
}

const mapStateToProps = state => {
    return { posts: state.posts};
}
//the fetchpost action has the data, passed through our store with reducers
export default connect(mapStateToProps, {fetchPosts})(PostList);