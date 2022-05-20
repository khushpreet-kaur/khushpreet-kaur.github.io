import React from 'react';
import Table from './Table';
import data from '../../data/stats/personal';

const PersonalStats = () => (
  <>
    {/* <h3>Some stats about me</h3> */}
    {/* <h5>Just for fun</h5> */}
    <Table data={data} />
  </>
);

export default PersonalStats;
