import Online from "../online/Online";
import "./rightbar.css";
import { Users } from "../../dummyData";


export default function Rightbar({ profile }) {

  const HomeRightbar = () => {
    return (
      <>
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
    </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        <h4 className="rightbarTitle"> User Infomation</h4>
        <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City</span>
          <span className="rightbarInfoValue">Bhopal</span>
          </div>
        </div>
        <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From</span>
          <span className="rightbarInfoValue">Nasrullagang</span>
          </div>
        </div>
        <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Relationship</span>
          <span className="rightbarInfoValue">Single</span>
          </div>
        </div>

        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/1.jpg" alt="" />
          <span className="rightbarFollowingName">Rahul</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/3.jpg" alt="" />
          <span className="rightbarFollowingName">Sanjay</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/3.jpg" alt="" />
          <span className="rightbarFollowingName">Pawan</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/4.jpg" alt="" />
          <span className="rightbarFollowingName">Mohit</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/1.jpg" alt="" />
          <span className="rightbarFollowingName">Deepak</span>
        </div>
        <div className="rightbarFollowing">
          <img className="rightbarFollowingImg" src="/assets/person/1.jpg" alt="" />
          <span className="rightbarFollowingName">Ashish</span>
        </div>

        </div>

      
      </>
    )
  }
  return (
  
   <div className="rightbar">
      <div className="rightbarWrapper">

       {profile ? <ProfileRightbar /> : <HomeRightbar />}
       
      </div>
    </div>

  )
}
