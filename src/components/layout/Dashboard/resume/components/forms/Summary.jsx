/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Button } from "@/components/ui/Button";
import { Textarea } from "@/components/ui/textarea";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import { useContext, useEffect, useState } from "react";
import GlobalApi from "./../../../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";
import { Brain } from "lucide-react";
import { AIChatSession } from "./../../../../../../../service/AIModal";


const prompt="Job Title: {jobTitle} , Depends on job title give me list of  summery for 3 experience level, Mid Level and Freasher level in 3 -4 lines in array format, With summery and experience_level Field in JSON Format";

const Summary = ({enableNext}) => {
    const params =useParams();
    const {resumeInfo,setResumeInfo} =useContext(ResumeInfoContext);
    const [summary, setSummary] = useState();
    const [loading,setLoading] = useState(false);
    const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState();


    useEffect(()=>{
        summary&&setResumeInfo({
            ...resumeInfo,
            summary:summary
        })
    },[summary])

    const GenerateSummaryFromAI = async ()=>{
        setLoading(true);
        const PROMPT = prompt.replace('{jobTitle}',resumeInfo?.jobTitle)
        console.log(PROMPT);
        
        const result = await AIChatSession.sendMessage(PROMPT);
        console.log(JSON.parse(result.response.text()));
        setAiGeneratedSummaryList(JSON.parse(result.response.text()));
        setLoading(false);

    }

    const onSave=(e)=>{
        e.preventDefault();
        setLoading(true);
	const data={
		data:{
            summary:summary
        }
	}
	GlobalApi.UpdateResumeDetail(params?.resumeId,data).then((res)=>{
		console.log(res);
		enableNext(true);
		setLoading(false);
		toast("Summary Updated Succesfully")
	},(err)=>{
        console.log(err)
		setLoading(false);
	})
    }


	return (
		<div>
			<div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-10">
				<h2 className="font-bold text-lg">Summary</h2>
				<p>Add Summary for your resume</p>

                <form className="mt-7" onSubmit={onSave}>
                    <div className="flex justify-between items-end">
                        <label >Add Summary</label>
                        <Button variant="outline" type="button" className="border-primary text-primary flex gap-2"
                        onClick={()=>GenerateSummaryFromAI()}> <Brain className="h-4 w-4" /> Generate With AI</Button>
                    </div>
                    <Textarea 
                    className="mt-5"
                    required 
                    onChange={(e)=>setSummary(e.target.value)}
                    value={summary}
                    defaultValue={summary?summary:resumeInfo?.summary}
                    />

                    <div className="mt-4 flex justify-end">
                    <Button type="submit" disabled={loading}>{loading?<LoaderCircle className="animate-spin"/>:'Save'}</Button>
                    </div>
                </form>
			</div>

            {aiGeneratedSummaryList&&<div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-10">
                <h2 className="font-bold text-lg">AI Generated Summary</h2>
                <p>Choose from the below generated summary</p>
                <div className="mt-5">
                    {aiGeneratedSummaryList.map((item,index)=>(
                        <div key={index} className="p-5 border border-gray-200 rounded-lg my-4 cursor-pointer shadow-lg"
                        onClick={()=>setSummary(item?.summary)} >
                           <h2 className="font-bold my-1 text-primary">Level: {item?.experience_level}</h2>
                           <p>{item?.summary}</p>
                        </div>
                    ))}
                </div>
            </div>
            }   


		</div>
	);
};

export default Summary;
