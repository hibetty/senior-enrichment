import React from 'react';
import { Link } from 'react-router';

export default function Navbar() {
  return (
    <div>
      <Link to="/">- HOME -</Link>
      <Link to="/campuses"> CAMPUSES -</Link>
      <Link to="/students"> STUDENTS -</Link>
    </div>
  );
}
