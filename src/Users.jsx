import React, { useState } from 'react';

function Users() {
    const [users] = useState([
        {
            Name: 'Saneeah',
            Email: 'saneeahimam@gmail.com',
            Age: 20
        }
    ]);

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8">

                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-primary text-white">
                            <h4 className="mb-0">Users List</h4>
                        </div>

                        <div className="card-body p-0">
                            <table className="table table-hover mb-0 text-center align-middle">
                                <thead className="table-light">
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Age</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={index}>
                                            <td className="fw-semibold">{user.Name}</td>
                                            <td>{user.Email}</td>
                                            <td>
                                                <span className="badge bg-secondary">
                                                    {user.Age}
                                                </span>
                                            </td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-2">
                                                    Edit
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default Users;