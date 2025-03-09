export default function Experience({
  
  works
}) {
  return (
    <>
      {
        works.map((work, index) => (
      
          <article key={index} className="job-section">
            <h1 className="role">{work.position}</h1>
            <p className="job-year">
              {" "}
              {work.startDate} - {work.endDate}
            </p>
            <h2 className="company-year">{work.name}</h2>
            <p className="job-detail">{work.details}</p>
          </article>
          
        
      ))}
    </>
  );
}
