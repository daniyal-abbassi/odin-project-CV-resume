export default function EducationInfo({
  schools,
  handleChangeSchool,
  addSchool,
  handleDeleteSchool
}) {
  

  return (
    <>
      <div className="educational-information">
        <fieldset>
          <legend>Educational Informations</legend>
          {schools.map((school, index) => (
            <div key={index}>
              <div className="row">
                <label htmlFor={`school-${index}`}>School </label>
                <input
                  onChange={(e) =>
                    handleChangeSchool(index, "school", e.target.value)
                  }
                  type="text"
                  id={`school-${index}`}
                  name="school"
                  value={school.school}
                  required
                />
              </div>
              <div className="row-two" id="degree">
                <label htmlFor={`degree-${index}`}>Degree </label>
                <input
                  onChange={(e) =>
                    handleChangeSchool(index, "degree", e.target.value)
                  }
                  type="text"
                  id={`degree-${index}`}
                  name="degree"
                  value={school.degree}
                  required
                />
              </div>
              <div className="row-one">
                <label htmlFor={`start-date-${index}`}>Start Date </label>
                <input
                  onChange={(e) =>
                    handleChangeSchool(index, "startDate", e.target.value)
                  }
                  type="date"
                  id={`start-date-${index}`}
                  name="start-date"
                  value={school.startDate}
                  required
                />
                <label htmlFor={`end-date-${index}`}>End Date </label>
                <input
                  onChange={(e) =>
                    handleChangeSchool(index, "endDate", e.target.value)
                  }
                  type="date"
                  id="date"
                  name="end-date"
                />
              </div>
              <button className="delete-btn" type="button" onClick={()=>handleDeleteSchool(index)}>Delete School</button>
              <hr />
            </div>
          ))}
          <button className="add-btn" type="button" onClick={addSchool}>
            Add School
          </button>
        </fieldset>
      </div>
    </>
  );
}
