import React, { useEffect } from 'react';
import  PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../reducers/post';
import PostCard from '../components/PostCard';

const Hashtag = ({ tag }) => {
    console.log(tag);
    const dispatch = useDispatch();
    const { mainPosts } = useSelector(state => state.post);

    return (
        <div>
            {mainPosts.map(c => (
                <PostCard key={+c.createdAt} post={c} />
            ))}
        </div>
    );
};

Hashtag.PropTypes = {
    tag: PropTypes.string.isRequired,
};

Hashtag.getInitialProps = async (context) => {
    const tag = context.query.tag;
    console.log('hashtag getInitialProps', tag);
    context.store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: tag,
    });
    return { tag };
};

export default Hashtag;