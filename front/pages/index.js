import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

const Home = () => {
    return (
        <>
            <Head>
                <title>NodeBird</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.25.3/antd.css" />
            </Head>
            <AppLayout>
                <Link href="/about"><a>about</a></Link>
                <div>Hello</div>
            </AppLayout>
        </>
    );
};

export default Home;