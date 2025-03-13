import myPicture from "../asset/cyy.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="leftColumn">
        <img src={myPicture} alt="cyy" />
        <div>
          <a
            href="https://www.linkedin.com/in/yanc3093/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button>
              <FontAwesomeIcon className="icon" icon={faLinkedin} />
              Connect With Me
            </button>
          </a>
        </div>
      </div>
      <div className="rightColumn">
        <div className="summary">
          Graduate of Monash University Malaysia's Bachelor of Computer Science
          major in Data Science, currently a Software Developer based in
          Singapore with a strong passion for problem-solving and continuous
          learning.
        </div>
        <div>
          <h3>A Bit About Myself</h3>
          <p>
            I was born and raised in Sabah, Malaysia, where its rich
            biodiversity and vibrant mix of ethnic cultures shaped my
            perspective on the world, fostering a deep appreciation for
            diversity. Growing up, I developed a strong curiosity for technology
            and problem-solving, which eventually led me to pursue a Bachelor’s
            degree in Computer Science with a focus on Data Science from Monash
            University Malaysia. After graduating, I moved to Singapore to
            kickstart my career in the tech industry as a Software Developer,
            where I have been able to apply my academic knowledge and hone my
            technical skills while contributing to impactful project. I am
            excited by the opportunities ahead in the tech world and am
            committed to continuing my growth in this ever-evolving field.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
