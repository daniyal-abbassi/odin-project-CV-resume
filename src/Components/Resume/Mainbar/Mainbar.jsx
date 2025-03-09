import Experience from "./Experience";
import References from "./References";

export default function Mainbar({
  firstName,
  lastName,
  carrier,
  
  works,
  references
}) {
  return (
    <>
      <div className="main-bar">
        <section className="main-bar-title">
          <span className="first-name">{firstName}</span>
          <span className="last-name">{lastName}</span>
          <span className="carrier-name">{carrier}</span>
        </section>
        <div className="main-bar-details">
          <section className="experience">
            <h1>Experience</h1>
            <hr className="main-divider" />
            <Experience
           
              works={works}
            />
          </section>
          <section className="references">
            <h1>References</h1>
            <hr className="main-divider" />
            <References
              references={references}
            />
          </section>
        </div>
      </div>
    </>
  );
}
