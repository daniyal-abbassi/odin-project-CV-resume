export default function References({
  references}) {
  return (
    <>
    {references.map((reference,index)=>(
      <div key={index} className="reference">
        <h1 className="ref-name">{reference.name}</h1>
        <p className="ref-campany">
         {reference.companyName} / <span className="ref-position">{reference.position}</span>
        </p>
        <p className="ref-phone">
          Phone:<span className="ref-phon-span">{reference.phone}</span>
        </p>
        <p className="ref-email">
          Email :
          <span className="ref-email-span">{reference.mail}</span>
        </p>
      </div>
    ))}
      
     
    </>
  );
}
