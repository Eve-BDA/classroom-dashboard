import React from "react";
import AnnouncementItem from "./AnnouncementItem";

function Announcements() {
    return (
        <ul className="mt-5">
            <AnnouncementItem
            name="Jane Smith"
            time="12 Feb"
            message="Dear Sept 23 Candidates,
            This is a reminder that you are invited to attend a Q and A Session on 14th February.
            Thank you
            Jane Smith - L5 Tutor"
            />
            <AnnouncementItem
            name="Tech Admin"
            time="4 Feb"
            message="Tech Admin posted a new assignment: Task 1"
            />
        </ul>
    );
}

export default Announcements;