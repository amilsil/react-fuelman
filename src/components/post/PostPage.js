
import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as postActions from '../../actions/postActions';
import { Link } from 'react-router';

class PostPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.onClickLoadPosts = this.onClickLoadPosts.bind(this);
    }

    onClickLoadPosts() {
        this.props.actions.fetchPosts();
    }

    postRow(post, index) {
        return <div key={index}>{post.title}</div>;
    }

    render() {
        return(
            <div>
                <h1>Posts</h1>
                {this.props.posts.map(this.postRow)}
                <button onClick={this.onClickLoadPosts}>Load Posts...</button>
            </div>
        );
    }
}

PostPage.propTypes = {
    posts: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // Use automatic action creator bindings instead
        actions: bindActionCreators(postActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);