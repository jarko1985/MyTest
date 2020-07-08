import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Posts from './components/Posts';
import './App.css';
import PostForm from './components/PostForm';

class App extends React.Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <PostForm />
          <Posts />
        </div>
      </Provider>
    );
  }
}

export default App;
