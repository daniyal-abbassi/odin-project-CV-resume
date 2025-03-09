import { useState } from "react";
import "./App.css";
import Details from "./Components/Inputs/Details";
import Resume from "./Components/Resume/Resume";

function App() {
  //personal information
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [carrier, setCarrier] = useState("frontend developer");
  const [phon, setPhone] = useState("123-4567-8910");
  const [email, setEmail] = useState("example@gamil.com");
  const [location, setLocation] = useState("United States of America");
  const [aboutMe, setAboutMe] = useState(
    "this part contains some information about you as a whole and prespectives and mindviews you have and your goals and dreams"
  );

  // ADD MULTIPLE SCHOOLS STATE
  const [schools, setSchools] = useState([
    {
      school: "Example School of City",
      degree: "highSchool Degree",
      startDate: "01-01-2001",
      endDate: "12-12-2012",
    },
    
  ]);

  const handleChangeSchool = (index, field, value) => {
    const updatedSchools = [...schools];

    updatedSchools[index][field] = value;
    setSchools(updatedSchools);
  };
  const handleDeleteSchool = (index) => {
    if (schools.length === 1) return;
    const recentSchools = schools.filter((_, id) => id != index);
    setSchools(recentSchools);
  };
  const addSchool = () => {
    schools[schools.length - 1].school === ""
      ? null
      : setSchools([
          ...schools,
          {
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
          },
        ]);
  };
  //HADNLE MULTIPLE WORK
  const [works, setWroks] = useState([
    {
      name: "Tech Solutions Inc.",
      position: "Frontend Developer",
      startDate: "01-01-2020",
      endDate: "present",
      details: "Developed and maintained user-friendly web applications using React, Redux, and TypeScript.",
    }, 
  ]);

  const handleChangeWork = (index, field, value) => {
    const updatedWroks = [...works];
    updatedWroks[index][field] = value;
    setWroks(updatedWroks);
  };

  const addWorkExperience = () => {
    works[works.length - 1].name === ""
      ? null
      : setWroks([
          ...works,
          {
            name: "",
            position: "",
            startDate: "",
            endDate: "",
            details: "",
          },
        ]);
  };

  const deleteWorkExperience = (workIndex) => {
    if (works.length === 1) return;
    const recentWorks = works.filter((_, i) => i != workIndex);
    setWroks(recentWorks);
  };
  //REFERENCES

  const [references, setReferences] = useState([
    {
      name: "Jane Smith",
      companyName: "Tech Solutions Inc.",
      position: "CEO",
      phone: "123-456-7890",
      mail: "jane.smith@techs.com",
    },
  ]);

  const handleChangeReferences = (index, field, value) => {
    const updatedReferences = [...references];
    updatedReferences[index][field] = value;
    setReferences(updatedReferences);
  };
  const addReferences = () => {
    references[references.length - 1].name === ""
      ? null
      : setReferences([
          ...references,
          {
            name: "",
            companyName: "",
            position: "",
            phone: "",
            mail: "",
          },
        ]);
  };
  const deleteReferences = (referenceId) => {
    if (references.length === 1) return;
    const recentReferences = references.filter((_, i) => i != referenceId);
    setReferences(recentReferences);
  };

  //skills

  const [skills, setSkills] = useState([
    { name: "frontend developer" },
    { name: "backend developer" },
    
  ]);
  const [newSkill, setNewSkill] = useState("");

  const handleChangeSkills = (value) => {
    setNewSkill(value);
  };

  const addSkills = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, { name: newSkill }]);
      setNewSkill("");
    }
  };

  const deleteSkill = (index) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  const editSkill = (index, updatedSkill) => {
    const updatedSkills = [...skills];
    updatedSkills[index].name = updatedSkill;
    setSkills(updatedSkills);
  };

  //personal informations handlres
  const handleChangeAbout = (aboutMe) => {
    setAboutMe(aboutMe);
  };
  const handleChangeLocation = (location) => {
    setLocation(location);
  };
  const hadnleChangeEmail = (email) => {
    setEmail(email);
  };
  const handleChangePhon = (phon) => {
    setPhone(phon);
  };
  const handleChangeCarrier = (carrier) => {
    setCarrier(carrier);
  };
  const handleChangeFirstName = (fName) => {
    setFirstName(fName);
  };
  const handleChangeLastName = (lName) => {
    setLastName(lName);
  };

  return (
    <>
      <div className="wrapper">
        <Details
          // personal information
          handleChangeFirstName={handleChangeFirstName}
          handleChangeLastName={handleChangeLastName}
          handleChangeCarrier={handleChangeCarrier}
          handleChangePhon={handleChangePhon}
          hadnleChangeEmail={hadnleChangeEmail}
          handleChangeLocation={handleChangeLocation}
          handleChangeAbout={handleChangeAbout}
          // SCHOOLS
          schools={schools}
          handleChangeSchool={handleChangeSchool}
          addSchool={addSchool}
          setSchools={setSchools}
          handleDeleteSchool={handleDeleteSchool}
          //work information
          deleteWorkExperience={deleteWorkExperience}
          handleChangeWork={handleChangeWork}
          works={works}
          addWorkExperience={addWorkExperience}
          //skills
          handleChangeSkills={handleChangeSkills}
          addSkills={addSkills}
          skills={skills}
          newSkill={newSkill}
          setNewSkill={setNewSkill}
          deleteSkill={deleteSkill}
          editSkill={editSkill}
          //reference info
          deleteReferences={deleteReferences}
          handleChangeReferences={handleChangeReferences}
          references={references}
          addReferences={addReferences}
        />
        <Resume
          //personal information
          firstName={firstName}
          lastName={lastName}
          carrier={carrier}
          phon={phon}
          email={email}
          location={location}
          aboutMe={aboutMe}
          //skills
          skills={skills}
          deleteSkill={deleteSkill}
          editSkill={editSkill}
          //educational information
          schools={schools}
          //work information
          works={works}
          //reference info
          references={references}
        />
      </div>
    </>
  );
}

export default App;
