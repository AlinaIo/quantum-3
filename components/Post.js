import React from 'react';
import ReactDOM from 'react-dom';

import Link from 'next/link';

const Post = (props) => {
    const url = `/posts?id=${props.element.id}`;

    return (
        <div>
            <Link href={url}>
                <a>{props.element.title}</a>
            </Link>
        </div>
    )};

export default Post;