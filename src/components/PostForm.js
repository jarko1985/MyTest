import React from 'react';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(post),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        return console.log(data);
      });
  }
  render() {
    return (
      <div>
        <h2>Add a Post</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label>
            <br />
            <input
              type='text'
              name='title'
              value={this.state.title}
              onChange={this.handleChange}
            />
            <br />
            <label>Body</label>
            <br />
            <textarea
              name='body'
              value={this.state.body}
              onChange={this.handleChange}
            />
          </div>
          <button type='submit'>Add</button>
          <hr />
        </form>
      </div>
    );
  }
}

export default PostForm;
