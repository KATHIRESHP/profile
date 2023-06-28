import React from 'react'
import mikey from './Images/profile.jpg'
import NavBar from './NavBar'
import Project from './Project'
import Skills from './Skills'
import bg from './Images/bg-img.jpg'
import Profile from './Profile'
import pdf from './Source/resume.pdf'


const Home = () => {
    return (
        <div id='home'>
            <div className='bg-teal-600 container h-full p-5'>

                <div className='sticky top-0'>
                    <div className='container bg-teal-800 px-3 flex justify-between mt-0 md:mt-8 sm:mt-0 rounded-md py-3'>
                        <div className='flex cursor-none' style={{ height: "100px" }}>
                            <img src={mikey} ></img>
                        </div>
                        <div className='xl:w-6/12 md:w-9/12 sm:w-full flex items-center'>
                            <NavBar />
                        </div>
                    </div>
                </div>

                <center id='projects' className='text-3xl font-thin font-serif my-11'>Profile</center>
                <div className='container bg-white h-full p-3 rounded-lg'>
                    <Profile img={bg} />
                </div>

                <center id='projects' className='text-3xl font-thin font-serif my-11'>Projects</center>
                <div className='container bg-white h-full grid grid-cols-3 gap-3 p-3 rounded-lg'>
                    <Project name="Student Detail management" description="In this project, We have developed a web application which holds the student details" used="HTML, CSS, XAMP" />
                    <Project name="Resume Builder" description="In this project, We have developed a web application which holds the student details" used="React" />
                    <Project name="Stem Dieseases Prediction" description="In this project, We have developed a web application which holds the student details" used="CNN algorithm, PyCharm" />
                    <Project name="Carbon footprint monitoring" description="In this project, We have developed a web application which holds the student details" used="Arduino IDE" />
                </div>

                <center id='skills' className='text-3xl font-thin font-serif my-11'>Technical Skills</center>
                <div className='container bg-white h-6/12 p-11 grid grid-cols-2 font-serif gap-11 items-center rounded-lg'>
                    <Skills class_name="fa-brands fa-java fa-2xl" name="Java" />
                    <Skills class_name="fa-solid fa-c" name="C language" />
                    <Skills class_name="fa-brands fa-react" name="React" />
                    <Skills class_name="fa-brands fa-node-js" name="Express Js" />
                </div>

                <center className='text-3xl font-thin font-serif my-11' id="internship">Internship</center>
                <div className='container bg-white h-6/12 p-11 font-serif gap-2 items-center rounded-lg flex justify-center flex-col'>
                    <h1 className='text-2xl'>Web Development Internship</h1>
                    <h3 className=''>In MKCS Digit Tech, @Karur</h3><br />
                    <div className='grid grid-cols-3'>
                        <div></div>
                        <p className='text-lg flex justify-center italic'>
                            " I had been worked there for more than a month from 11th-April-2022 to 25th-May-2022 and I learnt a lot about web development.<br />
                            I have developed portfolio and Todo list applications with front-end framework called React Js"
                        </p>
                    </div>
                </div>
                <center className='text-3xl font-thin font-serif my-11'id="resume">Resume</center>
                <div className='container bg-white h-6/12 p-11 text-xl font-serif items-center rounded-lg flex flex-col justify-center'>
                <p>Here is my resume to download</p>
                    <a href={pdf} className='text-5xl mt-10 text-green-600' download><i class="bi bi-download"></i></a>
                </div>
            </div>
        </div>
    )
}

export default Home