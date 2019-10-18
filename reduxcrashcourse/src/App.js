import React from 'react';
import './App.css';
import PostForm from './components/Postform';

import Posts from './components/Posts';

function App() {
  return (
    <div className="App">
      <main>
        <PostForm />
        <hr></hr>
        <Posts />
      </main>
    </div>
  );
}

export default App;
