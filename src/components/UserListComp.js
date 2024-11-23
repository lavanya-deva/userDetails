import React from "react";
import "../General.css"
import CreateEditUser from "./CreateEditUser";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";
import { deleteUser } from "./actions/Useraction";


function UserListComp() {
    const [open, isOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    //const user= useSelector((state)=>state.user.users);
    //const user= useSelector((state)=>state.user.users);
    // const user = useSelector((state) => state.user?.users ?? []);
    const user = useSelector(state => state.user.users);
    console.log("user", user);
    const [editData, setEditData] = useState('');

    const [edit, setEdit] = useState(false);
    console.log("edit", edit);

    const [create, setCreate] = useState(false);

    const dispatch = useDispatch();

    console.log("user", user);

    function handleCreateUser(e) {
        isOpen(true);
        setCreate(true);
    }
    function handleClose(e) {
        isOpen(false);
    }

    function handleEdit(e, user) {
        isOpen(true);
        setEdit(true);
        setEditData(user);
    }
    async function handleDelete(e, id) {
        e.preventDefault();
        console.log("id", id);
        try {
            const res = await axios.delete(`https://reqres.in/api/users/${id}`)
            // if (res.ok) {
            dispatch(deleteUser(id, ...user));
            console.log('User deleted successfully');

            //}
        } catch (err) {
            console.log("error");

        }


    }
    const filteredUsers = user.filter(user =>
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.fname.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.lname.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("filtered", filteredUsers);



    return (
        <>
            <nav style={{ backgroundColor: "black", height: "30px" }}>
                <p></p>
            </nav>
            <div className="user-container">
                <div className="small-container">
                    {/* <div className="content"> */}
                    <span className="content" style={{ paddingLeft: "20px" }}> <p style={{ display: "contents" }}>User</p>
                        <span style={{ float: "right", flex: "1" }}>
                            <input type="search" placeholder="input search text" value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} ></input>
                            <button type="submit" onClick={(e) => handleCreateUser(e)} style={{ backgroundColor: "skyblue" }}>Create User</button>
                        </span> </span>
                    {/* </div> */}

                    <table className="table" style={{ marginTop: "10px" }}>
                        <thead style={{ backgroundColor: "grey" }}>
                            <tr>
                                <th>imgLink</th>
                                <th>Email</th>
                                <th>First Name</th>
                                <th>Last</th>
                                <th>action</th>
                            </tr>
                        </thead>
                        <tbody >

                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td style={{ marginLeft: "15px" }}>{user.imgLink}</td>
                                            <td>{user.email}</td>
                                            <td>{user.fname}</td>
                                            <td>{user.lname}</td>
                                            <td><div style={{ alignItems: "center" }}><button type="submit" onClick={(e) => handleEdit(e, user)}>Edit</button>
                                                <button type="submit" onClick={(e) => handleDelete(e, user.id)}>Delete</button>


                                            </div></td>
                                        </tr>
                                    )
                                })

                            ) : (
                                user.map((user) => {
                                    return (
                                        <tr key={user.id}>
                                            <td>{user.imgLink}</td>
                                            <td>{user.email}</td>
                                            <td>{user.fname}</td>
                                            <td>{user.lname}</td>
                                            <td><div style={{ alignItems: "center" }}><button type="submit" onClick={(e) => handleEdit(e, user)}>Edit</button>
                                                <button type="submit" onClick={(e) => handleDelete(e, user.id)}>Delete</button>


                                            </div></td>
                                        </tr>
                                    )
                                })
                            )

                            }

                        </tbody>

                    </table>




                </div>


            </div>
            <CreateEditUser open={open} handleClose={handleClose} editval={edit} create={create} user={user} editData={editData} />

        </>
    )
}

export default UserListComp;