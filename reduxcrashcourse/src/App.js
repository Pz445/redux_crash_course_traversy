import React from 'react';
import './App.css';
import PostForm from './components/Postform';
import { Provider } from 'react-redux';
import store from './store';

import Posts from './components/Posts';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <main>
          <PostForm />
          <hr></hr>
          <Posts />
        </main>
    </div>
    </Provider>
    
  );
}

export default App;
