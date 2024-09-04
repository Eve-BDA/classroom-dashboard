import React, { useEffect, useState } from 'react';
import { gapi } from 'gapi-script';
import './App.css';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Dashboard from './Pages/Dashboard';
import Resources from './Pages/Resources';

const CLIENT_ID = process.env.REACT_APP_GOOGLE_CLASSROOM_CLIENT_ID;
const API_KEY = process.env.REACT_APP_GOOGLE_CLASSROOM_API_KEY;
const DISCOVERY_DOCS = ["https://classroom.googleapis.com/$discovery/rest?version=v1"];
const SCOPES = "https://www.googleapis.com/auth/classroom.courses.readonly https://www.googleapis.com/auth/classroom.coursework.me.readonly";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      const script = document.createElement('script');
      script.src = "https://apis.google.com/js/api.js";
      script.onload = () => {
        gapi.load('client:auth2', initClient);
      };
      script.onerror = (error) => {
        console.error("Error loading Google API script: ", error);
      };
      document.body.appendChild(script);
    };

    const initClient = () => {
      gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES,
      }).then(() => {
        const authInstance = gapi.auth2.getAuthInstance();
        setIsSignedIn(authInstance.isSignedIn.get());
        authInstance.isSignedIn.listen(setIsSignedIn);
      }).catch(error => {
        console.error("Error initializing Google API client: ", error);
      });
    };

    loadScript();
  }, []);

  const signIn = () => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  };

  const signOut = () => {
    gapi.auth2.getAuthInstance().signOut().then(() => {
      setIsSignedIn(gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  };

  return (
    <>
      <Router>
        <NavBar onSignIn={signIn} onSignOut={signOut} isSignedIn={isSignedIn} />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/Dashboard" exact element={<Dashboard />} />
          <Route path="/Resources" exact element={<Resources />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
