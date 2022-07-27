import React from 'react';

import UsersList from '../components/UsersList'

const Users = () => {
    const USERS = [
    {
        id: '101',
        image: 'https://www.planetware.com/wpimages/2019/11/india-best-places-to-visit-agra.jpg',
        name: 'Testing',
        places: 3
    }
];

    return <UsersList items={USERS}/>
}

export default Users;