const resumeData = {
  name: "Jasper Turner",
  title: "Business Analytics & Information Systems",
  school: "University of South Florida - Muma College of Business",
  summary: "Senior at the University of South Florida pursuing a Bachelor degree in Business Analytics and Information Systems. Passionate about leveraging data-driven insights to solve real-world business problems. Seeking opportunities to apply analytical skills in a dynamic results-oriented environment.",
  contact: {
    email: "jgt3@usf.edu",
    github: "github.com/Bornzine",
    githubUrl: "https://github.com/Bornzine",
    linkedin: "linkedin.com/in/jasper-turner-953b4b340",
    linkedinUrl: "https://www.linkedin.com/in/jasper-turner-953b4b340/",
    location: "Tampa, FL",
  },
  education: [
    { degree: "B.S., Business Analytics & Information Systems", school: "University of South Florida - Muma College of Business", period: "2024 - Present", details: "Currently enrolled - Expected graduation 2026" },
    { degree: "A.A., Business", school: "State College of Florida", period: "2022 - 2024", details: "Completed" },
  ],
  experience: [
    {
      title: "Business Analytics Student",
      company: "University of South Florida",
      period: "2024 - Present",
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

export default function ResumePage() {
  const { name, title, school, summary, contact, education, experience, skills } = resumeData;
  return (
    <main style={{margin:0, padding:0, fontFamily:"Georgia, serif", backgroundColor:"#f5f5f5", minHeight:"100vh"}}>
      <header style={{backgroundColor:"#006747", color:"white", padding:"3rem"}}>
        <div style={{maxWidth:"860px", margin:"0 auto"}}>
          <div style={{marginBottom:"1rem"}}>
            <span style={{backgroundColor:"#CFC493", color:"#004d35", fontSize:"0.7rem", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.12em", padding:"4px 12px"}}>University of South Florida</span>
            <span style={{color:"#CFC493", fontSize:"0.8rem", marginLeft:"12px"}}>Muma College of Business</span>
          </div>
          <h1 style={{fontSize:"3rem", fontWeight:"700", color:"white", margin:"0 0 6px"}}>{name}</h1>
          <p style={{color:"#CFC493", fontSize:"1.1rem", margin:"0 0 4px"}}>{title}</p>
          <p style={{color:"rgba(255,255,255,0.65)", fontSize:"0.85rem", margin:"0 0 1.5rem"}}>{school}</p>
          <div style={{display:"flex", flexWrap:"wrap", gap:"1.5rem", fontSize:"0.82rem", color:"rgba(255,255,255,0.75)"}}>
            <span>Tampa, FL</span>
            <a href={"mailto:"+contact.email} style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>{contact.email}</a>
            <a href={contact.githubUrl} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>{contact.github}</a>
            <a href={contact.linkedinUrl} target="_blank" rel="noopener noreferrer" style={{color:"rgba(255,255,255,0.75)", textDecoration:"none"}}>{contact.linkedin}</a>
          </div>
        </div>
      </header>
      <div style={{maxWidth:"860px", margin:"0 auto", padding:"2.5rem 2rem", display:"flex", flexDirection:"column", gap:"1.8rem"}}>
        <section>
          <div style={{backgroundColor:"white", borderRadius:"6px", padding:"1.8rem 2rem", border:"1px solid #e0e0e0"}}>
            <h2 style={{fontSize:"0.7rem", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.14em", color:"#a08c3a", borderBottom:"2px solid #CFC493", paddingBottom:"8px", marginBottom:"1.4rem"}}>Professional Summary</h2>
            <p style={{color:"#444", fontSize:"0.9rem", lineHeight:"1.8", margin:0}}>{summary}</p>
          </div>
        </section>
        <section>
          <div style={{backgroundColor:"white", borderRadius:"6px", padding:"1.8rem 2rem", border:"1px solid #e0e0e0"}}>
            <h2 style={{fontSize:"0.7rem", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.14em", color:"#a08c3a", borderBottom:"2px solid #CFC493", paddingBottom:"8px", marginBottom:"1.4rem"}}>Education</h2>
            {education.map((edu, i) => (
              <div key={i} style={{display:"flex", gap:"14px", alignItems:"flex-start", marginBottom:"1.2rem"}}>
                <div style={{width:"9px", height:"9px", borderRadius:"50%", backgroundColor:"#CFC493", marginTop:"5px", flexShrink:0}} />
                <div>
                  <p style={{fontSize:"0.88rem", fontWeight:"700", color:"#1a1a1a", margin:"0 0 2px"}}>{edu.degree}</p>
                  <p style={{fontSize:"0.85rem", color:"#006747", fontWeight:"600", margin:"0 0 2px"}}>{edu.school}</p>
                  <p style={{fontSize:"0.75rem", color:"#777", margin:0}}>{edu.period} - {edu.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div style={{backgroundColor:"white", borderRadius:"6px", padding:"1.8rem 2rem", border:"1px solid #e0e0e0"}}>
            <h2 style={{fontSize:"0.7rem", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.14em", color:"#a08c3a", borderBottom:"2px solid #CFC493", paddingBottom:"8px", marginBottom:"1.4rem"}}>Experience</h2>
            {experience.map((job, i) => (
              <div key={i}>
                <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", marginBottom:"4px", flexWrap:"wrap", gap:"8px"}}>
                  <h3 style={{fontSize:"0.88rem", fontWeight:"700", color:"#1a1a1a", margin:0}}>{job.title}</h3>
                  <span style={{fontSize:"0.72rem", color:"white", backgroundColor:"#006747", padding:"2px 10px", borderRadius:"2px"}}>{job.period}</span>
                </div>
                <p style={{fontSize:"0.72rem", color:"#a08c3a", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.08em", margin:"0 0 10px"}}>{job.company}</p>
                <ul style={{listStyle:"none", margin:0, padding:0}}>
                  {job.bullets.map((bullet, j) => (
                    <li key={j} style={{display:"flex", gap:"10px", alignItems:"flex-start", marginBottom:"6px", fontSize:"0.85rem", color:"#444", lineHeight:"1.6"}}>
                      <span style={{color:"#CFC493", flexShrink:0, marginTop:"2px"}}>&#9658;</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
        <section>
          <div style={{backgroundColor:"white", borderRadius:"6px", padding:"1.8rem 2rem", border:"1px solid #e0e0e0"}}>
            <h2 style={{fontSize:"0.7rem", fontWeight:"700", textTransform:"uppercase", letterSpacing:"0.14em", color:"#a08c3a", borderBottom:"2px solid #CFC493", paddingBottom:"8px", marginBottom:"1.4rem"}}>Skills</h2>
            <p style={{fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"0.1em", color:"#777", marginBottom:"8px", fontWeight:"600"}}>Technical</p>
            <div style={{display:"flex", flexWrap:"wrap", gap:"8px", marginBottom:"1.2rem"}}>
              {skills.technical.map((skill, i) => (
                <span key={i} style={{backgroundColor:"#006747", color:"#CFC493", fontSize:"0.75rem", fontWeight:"600", padding:"4px 12px", borderRadius:"2px"}}>{skill}</span>
              ))}
            </div>
            <p style={{fontSize:"0.68rem", textTransform:"uppercase", letterSpacing:"0.1em", color:"#777", marginBottom:"8px", fontWeight:"600"}}>Business and Soft Skills</p>
            <div style={{display:"flex", flexWrap:"wrap", gap:"8px"}}>
              {skills.business.map((skill, i) => (
                <span key={i} style={{backgroundColor:"#faf7ee", color:"#a08c3a", border:"1px solid #CFC493", fontSize:"0.75rem", fontWeight:"600", padding:"4px 12px", borderRadius:"2px"}}>{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </div>
      <footer style={{backgroundColor:"#004d35", color:"rgba(255,255,255,0.5)", textAlign:"center", fontSize:"0.75rem", padding:"1.2rem", marginTop:"1rem"}}>
        {name} - {contact.email} - University of South Florida - {new Date().getFullYear()}
      </footer>
    </main>
  );
}
