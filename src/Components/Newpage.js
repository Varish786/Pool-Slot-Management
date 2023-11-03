import React from 'react'
import { useState } from "react";
import {useNavigate} from 'react-router-dom';

export default function Newpage(){

  const navigate = useNavigate()

  const[skills,setSkill]=useState("")
  const[experience,setExperience]=useState("")
  const[addskills,setAddSkills]=useState("")

const handle=()=>{
  
  const arr = [{"skill":skills},{"experience":experience},{"addskills":addskills}]
 const new_arr = [...arr]
  localStorage.setItem("data",JSON.stringify(new_arr))
  // localStorage.setItem("experience",experience)
  // localStorage.setItem("addskills",addskills)

  navigate("/")

}

  return(
    <div className="form">
      <input type="skills" placeholder="Enter your Skills" onChange={(e)=>setSkill(e.target.value)} />
      <br/>
      <input type="experience" placeholder="Enter your Experience" onChange={(e)=>setExperience(e.target.value)}/>
       <br/>
       <input type="addskills" placeholder="Enter your Additional Skills" onChange={(e)=>setAddSkills(e.target.value)}/>
       <br/>
      <button onClick={handle} >Submit</button>

    </div>
    
  )
}

