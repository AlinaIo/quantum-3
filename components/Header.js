import React from 'react';
import ReactDOM from 'react-dom';
import Link from 'next/link';

const Header = () => {
    return(
    <div>
        <Link prefetch href="/">
          <a>Posts</a>
        </Link>
        <Link prefetch href="/about">
          <a>About</a>
        </Link>
        <Link prefetch href="/new">
          <a>NewPost</a>
        </Link>
    </div>);
}

export default Header;