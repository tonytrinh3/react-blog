import React from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';

class UserHeader extends React.Component{
    componentDidMount(){
        //this.props.userId is passed in PostList, down from actions. data from action, through reducer in store
        this.props.fetchUser(this.props.userId);
    }


    render() {
        return <div>User Header</div>
    }
}

export default connect(null, {fetchUser})(UserHeader);