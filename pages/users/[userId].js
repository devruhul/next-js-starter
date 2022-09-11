import React from 'react';

const user = ({ user }) => {
    const { name, email, phone, website } = user;
    return (
        <div>
            <h2>This is user : {name} </h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
};

export default user;

// load jsonplaceholder user data
export async function getStaticProps({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`);
    const user = await res.json();

    return {
        props: { user }
    }
}

// getStaticPaths
export async function getStaticPaths() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();

    const paths = users.map(user => {
        return {
            params: { userId: user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}
