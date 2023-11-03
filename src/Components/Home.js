import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';
function Home() {
    const navigate = useNavigate()
        function goToNewpage() {
            navigate("/Newpage")
        }
  return (
    <>

<div className='btn'>
        <button onClick={goToNewpage}>Create Polls</button>
        </div>

    <div className='container'> 
         <div className='container1'>
         <h1> Poll Slots Management </h1>
         </div>

         <div className = "container2">
      <div> {localStorage.getItem("skills")}</div>
      <div>{localStorage.getItem("experience")}</div>
      <div>{localStorage.getItem("addskills")}</div>

      </div>
    </div>

    </>   
  )
}

export default Home;