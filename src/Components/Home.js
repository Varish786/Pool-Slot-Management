import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

function Home() {

  const navigate = useNavigate()
  const getarrofdata = JSON.parse(localStorage.getItem("Data"))

  function goToNewpage() {
    navigate("/Newpage")

  }

  return (
    <>

      <div className='btn'>
        <button onClick={goToNewpage} className='btnin'>Create Polls</button>
      </div>

      <div className='container'>
        <div className='container1'>
          <h1> Poll Slots Management </h1>
        </div>

        <div className="container2">
          <div className='heading'>
             <p>Skils</p>
             <p>Experience</p>
             <p>AddSkills</p>
            </div>
          { 
            getarrofdata && getarrofdata.map((res, ind) =>
              <div key={ind} className='datadiv'>
                <p>{res.skills}</p>
                <p>{res.experience}</p>
                <p>{res.addskills}</p>
              </div>
            )
            }
        </div>
      </div>

    </>
  )
}

export default Home;