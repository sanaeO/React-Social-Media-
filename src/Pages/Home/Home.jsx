
import Sidebar from '../../components/Sidebar/Sidebar';
import Rightbar from '../../components/Rightbar/Rightbar';
import Feed from '../../components/Feed/Feed';
import './Home.css';
import Navbar from '../../components/Navbar/Navbar';

function Home()
{
    return(
        <>
        <Navbar/>
        <div className="flex" >
        <Sidebar/>
        <Feed/>
        <Rightbar/>
        </div>
     </>

    );
}
export default Home;
