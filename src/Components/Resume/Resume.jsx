import Mainbar from "./Mainbar/Mainbar";
import Sidebar from "./Sidebar/Sidebar";

const Resume = ({
  firstName,
  lastName,
  carrier,
  phon,
  email,
  location,
  aboutMe,
  deleteWorkExperience,
  works,
  references,
  schools,
  skills,
  deleteSkill,
  editSkill
}) => {
  return (
    <>
      <div className="container">
        <Sidebar
          phon={phon}
          email={email}
          location={location}
          aboutMe={aboutMe}
          schools={schools}
          deleteWorkExperience={deleteWorkExperience}
          skills={skills}
          deleteSkill={deleteSkill}
          editSkill={editSkill}
        />
        <Mainbar
        //personal information
          firstName={firstName}
          lastName={lastName}
          carrier={carrier}
          phon={phon}
          email={email}
          location={location}
          aboutMe={aboutMe}
          
          works={works}
          references={references}
        />
      </div>
    </>
  );
};

export default Resume;
