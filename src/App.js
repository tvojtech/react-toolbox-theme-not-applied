import React, {Component} from 'react';
import logo from './logo.svg';
import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';


//styles
import './App.less';
import './App.scss';
import './App.styl';
import styles from './Modules.css';

class App extends Component {
  render() {
    return (
      <div>
        <AppBar title="Appbar title" />
        <Button primary={true} label="Button label"/>
      </div>
    )
  }
}

export default App;
