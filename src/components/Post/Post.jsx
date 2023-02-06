
import './Post.css'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import SendIcon from '@mui/icons-material/Send';
import image from "../../Assets/images/image.jpg"
import {Users } from "../../dummyData"
// {} json data 
import { useState } from 'react'

function Post({props}) {

        const [ like , setLike ] = useState(props.like)
        const [isLiked , setIsLiked  ] = useState(false)
        const likeHandler = () => {
            setLike(isLiked ? like-1 :like+1)
            setIsLiked(!isLiked)
        }

    return(
        <div className="card-mind p-4 rounded mt-5">
        <div className="flex justify-between">
            <div className="flex gap-3 items-center">
             <img src={image} className="w-[50px] h-[50px] rounded-[50%]" />
             {/* take thefirst one his userid = userId of post , nd i want username  */}
            <div className="font-semibold"> {Users.filter((user)=>user.id === props.userId)[0].username} </div> 
            <div className="text-gray-400 text-xs">{props.date}</div>  
            </div>
            <div>
            <MoreVertIcon/>
            </div>
            
        </div>
        <p className="mt-5">{props?.desc}</p>
        <img src={props.photo} alt="post-image" className="w-[100%] rounded  image-post mt-5 object-fill"/>
        
        <div className="card-bottom mt-5">

            <div className="flex gap-4">

         <div className="cursor-pointer">

            <FavoriteBorderIcon onClick={likeHandler} className={(isLiked) ? "text-red-600" : "text-black"} />
            
            <span className="text-gray-700">{like}</span></div>
        <div><ChatBubbleOutlineIcon/><span className="text-gray-700">{props.comment}</span></div>
        <div><SendIcon/></div>
            </div>
        </div>

        </div>

    );
}
export default Post;