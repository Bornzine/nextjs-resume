// ─── Resume Data ───────────────────────────────────────────────
// Edit this object to update any section of your resume.
const resumeData = {
  name: "Jasper Turner",
  title: "Business Analytics & Information Systems",
  school: "University of South Florida — Muma College of Business",
  summary:
    "Senior at the University of South Florida pursuing a Bachelor's degree in Business Analytics and Information Systems. Passionate about leveraging data-driven insights to solve real-world business problems. Seeking opportunities to apply analytical skills in a dynamic, results-oriented environment.",
  contact: {
    email: "jgt3@usf.edu",
    github: "github.com/Bornzine",
    githubUrl: "https://github.com/Bornzine",
    linkedin: "linkedin.com/in/jasper-turner-953b4b340",
    linkedinUrl: "https://www.linkedin.com/in/jasper-turner-953b4b340/",
    location: "Tampa, FL",
  },
  education: [
    {
      degree: "B.S., Business Analytics & Information Systems",
      school: "University of South Florida — Muma College of Business",
      period: "2024 – Present",
      details: "Currently enrolled · Expected graduation 2026",
    },
    {
      degree: "A.A., Business",
      school: "State College of Florida",
      period: "2022 – 2024",
      details: "Completed",
    },
  ],
  experience: [
    {
      title: "Business Analytics Student",
      company: "University of South Florida",
      period: "2024 – Present",
      bullets: [
        "Developing proficiency in data analysis, information systems design, and business strategy.",
        "Completing coursework in analytics tools, database management, and decision-making frameworks.",
        "Collaborating with peers on case studies and projects that simulate real-world business challenges.",
      ],
    },
  ],
  skills: {
    technical: ["SQL", "Microsoft Excel", "Data Analysis", "Information Systems", "Business Intelligence"],
    business: ["Project Management", "Strategic Thinking", "Problem Solving", "Communication", "Teamwork"],
  },
};

function SectionHeading({ children }) {
  return (
    <h2 className="text-xs font-semibold uppercase tracking-widest text-amber-600 mb-5 pb-2 border-b-2 border-amber-500">
      {children}
    </h2>
  );
}

export default function ResumePage() {
  const { name, title, school, summary, contact, education, experience, skills } = resumeData;

  return (
    <main className="min-h-screen bg-gray-100 font-sans">

      <header className="bg-green-900 text-white px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="bg-amber-500 text-green-900 text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-sm">
              University of South Florida
            </span>
            <span className="text-amber-400 text-xs tracking-wide">Muma College of Business</span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-white mb-2">{name}</h1>
          <p className="text-amber-400 text-lg font-medium mb-1">{title}</p>
          <p className="text-green-300 text-sm mb-6">{school}</p>
          <div className="flex flex-wrap gap-5 text-sm text-green-200">
            <span>📍 {contact.location}</span>
            <a href={`mailto:${contact.email}`} className="hover:text-amber-400 transition-colors" aria-label="Email Jasper Turner">
              ✉ {contact.email}
            </a>
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Jasper's GitHub profile">
              ⌥ {contact.github}
            </a>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors" aria-label="Jasper's LinkedIn profile">
              in {contact.linkedin}
            </a>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-10 flex flex-col gap-10">

        <section aria-labelledby="summary-heading" className="bg-white rounded-lg p-7 shadow-sm border border-gray-200">
          <SectionHeading>Professional Summary</SectionHeading>
          <p className="text-gray-700 text-sm leading-relaxed">{summary}</p>
        </section>

        <section aria-labelledby="education-heading" className="bg-white rounded-lg p-7 shadow-sm border border-gray-200">
          <SectionHeading>Education</SectionHeading>
          <div className="flex flex-col gap-6">
            {education.map((edu, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div className="mt-1 w-2 h-2 rounded-full bg-amber-500 shrink-0" />
                <div>
                  <h3 className="text-sm font-semibold text-gray-900">{edu.degree}</h3>
                  <p className="text-sm text-green-800 font-medium">{edu.school}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{edu.period} · {edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="experience-heading" className="bg-white rounded-lg p-7 shadow-sm border border-gray-200">
          <SectionHeading>Experience</SectionHeading>
          <div className="flex flex-col gap-7">
            {experience.map((job, i) => (
              <div key={i}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-1 gap-1">
                  <h3 className="text-sm font-semibold text-gray-900">{job.title}</h3>
                  <span className="text-xs text-white bg-green-800 px-2 py-0.5 rounded-sm font-medium w-fit">
                    {job.period}
                  </span>
                </div>
                <p className="text-xs text-amber-700 font-semibold uppercase tracking-wide mb-3">{job.company}</p>
                <ul className="flex flex-col gap-2">
                  {job.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-gray-600 flex gap-2 items-start">
                      <span className="text-amber-500 mt-1 shrink-0">▸</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section aria-labelledby="skills-heading" className="bg-white rounded-lg p-7 shadow-sm border border-gray-200">
          <SectionHeading>Skills</SectionHeading>
          <div className="flex flex-col gap-5">
            <div>
              <h3 className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3">Technical</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.technical.map((skill, i) => (
                  <li key={i} className="bg-green-900 text-amber-400 text-xs font-medium px-3 py-1 rounded-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs text-gray-500 font-medium uppercase tracking-wider mb-3">Business & Soft Skills</h3>
              <ul className="flex flex-wrap gap-2">
                {skills.business.map((skill, i) => (
                  <li key={i} className="bg-amber-50 text-amber-800 border border-amber-300 text-xs font-medium px-3 py-1 rounded-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

      </div>

      <footer className="bg-green-900 text-green-300 text-xs text-center py-5 mt-6">
        <p>{name} · {contact.email} · University of South Florida · {new Date().getFullYear()}</p>
      </footer>

    </main>
  );
}