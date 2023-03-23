import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";


export default function Rightbar() {
  return (
  
   <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/person/birthday.png" alt="" />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 Other Friends have a birthday today</b>
          </span>
        </div>
        <img className="rightbarAd" src="/assets/person/fbads.png" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
       
        </ul>
      </div>
    </div>

  )
}
