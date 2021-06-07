import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer ';
import Main from './components/main';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <Main />
        <Footer />
      </body>
    );
  }
}

export default App;
