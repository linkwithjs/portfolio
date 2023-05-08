import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { about } from "../../data/data";
import "./About.css";

const About = () => {
  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <>
          <h2 className="hey ">
            <span>
              Hey!<span className="css-1c50u9e"></span>
            </span>{" "}
            👋
          </h2>

          <h1>
            I'm <span className="about__name">{name}.</span>
          </h1>
        </>
      )}
      {role && <h3 className="about__role">A {role}.</h3>}
      <p className="about__desc">{description && description}</p>
      <p>
        I have been nearly coding for about 0.6 year in Java,NodeJs & ReactJs. I am
        Full Stack Developer. Offering you excellent communication
        and good judgment and a hardworking and passionate job seeker with
        strong organizational skills eager to learn new things. Ready to help
        team achieve company goals.
      </p>
      <p className="dark:text-gray-100 text-sky-500 text-lg">
        My prefered choice of weapons 👇
      </p>
      <div className="mt-4 w-full flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
        <div
          className="flex justify-start items-center py-2 leading-tight lg:w-2/5"
          index="0"
          style={{ outliner: "none" }}
        >
          <div
            className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
            style={{ "min-width": "1.25rem" }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="dark:text-gray-100 text-sky-500">
            Javascript (NodeJS)
          </span>
        </div>
        <div
          className="flex justify-start items-center py-2 leading-tight lg:w-2/5 "
          index="0"
          style={{ outliner: "none" }}
        >
          <div
            className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
            style={{ "min-width": "1.25rem" }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="dark:text-gray-100 text-sky-500">
            Java (Spring Boot)
          </span>
        </div>{" "}
        <div
          className="flex justify-start items-center py-2 leading-tight lg:w-2/5 "
          index="0"
          style={{ outliner: "none" }}
        >
          <div
            className="flex justify-center items-center w-5 h-5 rounded-full mr-4 text-sm bg-sky-500 text-white"
            style={{ "min-width": "1.25rem" }}
          >
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
          <span className="dark:text-gray-100 text-sky-500">React/Redux</span>
        </div>
      </div>

      <div className="about__contact center">
        {resume && (
          <a href={resume}>
            <span type="button" className="btn btn--outline">
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default About;
