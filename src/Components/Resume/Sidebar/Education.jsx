export default function Education({
  // school,
  // degree,
  // schoolStartDate,
  // schoolEndDate,
  schools
}) {
  return (
    <>
      <div className="education-main-title">
        <h1>Education</h1>
      </div>
      <hr />
      {schools.map((school, index)=>(
        <div key={index} className="education-shcool">
        <h3>{school.school}</h3>
        <h4>{school.degree}</h4>
        <span>Start:{" "} {school.startDate}</span> - 
        <span>End: {" "} {school.endDate}</span>
      </div>
      ))}
      
    </>
  );
}
