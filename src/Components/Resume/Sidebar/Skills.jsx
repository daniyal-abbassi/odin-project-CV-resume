export default function Skills({ skills, deleteSkill, editSkill }) {
  return (
    <>
      <div className="skills-main-text">
        <h1>Skills</h1>
      </div>
      <hr />
      <div className="skills-list">
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
