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

      <section className='maincontainer'>

        <div className='main'>
          {getarrofdata && getarrofdata.map((res, ind) =>
            <div className='card' key={ind}>
              <h1>Poll Slots Management</h1>
              <ul>
                <li className='head'>Skills</li>
                <li className='head'>Experience</li>
                <li className='head'>AddSkills</li>
              </ul>

              <ul>
                <li>{res.skills}</li>
                <li>{res.experience}</li>
                <li>{res.addskills}</li>
              </ul>

            </div>
          )}
        </div>
        
      </section>
    </>
  )
}

export default Home;