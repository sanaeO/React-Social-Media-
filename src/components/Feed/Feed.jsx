import './Feed.css' 
import image from "../../Assets/images/image.jpg"
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import Post from '../Post/Post';
import { Posts } from "../../dummyData"
import {users } from "../../dummyData"
function Feed()
{
    return(
        <div className='flex-[7] p-10 mt-[90px]'>
        {/* what's in ur mind  */}
        <div className="card-mind rounded-lg p-4">
            <div className="flex gap-5">
                <img src={image} alt="profile's picture" className="w-[60px] h-[60px] rounded-[50%]"/>
                <input input type="text" placeholder="Sanae , what's in your mind ?" className="w-[100%] px-5 input-mind" />
            </div>
            <hr className="my-5"/>
            <div class="card-bottom flex justify-between">
               <div className="flex gap-7">
           <div><PermMediaIcon className="text-amber-500"/> Photo or video</div> 
           <div> <LabelIcon className="text-blue-700"/> Tag</div> 
            <div><LocationOnIcon className="text-emerald-500"/> Location</div> 
            <div>  <EmojiEmotionsIcon className="text-amber-300"/> Feelings</div> 
               </div>
               <div><a href="#" className="bg-green-500 px-7 py-2 text-white font-semibold rounded-lg">Share</a></div>
            </div>
        </div>
         {/* Posts  */}
     
        {Posts.map((post) => (
            <Post key={post.id}  props ={post} />
        ))}

        </div>
      
    )
}
export default Feed;