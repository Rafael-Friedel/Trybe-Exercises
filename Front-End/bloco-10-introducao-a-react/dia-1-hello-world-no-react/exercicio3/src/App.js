import './App.css';
import Header from '.Header.jsx';
import React from 'react';
import Content from '.Content.jsx'
import Footer  from '.Footer.jsx'

class App extends React.Component {
  render(){
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
}

export default App;
