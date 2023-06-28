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
        <div id='home' className='w-screen'>
            <div className='bg-teal-600 container h-full xl:p-5 lg:p-3 md:p-1 sm:p-0'>

                <div className='sticky top-0'>
                    <div className='container bg-teal-800 pl-3 xl:h-40 flex flex-col md:flex-row justify-between rounded-md '>
                        <div className='flex md:w-4/12 justify-center sm:my-6  md:justify-start'>
                            <img src={mikey} className=' cursor-none sm:w-3/12 rounded-md' ></img>
                        </div>
                        <div className='xl:w-6/12 md:w-9/12 sm:w-10/12 flex items-center'>
                            <NavBar />
                        </div>
                    </div>
                </div>

                <center id='projects' className='text-3xl font-thin font-serif my-11'>Profile</center>
                <div className='container bg-white h-full p-1 md:p-3 rounded-lg'>
                    <Profile img={bg} />
                </div>

                <center id='projects' className='xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-thin font-serif my-11'>Projects</center>
                <div className='container bg-white h-full grid grid-cols-2 md:grid-cols-3 gap-3 p-3 rounded-lg'>
                    <Project name="Student Detail management" description="In this project, We have developed a web application which holds the student details" used="HTML, CSS, XAMP" />
                    <Project name="Resume Builder" description="In this project, We have developed a web application which holds the student details" used="React" />
                    <Project name="Stem Dieseases Prediction" description="In this project, We have developed a web application which holds the student details" used="CNN algorithm, PyCharm" />
                    <Project name="Carbon footprint monitoring" description="In this project, We have developed a web application which holds the student details" used="Arduino IDE" />
                </div>

                <center id='skills' className='xl:text-3xl lg:text-xl md:text-lg sm:text-xl  font-thin font-serif my-11'>Technical Skills</center>
                <div className='container bg-white h-6/12 p-11 grid grid-cols-2 font-serif gap-11 items-center rounded-lg'>
                    <Skills class_name="fa-brands fa-java fa-2xl" name="Java" />
                    <Skills class_name="fa-solid fa-c" name="C language" />
                    <Skills class_name="fa-brands fa-react" name="React" />
                    <Skills class_name="fa-brands fa-node-js" name="Express Js" />
                </div>

                <center className='xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-thin font-serif my-11' id="internship">Internship</center>
                <div className='container bg-white h-6/12 p-11 font-serif gap-2 items-center rounded-lg flex justify-center flex-col'>
                    <h1 className='text-2xl'>Web Development Internship</h1>
                    <h3 className=''>In MKCS Digit Tech, @Karur</h3><br />
                    <div className='grid grid-cols-1 md:grid-cols-3'>
                        <div></div>
                        <p className='text-lg flex justify-center italic'>
                            " I had been worked there for more than a month from 11th-April-2022 to 25th-May-2022 and I learnt a lot about web development.<br />
                            I have developed portfolio and Todo list applications with front-end framework called React Js"
                        </p>
                    </div>
                </div>
                <center className='xl:text-3xl lg:text-xl md:text-lg sm:text-xl font-thin font-serif my-11' id="resume">Resume</center>
                <div className='container bg-white h-6/12 p-11 text-xl font-serif items-center rounded-lg flex flex-col justify-center'>
                    <p>Here is my resume to download</p>
                    <a href={pdf} className='text-5xl mt-10 text-green-600' download><i class="bi bi-download"></i></a>
                </div>
            </div>

            <div className='text-4xl text-green-700 fixed right-11 bottom-11 shadow-xl rounded-3xl shadow-green-400 bg-clip-text'>
                <a href='http://wa.me/918300393110' target='_blank'><i class="bi bi-whatsapp"></i></a>
            </div> 
        </div>
    )
}

export default Home