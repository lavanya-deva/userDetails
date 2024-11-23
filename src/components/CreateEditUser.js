import React, { useState, useEffect } from "react";
import CloseIcon from "./CloseIcon";
import "../Modal.css";
import { useDispatch, useSelector } from 'react-redux';
import { addUser, updateUser } from "./actions/Useraction";

function CreateEditUser({ open, handleClose, editVal, create, editData,resetData }) {
    const user = useSelector(state => state.user.users);
    console.log("usrsdara", user);
    const dispatch = useDispatch();
    const [newUser, setnewUser] = useState({
        fname: '', lname: '', email: '', imgLink: ''
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setnewUser({ ...newUser, [name]: value });
    }
    useEffect(()=>{
        if(editVal && editData){
            setnewUser(editData)
        }else{
            setnewUser({ fname: '', lname: '', email: '', imgLink: '' });
        }
    },[editData,editVal])

    const handleSubmit = (e) => {
        e.preventDefault();
        if(create){
        const id = user.length + 1;
        console.log("id", id);
        dispatch(addUser({
            ...newUser, id
        }));
        setnewUser({ fname: '', lname: '', email: '', imgLink: '' });
         }else{
            const editId= user.length+1;
            dispatch(updateUser({...newUser,editId}));
         }
        handleClose();
        resetData();
    }
    if (!open) { return null }
    return (
        <>

            <div className="modal-overlay ">
                <div className="modal-content">
                    <button className="close-button" onClick={(e) => handleClose(e)}><CloseIcon />   </button>
                    <h1 style={{ alignSelf: "flex-start" }}>{create ? "Create User" : "Edit User"}</h1><form>

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
                                <button type="submit" onClick={(e) => handleSubmit(e)} style={{ marginLeft: "10px", backgroundColor: "skyblue" }}>{create ? "Submit" : "Update"}</button>
                            </div>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )

}

export default CreateEditUser;