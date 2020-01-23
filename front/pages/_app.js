import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import AppLayout from '../components/AppLayout';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers';

const NodeBird = ({ Component, store }) => {
    return  (
    <Provider store={store}>
        <Head>
            <title>NodeBird</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
        </Head>
        <AppLayout>
            <Component />
        </AppLayout>
    </Provider>
    );
};

NodeBird.PropTypes = {
    Component: PropTypes.elementType,
    store: PropTypes.object,
};

export default withRedux((initialState, options) => {
    const middlewares = [];  // 프로젝트할때 이부분만 바뀜
    const enhancer = compose(
        applyMiddleware(...middlewares),
        !options.isServer && window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' 
        ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
    );
    const store = createStore(reducer, initialState, enhancer);
    return store;
})(NodeBird);