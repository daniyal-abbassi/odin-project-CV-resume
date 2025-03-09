import EducationInfo from "./EducationInfo";
import GeneralInfo from "./GeneralInfo";
import WorkInfo from "./WorkInfo";

const Details = ({
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeCarrier,
  handleChangePhon,
  hadnleChangeEmail,
  handleChangeLocation,
  handleChangeAbout,
  addWorkExperience,
  handleChangeWork,
  works,
  deleteWorkExperience,
 references,
 handleChangeReferences,
 addReferences,
 deleteReferences,
  schools,
  handleChangeSchool,
  addSchool,
  setSchools,
  handleDeleteSchool,
  skills,
  handleChangeSkills,
  addSkills,
  newSkill,
  setNewSkill,
  deleteSkill,
  editSkill
}) => {
  return (
    <>
      <form className="details">
        <GeneralInfo
          handleChangeFirstName={handleChangeFirstName}
          handleChangeLastName={handleChangeLastName}
          handleChangeCarrier={handleChangeCarrier}
          handleChangePhon={handleChangePhon}
          hadnleChangeEmail={hadnleChangeEmail}
          handleChangeLocation={handleChangeLocation}
          handleChangeAbout={handleChangeAbout}
          //slkills
          handleChangeSkills={handleChangeSkills}
          addSkills={addSkills}
          skills={skills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          deleteSkill={deleteSkill}
          editSkill={editSkill}
        />
        <EducationInfo
         
          schools={schools}
          handleChangeSchool={handleChangeSchool}
          addSchool={addSchool}
          setSchools={setSchools}
          handleDeleteSchool={handleDeleteSchool}
        />
        <WorkInfo
        //work experiments
          addWorkExperience={addWorkExperience}
          handleChangeWork={handleChangeWork}
          works={works}
          deleteWorkExperience={deleteWorkExperience}
          //references
          deleteReferences={deleteReferences}
          handleChangeReferences={handleChangeReferences}
          references={references}
          addReferences={addReferences}
        />
      </form>
    </>
  );
};

export default Details;
