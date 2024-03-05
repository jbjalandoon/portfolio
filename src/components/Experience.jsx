const EXPERIENCES = [
  {
    company: "DXC Technology",
    role: "Technology Consultant",
    start: "Feb 2023",
    end: "PRESENT",
    description: [
      "Developed mobile application using Flutter",
      "Handle incidents and request through ServiceNow",
      "Maintain Azure Data Factory",
      "Maintain Database and Azure Resources",
    ],
  },
];

export default function Experience() {
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">Experiences: </h1>
      <div className="flex flex-col">
        {EXPERIENCES.map((e, i) => (
          <div key={i} className="flex flex-col gap-2">
            <h1 className="text-3xl xs:text-4xl sm:text-5xl">{e.company}</h1>
            <span className="text-2xl">{e.role}</span>
            <span className="text-xl">{`${e.start} - ${e.end}`}</span>
            <ul className="ml-8 list-disc">
              {e.description.map((desc) => (
                <li key={desc}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
