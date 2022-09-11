import Link from 'next/link';
import React from 'react';

const index = ({ users }) => {
    return (
        <div>
            <h2>This is users: {users.length} </h2>
            {
                users.map(user => (
                    <div key={user.id}>
                        <h3 >{user.name}</h3>
                        <Link href={`users/${user.id}`}>
                            <button>Explore</button>
                        </Link>
                    </div>
                ))

            }
        </div>
    );
};

export default index;

// load jsonplaceholder user data
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return {
        props: { users: data }
    }
}
