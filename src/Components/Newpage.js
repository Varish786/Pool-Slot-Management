import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';



export default function Newpage() {

 

  const navigate = useNavigate()
  const initaldata = {
    skills: "",
    experience: "",
    addskills: ""
  }
  const [data, setdata] = useState(initaldata)
  
  function handleInput(e) {
    const { value, name } = e.target;
    setdata({ ...data, [name]: value })
  }

  const handleSubmit = () => {
    const local = JSON.parse(localStorage.getItem("Data"))
    if (local) {
      local.push(data)
      localStorage.setItem("Data", JSON.stringify(local))
     
    }
    else {
      const newlist = [data]
      localStorage.setItem("Data", JSON.stringify(newlist))
     
    }
    navigate("/")
  }

  return (
    <div className="form">
      <input type="text" placeholder="Enter your Skills" onChange={handleInput} name="skills" value={data.skills} />
      <br />
      <input type="number" placeholder="Enter your Experience" onChange={handleInput} name="experience" value={data.experience} />
      <br />
      <input type="text" placeholder="Enter your Additional Skills" onChange={handleInput} name="addskills" value={data.addskills} />
      <br />
      <button onClick={handleSubmit} >Submit</button>

    </div>

  )
}

