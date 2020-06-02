import React from 'react';
import Link from 'next/link';

const Hello = () => {
  return (
    <div>
      <h1>hello page</h1>
      <ul>
        <li>
          <Link href="/" as="/">
            <a href="/">home</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Hello;
