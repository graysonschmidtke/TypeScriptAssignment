import React from 'react';

// Create interface for user object (TypeScript only)
interface UserUI {
    id: number;
    username: string;
    name: string;
    email: string;
}

interface UserListUI {
    users: UserUI[];
}

export const UsersList = (props: UserListUI) => {
    
    return(
        <>
            {/* Display table of users after fetching users data */}
            {props.users.length > 0 && <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Username</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                {props.users.map((user: UserUI) => (
                        <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.username}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        </tr>
                    ))
                }
                </tbody>
            </table>
            }
        </>
    );
}