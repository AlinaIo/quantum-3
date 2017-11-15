import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Link from 'next/link';

const fetchedArticle = {
    id: '2',
    title: 'titlu2',
    author: 'ionut',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createdAt: '32241948219',
    editedAt: undefined,
    tags: ['tag5', 'tag6']
};

export class PostDetails extends Component {
    componentDidMount() {
        //avem id-ul post-ului. fetch-uim de pe firebase
        //post-ul cu id-ul respectiv. luam id-ul din this.props.id
    }

    render() {
    console.log('props', this.props);
    return (
        <div>
            <div>Title: {fetchedArticle.title}</div>
            <div>Author: {fetchedArticle.author}</div>
            <div>Content: {fetchedArticle.content}</div>
        </div>
    )};
}

export default PostDetails;