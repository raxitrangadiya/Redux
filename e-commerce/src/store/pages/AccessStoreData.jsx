import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectUsers } from '../reducer/users';
import { Link } from 'react-router-dom';

const AccessStoreData = () => {
    const users = useSelector(selectUsers)
    return (
        <div>
            <Link to="/">home </Link>
            {JSON.stringify(users.data)}

            <table>
                <thead>
                    <tr>
                        {/* <th>{apiData}</th> */}
                        <h1></h1>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </table>
        </div>
    );
};

export default AccessStoreData;