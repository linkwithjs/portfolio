import { education } from "../../data/data";
import "./Education.css";
const Education = () => {
  return (
    <section id="education" className="section projects">
      <h2 className="section__title">Education 🛠</h2>
      <div className="education__grid">
        {education.map((educations) => (
          <div className="wrapper">
            <div className="one">{educations.college}</div>
            <div className="one">{educations.university}</div>
            <div className="one">{educations.faculty}</div>
            <div className="one">{educations.program}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
