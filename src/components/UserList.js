import React, { useEffect, useState } from 'react'

const UserList = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const fetchUsers = () => {
          fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then((data) => setUsers(data))
            .catch((err) => console.error(err));
        };
        fetchUsers();
      }, []);
    return (
        <div>
            {users.map(el=>
                <div>
                    <h1>{el.name}</h1>
                </div>
                )}
        
        </div>
    )
}

export default UserList
