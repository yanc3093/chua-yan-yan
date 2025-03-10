function Home() {
  return (
    <div className="home">
      <img src="cyy.jpeg" alt="cyy" />
      <div>
        <h3>Hello, I'm</h3>
        <h1>Chua Yan Yan</h1>
        <h2>Software Developer</h2>
        <div className="buttons">
          <a href="resume.pdf" download="ChuaYanYan-resume">
            <button>Download Resume</button>{" "}
          </a>
        </div>
        <div className="buttons">
          <a
            href="https://www.linkedin.com/in/yanc3093/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://github.com/yanc3093"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="github.png" alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
