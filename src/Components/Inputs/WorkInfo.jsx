export default function WorkInfo({
  addWorkExperience,
  handleChangeWork,
  works,
  deleteWorkExperience,
  references,
  handleChangeReferences,
  addReferences,
  deleteReferences,
}) {
  return (
    <>
      <div className="experience-information">
        <fieldset>
          <legend>Work Informations</legend>
          {works.map((work, index) => (
            <div key={index}>
              <div className="row">
                <label htmlFor={`company-name-${index}`}>Company Name </label>
                <input
                  onChange={(e) =>
                    handleChangeWork(index, "name", e.target.value)
                  }
                  type="text"
                  id={`company-name-${index}`}
                  name="company-name"
                  required
                  value={work.name}
                />
              </div>
              <div className="position-row">
                <label htmlFor={`position-${index}`}>Position </label>
                <input
                  onChange={(e) =>
                    handleChangeWork(index, "position", e.target.value)
                  }
                  type="text"
                  id={`position-${index}`}
                  name="position"
                  value={work.position}
                  required
                />
              </div>

              <div className="date-row">
                <label htmlFor={`start-date-${index}`}>Start Date </label>
                <input
                  onChange={(e) =>
                    handleChangeWork(index, "startDate", e.target.value)
                  }
                  type="date"
                  id={`start-date-${index}`}
                  name="start-date"
                  value={work.startDate}
                />

                <label htmlFor={`end-date-${index}`}>End Date </label>
                <input
                  onChange={(e) =>
                    handleChangeWork(index, "endDate", e.target.value)
                  }
                  type="date"
                  id={`end-date-${index}`}
                  name="end-date"
                  value={work.endDate}
                />
              </div>

              <div className="detail-row">
                <label htmlFor={`job-details-${index}`}>Details </label>
                <textarea
                  onChange={(e) =>
                    handleChangeWork(index, "details", e.target.value)
                  }
                  cols="50"
                  rows="5"
                  id={`job-details-${index}`}
                  name="details"
                  value={work.details}
                ></textarea>
              </div>
              <button id="work-delete-btn" className="delete-btn" type="button" onClick={() => deleteWorkExperience(index)}>
                Delete Experience
              </button>
              <hr />
            </div>
          ))}
          <button className="add-btn"  type="button" onClick={addWorkExperience}>
            Add Work Experience
          </button>
          <details className="reference-information">
            <summary>REFERENCE INFORMATION</summary>
            {references.map((reference, index) => (
              <div className="ref-info">
                <label htmlFor={`ref-name-${index}`}>Reference Name </label>
                <input
                  onChange={(e)=>handleChangeReferences(index,"name",e.target.value)}
                  type="text"
                  id={`ref-name-${index}`}
                  name="ref-name"
                  value={reference.name}
                  required
                  style={{ "margin-top": "20px" }}
                />
                <div className="rof-company" style={{ "margin-top": "20px" }}>
                  <label htmlFor={`ref-company-name-${index}`}>
                    Reference Company Name{" "}
                  </label>
                  <input
                    onChange={(e)=>handleChangeReferences(index,"companyName",e.target.value)}
                    type="text"
                    id={`ref-company-name-${index}`}
                    name="ref-company-name"
                    value={reference.companyName}
                    required
                  />
                </div>
                <div
                  className="ref-contact-phone"
                  style={{ "margin-top": "20px" }}
                >
                  <label htmlFor={`ref-company-position-${index}`}>
                    Reference Position{" "}
                  </label>
                  <input
                    onChange={(e)=>handleChangeReferences(index,"position",e.target.value)}
                    id={`ref-company-position-${index}`}
                    type="text"
                    name="ref-company-position"
                    value={reference.position}
                  />
                </div>
                <div
                  className="ref-contact-mail"
                  style={{ "margin-top": "20px", "margin-bottom": "20px" }}
                >
                  <label htmlFor={`ref-phone-${index}`}>Reference Phone </label>
                  <input
                    onChange={(e)=>handleChangeReferences(index,"phone",e.target.value)}
                    type="phone"
                    name="ref-phone"
                    id={`ref-phone-${index}`}
                    value={reference.phone}
                  />
                </div>

                <label htmlFor={`ref-mail-${index}`}>Reference E-mail </label>
                <input
                  onChange={(e)=>handleChangeReferences(index,"mail",e.target.value)}
                  type="mail"
                  name="ref-mail"
                  id={`ref-mail-${index}`}
                  value={reference.mail}
                />
                <button className="delete-btn" id="ref-delete-btn" type="button" onClick={()=>deleteReferences(index)}>Delete Reference</button>
              <hr />
              </div>
            ))}
            <button className="add-btn" type="button" onClick={addReferences}>Add Reference</button>
          </details>
        </fieldset>
      </div>
    </>
  );
}
