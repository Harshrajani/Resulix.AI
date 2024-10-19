/* eslint-disable react/prop-types */

const ProfessionalExperiencePreview = ({ resumeInfo }) => {
	return (
		<div className="my-6">
			<h2
				className="text-center font-bold text-sm mb-2 "
				style={{
					color: resumeInfo?.themeColor,
				}}
			>
				Professional Experience
			</h2>
			<hr
				style={{
					borderColor: resumeInfo?.themeColor,
				}}
			/>
			{resumeInfo?.experience.map((exp, index) => (
				<div key={index} className="my-4">
					<h2 className="text-base font-bold"  style={{
                        color:resumeInfo?.themeColor
                    }}>{exp?.title}</h2>
                    <h2 className="text-sm flex justify-between font-bold">{exp?.companyName},
                        {exp?.city},
                        {exp?.state}
                    <span>{exp?.startDate} to {exp?.currentlyWorking?"Present":exp.endDate}</span>
                    </h2>
                    {/* <p className="text-xs my-2"> {exp.workSummary} </p> */}

					<div className="text-sm pl-5" dangerouslySetInnerHTML={{__html:exp?.workSummary}} >
						
					</div>
				</div>
			))}
		</div>
	);
};

export default ProfessionalExperiencePreview;
