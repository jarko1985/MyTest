import React from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }
  UNSAFE_componentWillMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return this.setState({ posts: data });
      });
  }
  render() {
    const postItem = this.state.posts.map((post) => {
      return (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      );
    });
    return <div>{postItem}</div>;
  }
}

export default Posts;
