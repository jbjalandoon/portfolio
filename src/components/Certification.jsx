import CertificationItem from "./CertificationItem";

const CERTIFICATIONS = [
  {
    title: "Microsoft Certified: Azure Fundamentals",
    link: "https://learn.microsoft.com/api/credentials/share/en-us/JeromeJalandoon-2646/CBDF0BA1C2FFF565?sharingId=241BBD6DE2A01B40",
    img: "/az900.png",
  },
];

const COURSES = [
  {
    title: "React - The Complete Guide 2024 (incl. React Router & Redux)",
    instructor: "Maximilian Schwarzmüller",
  },
  {
    title: "Node.js - The Complete RESTful API Masterclass (2024)",
    instructor: "Ghulam Abbas",
  },
  {
    title: "DevOps , CI/CD(Continuous Integration/Delivery for Beginners",
    instructor: "John Honai",
  },
  {
    title: "Docker for the Absolute Beginner - Hands On - DevOps",
    instructor: "Mumshad Mannambeth",
  },
  {
    title: "The Complete SQL Bootcamp: Go from Zero to Hero",
    instructor: "Jose Portilla",
  },
];

export default function Certification() {
  return (
    <div className="w-100 flex flex-col gap-8">
      <div className="flex flex-col gap-7">
        <h1 className="text-left text-4xl font-bold">Certificate</h1>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((e, i) => (
            <CertificationItem
              key={i}
              link={e.link}
              title={e.title}
              img={e.img}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="text-left text-4xl font-bold">Udemy Courses Taken:</h1>
        <div className="flex flex-col gap-4">
          {COURSES.map((e, i) => (
            <div className="flex flex-col gap-1" key={i}>
              <span className="text-2xl">{e.title}</span>
              <span className="text-md">by: {e.instructor}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
