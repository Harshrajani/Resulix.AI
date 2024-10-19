import { useUser } from "@clerk/clerk-react";
import AddResume from "./components/AddResume";
import GlobalApi from "./../../../../service/GlobalApi";
import { useEffect,useState } from "react";
import ResumeCardItem from "./components/ResumeCardItem";
import { LoaderCircle } from "lucide-react";




const Dashboard = () => {
  const {user}=useUser();
  const [resumeList, setResumeList] = useState([]);
  const [loading,setLoading] = useState(false);

  useEffect(() => {
    user&&GetResumeLists();
  }, [user])
  

  const GetResumeLists=async()=>{
    setLoading(true)
    await GlobalApi.GetUserResumes(user?.primaryEmailAddress.emailAddress).then(res=>{
      setResumeList(res.data.data);
      
      console.log(resumeList);
    })
    setLoading(false)
  }

	return (
    

			<div className="p-10 md:px-20 lg:px-32">
				<h2 className="font-bold text-3xl">My Resume</h2>
				<p>Start Creating Ai Resume for your Job Role</p>
        <div className="w-screen grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-20">
          <AddResume />

          {loading?<div className="flex justify-center items-center gap-4"><LoaderCircle className="animate-spin"/> Loading </div>:<div>{resumeList.length>0&&resumeList.map((resume,index)=>(
           <ResumeCardItem resume={resume} key={index} refreshData={GetResumeLists}/>
          ))}</div>}
          
        </div>
			</div>
        
    
    
	);
};

export default Dashboard;
