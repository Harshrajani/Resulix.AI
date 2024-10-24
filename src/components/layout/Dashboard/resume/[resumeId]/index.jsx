/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import FormSection from "../components/FormSection";
import ResumePreview from "../components/ResumePreview";
import dummy from "@/data/dummy";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import GlobalApi from "../../../../../../service/GlobalApi";

const EditResume = () => {

    const {resumeId}= useParams();
    const [resumeInfo,setResumeInfo] = useState();
    useEffect(() => {
      
      GetResumeInfo();
    }, [])

    const GetResumeInfo = ()=>{
      GlobalApi.GetResumeById(resumeId).then(resp=>{
        console.log(resp.data.data);
        setResumeInfo(resp.data.data)
        
      })
    }

     
    

  return (
    <ResumeInfoContext.Provider value={{resumeInfo,setResumeInfo}}>

    <div className="grid md:grid-cols-2 sm:grid-cold-1 p-10 gap-10">
      {/* Form Section */}
      <FormSection/>
      {/* Preview Section */}
      <ResumePreview/>
    </div>
    </ResumeInfoContext.Provider>
  )
}

export default EditResume
