import * as React from 'react';
import { Link } from 'react-router-dom'

import './home.css';

export class HomePage extends React.Component {
  render() {
    return (
      <section className="App">
        If I were you, I would click a link below :)
        <br/>
        <Link to='/list'>Go to list</Link>
        <br/>
      </section>
    );
  }
}
