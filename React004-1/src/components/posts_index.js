import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchPosts} from '../actions/index';

class PostsIndex extends Component {
  // constructor() {
  //
  // }

  componentWillMount() {
    // console.log("this would be a good time to call an action creator!");
    this.props.fetchPosts();
  }

  render() {
    return(
      <div> List of Blogs </div>
    );
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({fetchPosts},dispatch);
// }

// export default connect(null, mapDispatchToProps)(PostIndex);
//instead we pass the object of Action fetchPosts
// export default connect(null, { fetchPosts: fetchPosts })(PostIndex);
//because the same key of value of passed object fetchPosts, can do as below
export default connect(null, { fetchPosts })(PostsIndex);