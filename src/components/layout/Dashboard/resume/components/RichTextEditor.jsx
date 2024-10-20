/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import { ResumeInfoContext } from "@/context/ResumeInfoContext";
import { Brain, LoaderCircle } from "lucide-react";
import { useContext, useState } from "react";
import {
	BtnBold,
	BtnBulletList,
	BtnItalic,
	BtnLink,
	BtnNumberedList,
	BtnStrikeThrough,
	BtnUnderline,
	Editor,
	EditorProvider,
	Separator,
	Toolbar,
} from "react-simple-wysiwyg";
import { AIChatSession } from "../../../../../../service/AIModal";
import { toast } from "sonner";
const PROMPT =
	"position titile: {positionTitle} , Depends on position title give me 2-3 unordered list items for my experience in resume (Please do not add experince level and No JSON array) , Give me result in HTML format only";
function RichTextEditor({ onRichTextEditorChange, index, defaultValue }) {
	const [value, setValue] = useState(defaultValue);
	const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
	const [loading, setLoading] = useState(false);
	const GenerateSummaryFromAI = async () => {
		if (!resumeInfo?.Experience[index]?.title) {
			toast("Please Add Position Title");
			return;
		}
		setLoading(true);
		const prompt = PROMPT.replace(
			"{positionTitle}",
			resumeInfo.Experience[index].title
		);

		const result = await AIChatSession.sendMessage(prompt);
		console.log(result.response.text());
		const res= result.response.text();
		setValue(res.replace('[','').replace(']','').replace("{position_title", "Civil Engineer" ,"experience_bullet_points", ""));
		setLoading(false);
	};

	return (
		<div>
			<div className="flex justify-between items-center my-2">
				<label className="text-base font-bold">Summary</label>
				<Button
					variant="outline"
					size="sm"
					onClick={GenerateSummaryFromAI}
					disabled={loading}
					className="flex gap-2 border-primary text-primary"
				>
					{loading ? (
						<LoaderCircle className="animate-spin" />
					) : (
						<>
							<Brain className="h-4 w-4" /> Generate from AI
						</>
					)}
				</Button>
			</div>
			<EditorProvider>
				<Editor
					value={value}
					onChange={(e) => {
						setValue(e.target.value);
						onRichTextEditorChange(e);
					}}
				>
					<Toolbar>
						<BtnBold />
						<BtnItalic />
						<BtnUnderline />
						<BtnStrikeThrough />
						<Separator />
						<BtnNumberedList />
						<BtnBulletList />
						<Separator />
						<BtnLink />
					</Toolbar>
					
				</Editor>
			</EditorProvider>
		</div>
	);
}

export default RichTextEditor;
