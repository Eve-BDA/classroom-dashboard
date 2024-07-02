import React from "react";
import "./AnnouncementItem.css";

function Announcements(props) {
    return (
        <>
        <div className="announcement-card container p-3 my-3">
            <div className="d-flex row">
                <p className="col text-white fw-bold fs-5">{props.name}</p>
                <p className="col text-white fw-bold fs-5 text-end me-4">{props.time}</p>
            </div>
            <p className="text-white">{props.message}</p>
            <a className="text-white fw-bold">Comment</a>
        </div>
        </>
    );
}

export default Announcements;