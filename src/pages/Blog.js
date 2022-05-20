import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

// import Personal from '../components/Stats/Personal';
// import Site from '../components/Stats/Site';

const Blog = () => (
  <Main title="Blog" description="Khushpreet Kaur's Blog.">
    <div>
      <h1 data-testid="heading">Sorry! Blog is currently down!</h1>
      <p>Return <Link to="/">home</Link>.</p>
    </div>
  </Main>

);

export default Blog;
