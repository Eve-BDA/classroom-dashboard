import React from "react";
import DashboardAccordion from "../Components/DashboardAccordion";
import "./Dashboard.css";

function Dashboard() {
    return (
        <>
        <div className="container">
            <h1 className="title fs-1 fw-bold mt-5">Your Classroom Dashboard</h1>
            <div className="line-full w-full mb-5"></div>
            <div className="d-lg-flex align-items-end">
                <img className="rounded-circle profile-pic" src="/mario-la-pergola-Qn3mRLiEUWA-unsplash.jpg" alt="Profile picture" />
                <div className="ms-3 mt-3 mt-lg-0">
                    <p className="fs-4 fw-bold">Full Name</p>
                    <p className="fs-5">Level 5 Dyslexia</p>
                </div>
                
                <a href="https://classroom.google.com/h" target="_blank">
                    <button type='button' className='btn-classroom text-start ms-3 ms-lg-5 py-2 px-4'>Google <br />Classroom
                        <svg className="ms-2" style={{ width: '30px' }} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500"><path class="st0" d="M58,96.92C66.73,96.95,75.47,97,84.2,97c60.02,0.01,120.04,0,180.07,0c1.36,0,2.73,0,4.36,0
                            c0,12.7,0,25.23,0,38.21c-57.28,0-114.59,0-172.12,0c0,89.68,0,178.92,0,268.34c89.31,0,178.49,0,268.09,0
                            c0-57.3,0-114.62,0-172.17c12.94,0,25.48,0,38.48,0c0,1.51,0,2.95,0,4.4c0,67.37,0,134.74,0,202.11c0,1.37,0.06,2.74,0.09,4.11
                            c-114.99,0-229.98,0-345.16,0C58,326.97,58,211.94,58,96.92z"/>
                        <path class="st0" d="M244.55,282.87c-9.27-9.26-18.07-18.06-27.2-27.19c52.57-52.56,105.34-105.31,158.69-158.65
                            c-16.98,0-33.21,0-49.59,0c0-12.84,0-25.28,0-38c38.18,0,76.37,0,114.73,0c0,38.09,0,76.2,0,114.52c-12.57,0-25.11,0-38.06,0
                            c0-16.27,0-32.49,0-49.22C349.9,177.54,297.14,230.29,244.55,282.87z"/>
                        </svg>
                    </button>
                </a>
            </div>
            
            <div className="m-5"></div>
            <a href="/">
                <button type='button' className='btn-announcements py-2 px-4 m-2 mb-5'>Announcements</button>
            </a>
            
            <a href="/resources">
                <button type='button' className='btn-tech-support py-2 px-4 m-2 mb-5'>Tech Support</button>
            </a>
        </div>
        
        <div className="accordion-bg py-5">
            <div className="container">
                <DashboardAccordion />
            </div>
        </div>
        
        </>
    );
}


export default Dashboard;