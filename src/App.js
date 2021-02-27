import logo from './logo.svg';
import 'antd/dist/antd.css';
import './App.css';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import { Select, Layout } from 'antd';
import { Colleges } from './components/colleges/colleges';
import { Students } from './components/students/students';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact component={Colleges} path="/" />
        <Route exact component={Students} path="/colleges/:id" />
      </Switch>
    </Router>
  );
}

export default App;
