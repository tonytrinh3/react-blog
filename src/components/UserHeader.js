import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        //this.props.userId is passed in PostList, down from actions. data from action, through reducer in store
        this.props.fetchUser(this.props.userId);
    }


    render() {
        //this.props.user has all users
        //find - for each user.id that you get from /users, see if user.id match with userId from /post and match the id with their blog post
        //const user = this.props.users.find(user => user.id === this.props.userId);
        const {user} = this.props;
        //if you cannot find a user and their post
        if (!user){
            return null;
        }

        return <div className = 'header'>{user.name}</div>;
    }
}

const mapStateToProps = (state, ownProps) => {
    return { user: state.users.find(user => user.id === ownProps.userId)};
};

export default connect(mapStateToProps, {fetchUser})(UserHeader);