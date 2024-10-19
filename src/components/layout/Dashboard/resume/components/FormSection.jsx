/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/Button";
import PersonalDetail from "./forms/PersonalDetail";
import { ArrowLeft, ArrowRight, Home, LayoutGrid } from "lucide-react";
import { useState } from "react";
import Summary from "./forms/Summary";
import Experience from "./forms/Experience";
import Education from "./forms/Education";
import Skills from "./forms/Skills";
import { Link, Navigate, useParams } from "react-router-dom";
import ThemeColor from "./ThemeColor";

const FormSection = () => {

    const {resumeId} =useParams();
    const [activeFormIndex, setActiveFormIndex] = useState(1);

	return (
		<div>
            <div className="flex justify-between items-center">

            <div className="flex gap-5">
                <Link to={"/dashboard/"}>
                <Button><Home/></Button>
                </Link>

            <ThemeColor/>
            
            </div>
            <div className="flex gap-2">
                {activeFormIndex>1&& <Button 
                onClick={()=>setActiveFormIndex(activeFormIndex-1)}><ArrowLeft/></Button>}
                <Button className="flex gap-2"
                 onClick={()=>setActiveFormIndex(activeFormIndex+1)} 
                 >Next <ArrowRight/></Button>
                
            </div>
            </div>
			
			{/* Personal Details */}
           {activeFormIndex==1? <PersonalDetail  />
           :activeFormIndex==2? <Summary />
           :activeFormIndex==3? <Experience />
           :activeFormIndex==4? <Education/>
           :activeFormIndex==5? <Skills/>
           :activeFormIndex==6? <Navigate to={'/my-resume/'+resumeId+'/view'}/>

           : null} 

			{/* Summary */}


			{/* Work Experience */}


            {/* Education */}


            {/* Skills */}


		</div>
	);
};

export default FormSection;
