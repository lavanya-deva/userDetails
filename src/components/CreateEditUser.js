import React, { useState } from "react";
import CloseIcon from "./CloseIcon";
import "../Modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from "./actions/Useraction";

function CreateEditUser({ open, handleClose, editVal, create, editData }) {
    console.log("edit", editVal, editData);


    //const user= useSelector((state)=>state.user?.users);
    // const user = useSelector((state) => state.user?.users || []);
    const user = useSelector(state => state.user.users);
    console.log("usrsdara", user);
    const dispatch = useDispatch();
    const [newUser, setnewUser] = useState({
        fname: '', lname: '', email: '', imgLink: ''
    })
    const [currentUser, setCurrent] = useState({
        fname: '', lname: '', email: '', imgLink: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewUser({ ...newUser, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // dispath(addUser(newUser));

        const id = user.length + 1;
        console.log("id", id);
        dispatch(addUser({
            ...newUser, id
        }));

        setnewUser({ fname: '', lname: '', email: '', imgLink: '' });
        handleClose();
    }

    const handleNewChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setCurrent({ ...currentUser, [name]: value });
    }
    if (!open) { return null }
    return (
        <>

            <div className="modal-overlay ">
                <div className="modal-content">
                    <button className="close-button" onClick={(e) => handleClose(e)}><CloseIcon />   </button>
                    {create && <><h1 style={{ alignSelf: "flex-start" }}>Create User</h1><form>

                        <label>First Name <span className="required">*</span></label><br />
                        <input type="text" name="fname" value={newUser.fname} onChange={(e) => handleChange(e)} placeholder="Enter First Name" /><br />
                        <label style={{ marginTop: "10px" }}>Last Name  <span className="required">*</span></label><br />
                        <input type="text" name="lname" value={newUser.lname} onChange={(e) => handleChange(e)} placeholder="Enter last Name" /><br />
                        <label style={{ marginTop: "10px" }}>Email  <span className="required">*</span></label><br />
                        <input type="email" name="email" value={newUser.email} onChange={(e) => handleChange(e)} placeholder="Enter email" /><br />
                        <div>
                            <label style={{ marginTop: "10px" }}>Image Link  <span className="required">*</span></label><br />
                            <input
                                type="url"
                                name="imgLink"
                                value={newUser.imgLink}
                                onChange={(e) => handleChange(e)}
                                placeholder="Enter image link url"
                                required /><br />
                            <div style={{ float: "right", marginRight: "20px", marginTop: "20px" }}>

                                <button type="submit" onClick={(e) => handleClose(e)} style={{ backgroundColor: "grey" }}>Cancel</button>
                                <button type="submit" onClick={(e) => handleSubmit(e)} style={{ marginLeft: "10px", backgroundColor: "skyblue" }}>Submit</button>
                            </div>
                        </div>
                    </form></>}

                    {editVal && <><h1 style={{ alignSelf: "flex-start" }}>Edit User</h1><form>

                        <label>First Name:</label><br />
                        <input type="text" name="fname" value={editData.fname} onChange={(e) => handleNewChange(e)} placeholder="Enter First Name" /><br />
                        <label style={{ marginTop: "10px" }}>Last Name:</label><br />
                        <input type="text" name="lname" value={editData.lname} onChange={(e) => handleNewChange(e)} placeholder="Enter last Name" /><br />
                        <label style={{ marginTop: "10px" }}>Email:</label><br />
                        <input type="email" name="email" value={editData.email} onChange={(e) => handleNewChange(e)} placeholder="Enter email" /><br />
                        <div>
                            <label style={{ marginTop: "10px" }}>Image Link:</label><br />
                            <input
                                type="url"
                                   name="imgLink"
                                value={editData.imgLink}
                                onChange={(e) => handleNewChange(e)}
                                required /><br />
                            <div style={{ float: "right", marginRight: "20px", marginTop: "20px" }}>

                                <button type="submit" onClick={(e) => handleClose(e)} style={{ backgroundColor: "grey" }}>Cancel</button>
                                <button type="submit" onClick={(e) => handleSubmit(e)} style={{ marginLeft: "10px", backgroundColor: "skyblue" }}>Submit</button>
                            </div>
                        </div>
                    </form></>}




                </div>

            </div>

        </>
    )

}

export default CreateEditUser;