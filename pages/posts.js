import PostList from '../components/PostList';
import Header from '../components/Header';
import { withRouter } from 'next/router'

import PostDetails from '../components/PostDetails';

export default (children, router, href) => {
    return (
        <div>
            <PostDetails id={children.url.query.id} />
        </div>
    )};