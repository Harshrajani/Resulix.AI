/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react"
import PersonalDetailPreview from "./preview/PersonalDetailPreview";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import SummaryPreview from "./preview/SummaryPreview";
import ProfessionalExperiencePreview from "./preview/ProfessionalExperiencePreview";
import EducationalPreview from "./preview/EducationalPreview";
import SkillsPreview from "./preview/SkillsPreview";
import GlobalApi from "../../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";


const ResumePreview = () => {

  const [loading,setLoading] = useState(false);
    const resumeId= useParams();

    const {resumeInfo,setResumeInfo} = useContext(ResumeInfoContext);

    useEffect(() => {
      
      GetResumeInfo();
    }, [])
    const GetResumeInfo = ()=>{
      setLoading(true)
      GlobalApi.GetResumeById(resumeId).then(resp=>{
       
        setResumeInfo(resp.data.data)
        
      })
      setLoading(false)
    }
    

  return (
    <div className="shadow-lg h-full p-10 border-t-[20px] "
    style={{
        borderColor:resumeInfo?.themeColor
    }}>
        {loading?<div className="flex justify-center items-center gap-4"><LoaderCircle className="animate-spin"/> Loading </div>:<div>
          {/* Personel Details  */}
        <PersonalDetailPreview resumeInfo={resumeInfo}/>
        {/* Summary */}
        <SummaryPreview resumeInfo={resumeInfo}/>
        {/* Work Experience */}
        <ProfessionalExperiencePreview resumeInfo={resumeInfo}/>
        {/* Education */}
        <EducationalPreview resumeInfo={resumeInfo} />
        {/* Skills */}
        <SkillsPreview resumeInfo={resumeInfo}/></div>}
    </div>
  )
}

export default ResumePreview
