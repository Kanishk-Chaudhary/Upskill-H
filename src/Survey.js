import React, { useEffect, useState } from "react";
import axios from "axios";
import './Survey.scss'
function Survey(){
    const [currLocation,setCurrLocation]=useState({})
    const [hide,sethide]=useState('hide')
    useEffect(()=>{
        getLocation();
        getLocation()
    },[])

const getLocation=async ()=>{
    const location=await axios.get("https://ipapi.co/json")
    setCurrLocation(location.data)
}



    
   return(
      <div className="Survey">
        <div className="for">
        <strong>Help us get to know you better.</strong>
        <form><div className="block"><label>Your Full Name</label><br/>
        <input  type="text"></input></div>
        <div className="block">
        <label>Your Birthday</label><br/>
        <input type="date"></input></div>
        <div className="block">
        <label>Your Sport of Choice</label><br/>
        <input type="text"></input></div>
        <div className="block">
        <label>How good you are at it?</label><br/>
        <input type="range" id="skill" name="skill-rate" list="rate" />
        <datalist id="rate">
        <option value="0"></option>
        <option value="20"></option>
        <option value="40"></option>
        <option value="60"></option>
        <option value="80"></option>
        <option value="100"></option>
        </datalist></div>
        <div className="block">
        <label>Your preffered activity</label><br/>
        <input type="Checkbox" ></input><label>Competitions</label><br/>
        <input type="Checkbox" ></input><label>Seminars</label><br/>
        <input type="Checkbox" ></input><label>Training Sessions</label><br/>
        <input type="Checkbox" ></input><label>Career Guidance</label><br/>
        <input type="Checkbox" ></input><label>Social Events</label><br/>
        </div>
        <div className="block">
            <h1 id="status">
            {currLocation.city}</h1>
            <button type="button" onClick={()=>{sethide('show')}} className="location" style={{"backgroundColor":"#0075FF","fontSize":"20px","fontWeight":"bolder"}}>Get My Location</button> </div>
       <button type="submit">Submit</button>
        </form>
        <button id="skip"><a href="#">Skip</a></button>
        </div>
        {/* eslint-disable-next-line react/no-unknown-property*/}
        <style jsx>{`
        #status{
            display:${hide==='show'?"block ":"none "}
        }`}</style>
      </div>
    )
}
export default Survey;