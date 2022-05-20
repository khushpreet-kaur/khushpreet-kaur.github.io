import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Personal from '../components/Stats/Personal';
import Site from '../components/Stats/Site';

const Stats = () => (
  <Main
    title="Stats"
    description="Some statistics about Michael D'Angelo and mldangelo.com"
  >
    <article className="post" id="stats">
      <header>
        <div className="title">
          <h2 data-testid="heading">
            <Link to="/stats">Stats </Link> <br /><br />
            <p style={{ 'font-size': '.5em', 'font-weight': 'normal' }}>Some stats about me, just for fun</p>
            {/* <h5>Some stats about me, just for fun</h5> */}
          </h2>
        </div>
      </header>
      <Personal />
      <Site />
    </article>
  </Main>
);

export default Stats;
