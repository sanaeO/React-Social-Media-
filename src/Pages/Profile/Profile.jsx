
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Feed from '../../components/Feed/Feed';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import image from "../../Assets/images/image.jpg";
import background from "../../Assets/images/background.jpg"

function Profile()
{
    return(
        <>
        <Navbar/>
        <div class="flex">
        <div className="flex-[3]"><Sidebar/></div>
    <div className="flex-[9]">
        {/* profie image  */}
                {/* Profile  */}
                <div>
                <div className="relative mb-[10px]">
            <img src={background} alt="this is back of profile" className='w-[100%] h-[400px] object-fill'/>

            <img src={image} alt="this is back of profile" className="w-[300px] h-[300px] rounded-[50%] absolute p-2 bg-white -bottom-[100px] z-10 left-[100px] object-cover shadow-xl"/> 
             
                 </div>
                 <div className="info mt-[130px] ml-32">
                    <h3 className="text-3xl font-bold">Sanae Ouhmou</h3>
                    <p className="text-opacity-70 text-gray-700 font-mono">Everything you learn is yours</p>
                 </div>
                 </div>
        {/* bottom */}
        <div class="flex -mt-[60px]">
        <Feed/>
        <Rightbar profile/>
        </div>



    </div>
    
    </div>
     </>

    );
}
export default Profile;