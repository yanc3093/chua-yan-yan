import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import myResume from "../asset/resume.pdf";
import ExpandableContainer from "./expandableContainer";

function Resume() {
  return (
    <div className="resume">
      <div className="leftColumn">
        <h1>My Resume</h1>
        <a href={myResume} download="ChuaYanYan-resume">
          <button>
            <FontAwesomeIcon className="icon" icon={faFileArrowDown} />
            Download Resume
          </button>
        </a>
      </div>
      <div className="rightColumn">
        <ExpandableContainer
          title="Education"
          content={
            <div>
              <h3>Bachelor of Computer Science in Data Science</h3>
              <div>Monash University, Malaysia</div>
              <div>Class of 2023</div>
              <ul>
                <li>GPA: 3.647</li>
              </ul>
            </div>
          }
        />
        <ExpandableContainer
          title="Work Experience"
          content={
            <div>
              <h3>Software Developer</h3>
              <div>Mlion Corporation Pte Ltd, Singapore</div>
              <div>April 2023 - Present</div>
              <ul>
                <li>
                  Developed GoBendid, a tablet app designed to digitise
                  operations for the company’s pipe bending factory in the
                  Philippines, aimed at improving business processes across
                  multiple functions.
                </li>
                <li>
                  Designed and implemented CRUD modules in the app to assist
                  managers in handling customers, suppliers, sales orders,
                  purchase orders, deliveries, inventories, facilities and
                  employees.
                </li>
                <li>
                  Designed and implemented the Operations Management module, the
                  core feature of the app, enabling factory floor operators to
                  view assigned tasks, update work progress, and adhere to SOPs
                  via tablets.
                </li>
                <li>
                  In the initial stage of the project, implemented the frontend
                  using Flutter and the backend with NodeJS. Later, transitioned
                  the backend to leverage Odoo’s external API for enhanced
                  functionality, scalability and flexibility.
                </li>
                <li>
                  At the end of each 3-week sprint, conducted thorough testing
                  of the app and deployed the iOS tablet app to TestFlight.
                </li>
              </ul>
              <h3>Data Scientist Intern</h3>
              <div>Pengurusan Air Selangor Wilayah Kuala Lumpur, Malaysia</div>
              <div>November 2021 - February 2022</div>
              <ul>
                <li>
                  Supported immediate supervisor in various data science
                  projects under his charge.
                </li>
                <li>Assisted in data cleaning and preparation.</li>
                <li>
                  Performed exploratory data analysis (EDA) using PySpark in
                  Azure Databricks to discover patterns and spot anomalies.
                </li>
                <li>
                  Researched and identified potential models and algorithms for
                  specific problems.
                </li>
              </ul>
            </div>
          }
        />
        <ExpandableContainer
          title="Technical Skills"
          content={
            <div>
              <h3>Data Analysis / Data Science</h3>
              <ul>
                <li>Python, SQL, R, MATLAB</li>
              </ul>
              <h3>Frontend Development</h3>
              <ul>
                <li>Dart, Flutter, ReactJS, Javascript, HTML, CSS</li>
              </ul>
              <h3>Backend Development</h3>
              <ul>
                <li>NodeJS, Javascript, Java, C</li>
              </ul>
              <h3>Version Control</h3>
              <ul>
                <li>Git</li>
              </ul>
              <h3>Data Visualisation / BI Tools</h3>
              <ul>
                <li>Tableau, Vega-Lite</li>
              </ul>
            </div>
          }
          isLastContainer={true}
        />
      </div>
    </div>
  );
}

export default Resume;
