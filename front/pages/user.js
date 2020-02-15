import React from 'react';

const User = () => {
    return (
        <div>user</div>
    );
};

User.getInitialProps = async (context) => {
    console.log('user getInitialProps', context.query.id);
};

export default User;