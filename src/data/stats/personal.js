// import React, { useState, useEffect } from 'react';

// const Age = () => {
//   const [age, setAge] = useState();

//   const tick = () => {
//     const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
//     const birthTime = new Date('1990-02-05T09:24:00');
//     setAge(((Date.now() - birthTime) / divisor).toFixed(11));
//   };

//   useEffect(() => {
//     const timer = setInterval(() => tick(), 25);
//     return () => {
//       clearInterval(timer);
//     };
//   }, []);
//   return <>{age}</>;
// };

const data = [
  {
    key: 'birthday',
    label: 'Birthday',
    value: 'November 20th',
  },
  {
    key: 'hometown',
    label: 'Hometown',
    value: 'Fazilka, Punjab',
  },
  {
    key: 'location',
    label: 'Current city',
    value: 'Bangalore, India',
  },
  {
    key: 'languages',
    label: 'Languages',
    value: 'Punjabi, English, Hindi',
  },
  {
    key: 'bird',
    label: 'Bird species observed',
    link: 'https://ebird.org/profile/MTAwODU1Mw/world',
    value: '282 - checklist',
  },
];

export default data;
