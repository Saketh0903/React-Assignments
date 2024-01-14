import React, { useState, useEffect } from 'react'



function UserTable(props) {
    return (

        <div>
            <h3 className="text-center">UserDetails</h3>
            {
                (props.user.length === 0) ? <h5 className="text-center mt-3">No Users</h5> :
                    <table className="table table-striped table-responsive table-success text-center shadow-lg">
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>DateOfBirth</th>
                                <th>City</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                props.user.map((element, index) =>
                                    <tr key={index}>
                                        <td>{element.username}</td>
                                        <td>{element.dateofbirth}</td>
                                        <td>{element.city}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default UserTable