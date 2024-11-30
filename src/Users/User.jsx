import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const User = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    console.log(loadedUsers);

    const handleDelete = (id) => {
        console.log(id)

        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log('user deleted', data)
            
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== id);
                setUsers(remaining);
            }
        })
    }

    return (
        <div>
            <h2 className="text-3xl bg-green-500">Users: { users.length }</h2>
            <div className="overflow-x-auto">
              <table className="table text-black">
                {/* head */}
                <thead>
                  <tr className="text-black">
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Creation Time</th>
                    <th>Last Login</th>
                  </tr>
                </thead>
                <tbody>
                  {/* <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                  </tr> */}
                  {
                    users.map((user,index) => (
                        <tr key={user._id}>
                          <th>{index+=1}</th>
                          <td>{user.name}</td>
                          <td>{user.email}</td>
                          <td>{user.creationTime}</td>
                          <td>{user.lastSignin}</td>
                          <td className="space-x-2">
                            <button className="btn">Edt</button>
                            <button onClick={() => handleDelete(user._id)} className="btn">dlt</button>
                          </td>
                        </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
        </div>
    );
};

export default User;