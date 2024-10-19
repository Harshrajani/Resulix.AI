/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { Input } from "@/components/ui/input";
import { ResumeInfoContext } from "@/context/ResumeinfoContext";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/ui/Button";
import { useParams } from "react-router-dom";
import GlobalApi from "./../../../../../../../service/GlobalApi";
import { LoaderCircle } from "lucide-react";
import { toast } from "sonner";

const PersonalDetail = ({enableNext}) => {
	const params= useParams();
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [formData,setFormData] = useState()
	const [loading,setLoading] = useState(false);

	useEffect(() => {
	  console.log(params);
	
	}, [])
	


	const handleInputChange = (e) => {
  
    const {name, value} = e.target;
	
	setFormData({
		...formData,
		[name]:value
	})

    setResumeInfo({
      ...resumeInfo,
      [name]:value
    })


  };

  const onSave = (e)=>{
    e.preventDefault();
	setLoading(true);
	const data={
		data:formData
	}
	GlobalApi.UpdateResumeDetail(params?.resumeId,data).then((res)=>{
		console.log(res);
		
		setLoading(false);
		toast("Details Updated")
	},(err)=>{
		setLoading(false);
	})
  };

	return (
		
<div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 m-10">
			<h2 className="font-bold text-lg">Personal Details</h2>
			<p>Getting Started With Basic Information</p>

			<form onSubmit={onSave} >
				<div className="grid grid-cols-2 mt-5 gap-3">
					<div>
						<label className="text-sm"> First Name</label>
						<Input onChange={handleInputChange} name="firstName"
						defaultValue={resumeInfo?.firstName} />
					</div>
					<div>
						<label className="text-sm"> Last Name</label>
						<Input onChange={handleInputChange} name="lastName"
						defaultValue={resumeInfo?.lastName} />
					</div>
					<div className="col-span-2">
						<label className="text-sm"> Job Title</label>
						<Input onChange={handleInputChange} name="jobTitle"
						defaultValue={resumeInfo?.jobTitle} />
					</div>
					<div className="col-span-2">
						<label className="text-sm">Address</label>
						<Input
							name="address"
							required
							defaultValue={resumeInfo?.address}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label className="text-sm">Phone</label>
						<Input
							name="phone"
							required
							defaultValue={resumeInfo?.phone}
							onChange={handleInputChange}
						/>
					</div>
					<div>
						<label className="text-sm">Email</label>
						<Input
							name="email"
							required
							defaultValue={resumeInfo?.email}
							onChange={handleInputChange}
						/>
					</div>
					
				</div>
				<div className="mt-3 flex justify-end">
					<Button type="submit" disabled={loading}>{loading?<LoaderCircle className="animate-spin"/>:'Save'}</Button>
				</div>
			</form>
		</div>
		
		
	);
};

export default PersonalDetail;
