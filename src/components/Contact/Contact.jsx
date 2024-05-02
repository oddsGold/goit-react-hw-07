import React from "react";
import contact from "./Contact.module.css"
import {useDispatch} from "react-redux";
import {deleteContact} from "../../redux/contactsOps.js";

const Contact = ({id, name, number}) => {

    const dispatch = useDispatch();
    const handleDelete = () => dispatch(deleteContact(id));

    return(
        <div className={contact["contact"]}>
            <div className={contact["contact-info"]}>
                <div className={contact["contact-info-row"]}>
                    <img src="https://cdn-icons-png.flaticon.com/512/1077/1077114.png" alt={name}/>
                    <p>{name}</p>
                </div>
                <div className={contact["contact-info-row"]}>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/communication-chat-call/phone-icon.png" alt={number}/>
                    <p>{number}</p>
                </div>
            </div>
            <div className={contact["contact-btn"]}>
                <button onClick={() => handleDelete(id)}>Delete</button>
            </div>
        </div>
    )
}

export default Contact;