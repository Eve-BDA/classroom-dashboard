import React from "react";
import CardItem from "./CardItem";

function Cards() {
    return (
        <ul className="d-block d-lg-flex">
            <CardItem
            title="At a Glance."
            body="View your essential Classroom data in one place."
            list1="Courses"
            list2="Course Work"
            list3="Grades"
            />
            <CardItem
            title="Keep Track."
            body="Easily track your assignments and submissions."
            list1="Assigned Work"
            list2="Tasks"
            list3="Deadlines"
            />
            <CardItem
            title="Be Notified."
            body="See tutor announcements and get notified."
            list1="Notifications"
            list2="Messages"
            list3="Marks"
            />
        </ul>
    );
}

export default Cards;

