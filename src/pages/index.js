import React from 'react';
import Link from 'next/link';

const App = () => {
  return (
    <div>
      <ul>
        {/* <li>
        <Link href="/" as="/App">
          <p>Home Page</p>
        </Link>
      </li> */}
        <li>
          <Link href="/Hello" as="/Hello">
            <a href="/">Hello Page</a>
          </Link>
        </li>
      </ul>
      <p>HEllo World</p>
    </div>
  );
};

export default App;
