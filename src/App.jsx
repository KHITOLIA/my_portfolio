export default function App() {
  const projects = [
    {
      title: "AI Recommendation System",
      link: "https://recommendation-system.up.railway.app/"
    },
    {
      title: "Aiven LMS",
      link: "https://aiven-lms.up.railway.app/"
    },
    {
      title: "NexVault",
      link: "https://nexvaullt.up.railway.app/"
    }
  ];

  return (
    <div style={{
      background: "#06070a",
      color: "white",
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "sans-serif"
    }}>
      <h1 style={{fontSize:"60px"}}>Tushar Khitoliya</h1>
      <p>AI Engineer • ML Developer • Data Scientist</p>

      <div style={{
        display:"grid",
        gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))",
        gap:"20px",
        marginTop:"50px"
      }}>
        {projects.map((project,index)=>(
          <a
            key={index}
            href={project.link}
            target="_blank"
            style={{
              padding:"30px",
              border:"1px solid rgba(255,255,255,0.1)",
              borderRadius:"24px",
              textDecoration:"none",
              color:"white",
              background:"rgba(255,255,255,0.05)"
            }}
          >
            <h2>{project.title}</h2>
            <p>Production deployed application</p>
          </a>
        ))}
      </div>
    </div>
  )
}
