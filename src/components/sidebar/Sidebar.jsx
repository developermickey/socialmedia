import { Bookmark, CardTravel, Chat, EventAvailable, Group, PlayCircle, QuestionAnswerRounded, QuestionMarkOutlined, RssFeed, VerifiedUser,  } from "@mui/icons-material";
import { BadgeMark } from "@mui/material";
import "./sidebar.css";



export default function Sidebar() {
  return (
    <div className="sidebar">
           <div className="sidebarWrapper">
              <ul className="sidebarList">
                <li className="sidebarListItem">
                  <RssFeed className="sidebarIcon" />
                  <span className="sidebarListItemText">Feed</span>
                </li>
                <li className="sidebarListItem">
                  <Chat className="sidebarIcon" />
                  <span className="sidebarListItemText">Chats</span>
                </li>
                <li className="sidebarListItem">
                  <PlayCircle className="sidebarIcon" />
                  <span className="sidebarListItemText">Videos</span>
                </li>
                <li className="sidebarListItem">
                  <Group className="sidebarIcon" />
                  <span className="sidebarListItemText">Groups</span>
                </li>
                <li className="sidebarListItem">
                  <Bookmark className="sidebarIcon" />
                  <span className="sidebarListItemText">Bookmarks</span>
                </li>
                <li className="sidebarListItem">
                  <QuestionMarkOutlined className="sidebarIcon" />
                  <span className="sidebarListItemText">Questions</span>
                </li>
                <li className="sidebarListItem">
                  <CardTravel className="sidebarIcon" />
                  <span className="sidebarListItemText">Jobs</span>
                </li>
                <li className="sidebarListItem">
                  <EventAvailable className="sidebarIcon" />
                  <span className="sidebarListItemText">Event</span>
                </li>
                <li className="sidebarListItem">
                  <VerifiedUser className="sidebarIcon" />
                  <span className="sidebarListItemText">Course</span>
                </li>
              </ul>
              <button className="sidebarButton">
                Show More
              </button>
              <hr className="sidebarHr" />

              <ul className="sidebarFriendList">
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
                <li className="sidebarFriend">
                  <img src="/assets/person/1.jpg" alt="" className="sidebarFriendImg" />
                  <span className="sidebarFriendName">Mukesh Pathak</span>
                </li>
              </ul>

           </div>

      </div> 

  )
}
