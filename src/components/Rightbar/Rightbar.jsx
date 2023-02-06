import './Rightbar.css'
import giftbox from "../../Assets/images/giftbox.png"
import birthday from "../../Assets/images/birthday.jpg"
import image from "../../Assets/images/image.jpg";

function Rightbar({profile})
{
    const RightbarHome= () => {
    return(
    <>
            {/* giftbox */}
            <div>
            <div className="flex gap-3">
                <img src={giftbox} alt='gift box' className="w-[60px] h-[60px]"/>
                <p className="text-gray">Lorem Ipsum and <strong className="text-black">3 others friends have a birthday today</strong></p>
            </div>
            <img src={birthday} className="w-[100%] h-[250px] rounded object-fill mt-5"/>
            </div>

            {/* Online Friends  */}
            <div className='mt-10'>
            <h2 className="font-bold text-xl pb-5">Online Friends</h2>
            <ul>
                <li className="flex gap-5 items-center mt-4">
                    <div className="relative">
                        <img src={image} alt="friend who is online" className='w-[60px] h-[60px] rounded-[50%] relative'/>
                        <span className="bg-green-500 w-[15px] h-[15px] rounded-[50%] block absolute top-[2px] left-[44px]"></span>
   
                    </div>
                    <div className="font-semibold">Hajar Ouhmou</div>
                </li>
                <li className="flex gap-5 items-center mt-4">
                    <div className="relative">
                        <img src={image} alt="friend who is online" className='w-[60px] h-[60px] rounded-[50%] relative'/>
                        <span className="bg-green-500 w-[15px] h-[15px] rounded-[50%] block absolute top-[2px] left-[44px]"></span>
   
                    </div>
                    <div className="font-semibold">Hajar Ouhmou</div>
                </li>
                <li className="flex gap-5 items-center mt-4">
                    <div className="relative">
                        <img src={image} alt="friend who is online" className='w-[60px] h-[60px] rounded-[50%] relative'/>
                        <span className="bg-green-500 w-[15px] h-[15px] rounded-[50%] block absolute top-[2px] left-[44px]"></span>
   
                    </div>
                    <div className="font-semibold">Hajar Ouhmou</div>
                </li>
                <li className="flex gap-5 items-center mt-4">
                    <div className="relative">
                        <img src={image} alt="friend who is online" className='w-[60px] h-[60px] rounded-[50%] relative'/>
                        <span className="bg-green-500 w-[15px] h-[15px] rounded-[50%] block absolute top-[2px] left-[44px]"></span>
   
                    </div>
                    <div className="font-semibold">Hajar Ouhmou</div>
                </li>
            </ul>
            </div>
            
    </>
    )}
    const RightbarProfile = () => {
        return(
            <>
            <div className="">
             <h2 className="font-bold font-mono text-2xl mb-2">User Informations </h2>
             <p><span className="text-lg text-blue-600 font-bold">City :</span> Brussels</p>
             <p><span className="text-lg text-blue-600 font-bold">From :</span> Belgium</p>
             <p><span className="text-lg text-blue-600 font-bold">Relationship :</span> Single</p>
            
            </div>
            <hr className="my-10"/>
           <div>
           <h2 className="font-bold font-mono text-2xl mb-5">User Friends </h2>
           <div className="flex flex-wrap gap-5">
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            <div>
                <img src={image} className="w-[80px] h-[80px] rounded-[50%] shadow-lg p-1 bg-green-400 object-cover" />
                <p className="text-center mt-2 font-bold">Sanae <br/>Ouhmou</p>
            </div>
            </div>
           </div>
            </>
        )
    }
    return(
        <div className="rightbar flex-[3] shadow-lg p-5 mt-[90px]"  >

           {profile ? <RightbarProfile/> : <RightbarHome/>}

        </div>
    )
}
export default Rightbar;