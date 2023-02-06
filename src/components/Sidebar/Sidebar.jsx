
import './Sidebar.css'
import ChatIcon from '@mui/icons-material/Chat';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import image from "../../Assets/images/image.jpg";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import WorkIcon from '@mui/icons-material/Work';
import InsertInvitationIcon from '@mui/icons-material/InsertInvitation';
import SchoolIcon from '@mui/icons-material/School';


function Sidebar()
{
    return(
        <div className="sidebar flex-[2] p-10 z-10">
        <ul>
            <li className="pb-4">
                <RssFeedIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Feed</a>
            </li>
            <li className="pb-4">
                <ChatIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Chats</a>
            </li>
            <li className="pb-4">
                <PlayCircleFilledIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Videos</a>
            </li>
            <li className="pb-4">
                <GroupsIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Friends</a>
            </li>
            <li className="pb-4">
                <BookmarkIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Bookmarks</a>
            </li>
            <li className="pb-4">
                <HelpOutlineIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Questions</a>
            </li>
            <li className="pb-4">
                <WorkIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Jobs</a>
            </li>
            <li className="pb-4">
                <InsertInvitationIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Events</a>
            </li>
            <li className="pb-4">
                <SchoolIcon className="mr-3"/> <a href="#" className="font-semibold text-xl">Courses</a>
            </li>
        </ul>
        {/* button show more  */}
        <button className='bg-gray-200 rounded py-3 px-10 mt-5'>
            <a href="#">Show More</a>
        </button>

        {/* hr  */}
        <hr className="w-[100%]  my-10" />
        
        {/* Friends  */}
        <div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
            <div className="flex gap-7 items-center mb-5"> 
                <img src={image} className="w-[50px] h-[50px] rounded-[50%] "/>
                <div>Sanae ouhmou</div>
            </div>
        </div>
        </div>
        
    )
}
export default Sidebar;