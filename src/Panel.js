import React from "react"
import './Panel.scss'
import './Survey.scss'
import Survey from "./Survey"
import user from './user.png'

const Panel=()=>{
return(
    <div className="Panel">
       
        <div id="log-out"><button onClick={()=>{<Survey/>}}>Edit Profile</button><button>Log Out</button></div>
        <div className="user">
            <div id="block1">
            <img src={user}/>
            <div><p>John Doe</p>
            <p>Johnemail@mail.com</p></div>
            </div>
            <div id="block2"><p>Favourite Sport:</p>
            <div></div>
            <p>Preferred activities:</p></div>
        </div>
        <div className="nearby">
            <strong>Friends near you in &lsquo;Your location&rsquo;.</strong>
            <div id="list">
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
                <div className="person">
                    <img src={user} /> <div><p>John Doe</p>
                    <p>Sports of Interest:</p></div>
                </div>
            </div>
        </div>
    </div>
)
}
export default Panel