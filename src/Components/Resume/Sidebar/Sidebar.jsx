import AboutMe from "./AboutMe";
import Education from "./Education";
import Skills from "./Skills";

const Sidebar = ({
  phon,
  email,
  location,
  aboutMe,
  schools,
  skills,
 deleteSkill,
 editSkill
}) => {
  return (
    <>
      <div className="side-bar">
        <section className="about-me">
          <AboutMe
            phon={phon}
            email={email}
            location={location}
            aboutMe={aboutMe}
          />
        </section>
        <section className="education">
          <Education
            schools={schools}
         
          />
        </section>
        <section className="skills">
          <Skills skills={skills}  deleteSkill={deleteSkill}
  editSkill={editSkill}/>
        </section>
      </div>
    </>
  );
};

export default Sidebar;
