import { gapi } from 'gapi-script';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLASSROOM_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CLASSROOM_API_KEY;
const DISCOVERY_DOCS = ["https://classroom.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.me.readonly";

export const initClient = () => {
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
    });
};

export const handleClientLoad = () => {
    gapi.load('client:auth2', initClient);
};

export const signIn = () => {
    gapi.auth2.getAuthInstance().signIn();
};

export const signOut = () => {
    gapi.auth2.getAuthInstance().signOut();
};

export const isSignedIn = () => {
    return gapi.auth2.getAuthInstance().isSignedIn.get();
};

export const getCourses = () => {
    return gapi.client.classroom.courses.list();
};

export const getCoursework = (courseId) => {
    return gapi.client.classroom.courses.courseWork.list({
        courseId: courseId
    });
};
