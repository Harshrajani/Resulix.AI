/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Loader2, PlusSquare } from "lucide-react";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
	DialogClose
} from "@/components/ui/dialog";
import { Button } from "../../../ui/Button";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";
import GlobalApi from "../../../../../service/GlobalApi";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

const AddResume = () => {
	const [openDialog, setOpenDialog] = useState(false);
	const [resumeTitle, setResumeTitle] = useState();
	const { user } = useUser();
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const onCreate = async () => {
		setLoading(true);
		const uuid = uuidv4();
		const data = {
			data: {
				Title: resumeTitle,
				resume_id: uuid,
				userEmail: user?.primaryEmailAddress?.emailAddress,
				userName: user?.fullName,
			},
		};
		GlobalApi.CreateNewResume(data)
			.then((res) => {
				console.log(res.data.data.documentId);
				if (res) {
					setLoading(false);
					setOpenDialog(false);
					navigate("/dashboard/resume/" +res.data.data.documentId+ "/edit");
				}
			})
			.catch((err) => {
				console.log(err);
				setLoading(false);
				setOpenDialog(false);
			});
	};

	return (
		<div>
			<div
				className="h-[280px] p-14 py-24 border-black border-2  items-center flex justify-center bg-secondary rounded-lg
      hover:scale-105 transition-all ease-out  hover:shadow-md cursor-pointer"
				onClick={() => setOpenDialog(true)}
			>
				<PlusSquare />
			</div>
			<Dialog open={openDialog}>
				<DialogContent>
					<DialogHeader >
					
						<DialogTitle>Create a New Resume</DialogTitle>
						<DialogDescription>
							<p>Give Your Resume a Name.</p>
							<Input
								className="my-4"
								placeholder="Frontend Developer Resume"
								onChange={(e) => setResumeTitle(e.target.value)}
							/>

							<div className="flex justify-end gap-5">
								<Button variant="ghost" onClick={() => setOpenDialog(false)}>
									Cancel
								</Button>
								<Button disabled={!resumeTitle||loading} onClick={() => onCreate()}>
                                    {loading?<Loader2 className="animate-spin"/>:"Create"}
									
								</Button>
							</div>
						</DialogDescription>
					</DialogHeader>
				</DialogContent>
			</Dialog>
		</div>
	);
};

export default AddResume;
