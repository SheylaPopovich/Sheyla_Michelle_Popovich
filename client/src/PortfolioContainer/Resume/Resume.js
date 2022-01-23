import React, { useState } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "_" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 50 },
    { skill: "React", ratingPercentage: 20 },
    { skill: "Node JS", ratingPercentage: 30 },
    { skill: "Mongo DB", ratingPercentage: 90 },
    { skill: "CSS", ratingPercentage: 10 },
  ];

  const projectDetails = [
    {
      title: "Personal Portfolio Website",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "This is an area I have to update later when I can",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Enter New Project Name and Update the Rest",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "This is an area I have to update later when I can",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
    {
      title: "Enter Second New Project Name and Update the Rest",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "This is an area I have to update later when I can",
      subHeading: "Technologies Used: React JS, Bootstrap",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"University of Denver BootCamp"}
        subHeading={"Full Stack Web Developer"}
        fromDate={"2020"}
        toDate={"2020"}
      />
      <ResumeHeading
        heading={"Remington College"}
        subHeading={"Registered Medical Assistant"}
        fromDate={"2013"}
        toDate={"2014"}
      />
      <ResumeHeading
        heading={"High School"}
        subHeading={"Robinson High School"}
        fromDate={"2001"}
        toDate={"2005"}
      />
    </div>,
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Mayo"}
          subHeading={"Desk Operations Specialist"}
          fromDate={"2001"}
          toDate={"2005"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Change this span to a description
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Please some text here that will be for description
          </span>
          <br />
          <span className="resume-description-text">
            - Please some text here that will be for description Please some
            text here that will be for description
          </span>
          <br />
          <span className="resume-description-text">
            - Please some text here that will be for description Please some
            text here that will be for description
          </span>
          <br />
        </div>
      </div>
    </div>,

    <div
      className="resume-screen-container programming-skills-container"
      key="programming skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectDetails.map((projectDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectDetails.title}
          subHeading={projectDetails.subHeading}
          description={projectDetails.description}
          fromDate={projectDetails.duration.fromDate}
          toDate={projectDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Write in a Interest I have"
        description="Write in this area here a description of what that interest is"
      />
      <ResumeHeading
        heading="Write in a Interest I have"
        description="Write in this area here a description of what that interest is"
      />
      <ResumeHeading
        heading="Write in a Interest I have"
        description="Write in this area here a description of what that interest is"
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="oops... no internet connection"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  return (
    <div resume-container screen-container id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
}
