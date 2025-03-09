import { useState } from "react";

export default function GeneralInfo({
  handleChangeFirstName,
  handleChangeLastName,
  handleChangeCarrier,
  handleChangePhon,
  hadnleChangeEmail,
  handleChangeLocation,
  handleChangeAbout,
  addSkills,
  newSkill,
  setNewSkill,
  deleteSkill,
  editSkill,
  skills,
}) {
  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    if (name === "first-name") {
      handleChangeFirstName(value);
    } else if (name === "last-name") {
      handleChangeLastName(value);
    } else if (name === "carrier-name") {
      handleChangeCarrier(value);
    } else if (name === "phone") {
      handleChangePhon(value);
    } else if (name === "email") {
      hadnleChangeEmail(value);
    } else if (name === "location") {
      handleChangeLocation(value);
    } else if (name === "about") {
      handleChangeAbout(value);
    }
  };

  const [editingIndex, setEditingIndex] = useState(null);
  const [editedSkill, setEditedSkill] = useState("");

  const handleSaveEdit = (index) => {
    if (editedSkill.trim() !== "") {
      editSkill(index, editedSkill);
      setEditingIndex(null);
      setEditedSkill("");
    }
  };

  return (
    <>
      <div className="general-infromation">
        <fieldset>
          <legend>general Informations</legend>
          <div className="row-one">
            <label htmlFor="first-name">First Name </label>
            <input
              onChange={handleChangeInput}
              type="text"
              id="first-name"
              name="first-name"
            />

            <label htmlFor="last-name">Last Name </label>
            <input
              onChange={handleChangeInput}
              type="text"
              id="last-name"
              name="last-name"
            />
          </div>
          <div className="row-two">
            <label htmlFor="carrier-name">Carrier </label>
            <input
              onChange={handleChangeInput}
              type="text"
              id="carrier-name"
              name="carrier-name"
            />
          </div>

          <div className="row">
            <label htmlFor="phone">Phone </label>
            <input
              onChange={handleChangeInput}
              type="tel"
              id="phone"
              name="phone"
            />

            <label htmlFor="email">Email </label>
            <input
              onChange={handleChangeInput}
              type="email"
              id="email"
              name="email"
            />

            <label htmlFor="location">Location </label>
            <input
              onChange={handleChangeInput}
              type="text"
              id="location"
              name="location"
            />
          </div>
          <div className="row">
            <label htmlFor="about">About Yourself </label>
            <textarea
              onChange={handleChangeInput}
              id="about"
              name="about"
              rows="4"
              cols="50"
            />
          </div>
          <details className="add-skills">
            <summary>Add Skill</summary>
            <input
              type="text"
              placeholder="Enter Skill"
              name="skill"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
            />
            <button type="button" onClick={addSkills}>
              Add Skill
            </button>
            <div className="skill-list">
              {skills.map((skill, index) => (
                <div key={index}>
                  {editingIndex === index ? (
                    <>
                      <input
                        type="text"
                        value={editedSkill}
                        onChange={(e) => setEditedSkill(e.target.value)}
                      />
                      <button onClick={() => handleSaveEdit(index)}>
                        Save
                      </button>
                    </>
                  ) : (
                    <>
                      {skill.name}
                      <button onClick={() => {
                        setEditingIndex(index);
                        setEditedSkill(skill.name)
                        }}>
                        Edit
                      </button>
                      <button onClick={() => deleteSkill(index)}>Delete</button>
                    </>
                  )}
                </div>
              ))}
            </div>
          </details>
        </fieldset>
      </div>
    </>
  );
}
