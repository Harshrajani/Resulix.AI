/* eslint-disable react/prop-types */

const PersonalDetailPreview = ({resumeInfo}) => {
  return (
    <div >
      <h2 className="font-bold text-3xl text-center"
      style={{
        color:resumeInfo?.themeColor
      }}>{resumeInfo?.firstName} {resumeInfo?.lastName}</h2>
      <h2 className="text-center text-base font-medium">
        {resumeInfo?.jobTitle}
      </h2>
      
      <div className="flex justify-evenly flex-wrap gap-x-3.5 text-center">
      <h2 className="font-normal text-xs " style={{
        color:resumeInfo?.themeColor
      }}>{resumeInfo?.address}</h2>
        <h2 className="font-normal text-xs" style={{
          color:resumeInfo?.themeColor
        }}>{resumeInfo?.phone}</h2>
        <h2 className="font-normal text-xs" style={{
          color:resumeInfo?.themeColor
        }}>{resumeInfo?.email}</h2>
        <h2 className="font-normal text-xs" style={{
          color:resumeInfo?.themeColor
        }}>{resumeInfo?.linkedIn}</h2>
        
      </div>
      <hr className="border-[1.5px] my-2 " style={{
        borderColor:resumeInfo?.themeColor
      }}/>
    </div>
  )
}

export default PersonalDetailPreview
