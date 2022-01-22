import React, { useState } from 'react';
import Navbar from './components/Navbar';
import List from './components/List';
import './style.css';

export default function App() {
  const [data, setData] = useState({
    one: [],
    two: [],
    three: [],
  });

  return (
    <>
      <Navbar />
      <div className="container py-3">
        <div className="row">
          <div className="col-md-3 p-0">
            <List list={data.one} />
          </div>
          <div className="col-md-3 p-0 mx-2">
            <List list={data.two} />
          </div>
          <div className="col-md-3 p-0">
            <List list={data.three} />
          </div>
        </div>
      </div>
    </>
  );
}
