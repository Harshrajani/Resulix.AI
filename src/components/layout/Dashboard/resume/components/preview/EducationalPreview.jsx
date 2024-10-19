/* eslint-disable react/prop-types */

const EducationalPreview = ({resumeInfo}) => {
  return (
    <div className="my-6">
    <h2
        className="text-center font-bold text-sm mb-2 "
        style={{
            color: resumeInfo?.themeColor,
        }}
    >
        Education
    </h2>
    <hr
        style={{
            borderColor: resumeInfo?.themeColor,
        }}
    />
    {resumeInfo?.education.map((edu, index) => (
        <div key={index} className="my-4">
            <h2 className="text-base font-bold" style={
                {
                    color: resumeInfo?.themeColor
                }}>{edu?.degree} in {edu?.major}</h2>
            <h2 className="text-sm font-bold flex justify-between" 
            >{edu?.universityName}
            <span>{edu?.startDate} to {edu?.endDate}</span>
            </h2>
            <p className="text-sm my-2"> {edu?.description} </p>
        </div>
    ))}
    </div>
  )
}

export default EducationalPreview
