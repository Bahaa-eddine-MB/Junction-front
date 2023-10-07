import DropDown from "./DropDown";

const Lessons = () => {
  const fieldsAndPrograms = [
    {
      title: "Cybersecurity",
      programs: [
        "Cybersecurity Analyst",
        "Ethical Hacker",
        "Security Engineer",
        "Chief Information Security Officer (CISO)",
      ],
    },

    {
      title: "Artificial Intelligence (AI)",
      programs: [
        "AI Research Scientist",
        "Natural Language Processing (NLP) Engineer",
        "Computer Vision Engineer",
        "Robotics Engineer",
      ],
    },
    {
      title: "Embedded Systems",
      programs: [
        "Embedded Systems Engineer",
        "Firmware Developer",
        "IoT (Internet of Things) Specialist",
        "Robotics Software Engineer",
      ],
    },
    {
      title: "Web Development",
      programs: [
        "Web Designer",
        "Web Developer",
        "UI/UX Designer",
        "Web Application Architect",
      ],
    },
  ];

  return (
    <>
      <div className="bg-thirdColor rounded-md">
        {fieldsAndPrograms.map((element,index) => {
          return (
            <>
              <DropDown list={element.programs} title={element.title} key={index} />
            </>
          );
        })}
      </div>
    </>
  );
};

export default Lessons;
