import photo from '../../../assets/lain.png'
export default function AboutMe({ phon, email, location, aboutMe }) {
  return (
    <>
        <div className="about-me-img">
            <img src={photo} alt="" />
        </div>
        <div className="about-me-main-title">
            <h1>About Me</h1>
        </div>
        <hr />
        <div className="about-me-text">
            <p>{aboutMe}</p>
        </div>
        <div className="about-me-phone">
            {phon}
        </div>
        <div className="about-me-mail">
           {email}
        </div>
        <div className="about-me-location">
            {location}
        </div>
    </>
  )
}
