class ResumeView {
  #nextButtonEl;
  #searchEl;
  #dataToBeDisplayed;
  #mainSection;

  constructor() {
    this.previousEl = document.querySelector(".btn-prev");
    this.nextButtonEl = document.querySelector(".btn-next");
    this.mainSection = document.querySelector(".resume-body");
  }
  displayNoData() {
    this.mainSection.innerHTML = "";
    const noDataMessage = `<div class="error-message">
    <h3>No Such Results Found</h3>`;

    this.mainSection.insertAdjacentHTML("afterbegin", noDataMessage);
  }
  displayPrevButton() {
    this.previousEl.classList.remove("btn-hidden");
  }

  displayNextButton() {
    this.nextButtonEl.classList.remove("btn-hidden");
  }

  removeNextButton() {
    this.nextButtonEl.classList.add("btn-hidden");
  }
  removePrevButton() {
    this.previousEl.classList.add("btn-hidden");
  }

  displayDataToBeDisplayed(currentData) {
    //get the value entered
    this.mainSection.innerHTML = "";
    const resumeHTML = ` 
    
      <section class="resume-title">
        <h1 class="applicant-name">  ${currentData.basics.name}</h1>
        <h3 class="position">Applied For :  ${
          currentData.basics.AppliedFor
        }</h3>
      </section>
      <!-- skilss section -->
      <section class="skills-experience">
        <section class="skills">
          <div class="personal-information">
            <h3>Personal Information</h3>
            <li class="list">${currentData.basics.phone}</li>
            <li class="list">${currentData.basics.email}</li>
            <li class="list">${currentData.basics.profiles.url}</li>
          </div>
          <div class="technical-skills">
            <h3>Technical Skills</h3>
            ${this.getListItem(currentData.skills.keywords)}
          </div>
          <div class="hobbies">
            <h3>Hobbies</h3>
            ${this.getListItem(currentData.interests.hobbies)}
          </div>
        </section>
        <!-- resume title section -->

        <section class="profession-details">
          <section class="work-experience">
            <h2>Work Experience in previous Company</h2>
            <li><b>Company Name :</b> ${currentData.work["Company Name"]}</li>
            <li><b>Position :</b> ${currentData.work.Position}</li>
            <li><b>Start Date :</b> ${currentData.work["Start Date"]}</li>
            <li><b>End Date :</b>${currentData.work["End Date"]}</li>
            <li>
              <b>Summary :</b> ${currentData.work.Summary}
            </li>
          </section>
          <section class="projects">
            <h2>Projects</h2>
            <p>
              <b>${currentData.projects.name} :</b> ${
      currentData.projects.description
    }
            </p>
          </section>
          <section class="education">
            <h2>Education</h2>
            <li class="list-with-bullets"><b>UG :</b> ${
              currentData.education.UG.institute
            } ${currentData.education.UG.course} ${
      currentData.education.UG["Start Date"]
    } ${currentData.education.UG["End Date"]}</li>
            <li class="list-with-bullets"><b>PU :</b> ${
              currentData.education["Senior Secondary"].institute
            } ${currentData.education["Senior Secondary"].cgpa}</li>
            <li class="list-with-bullets"><b>High School :</b> ${
              currentData.education["High School"].institute
            } ${currentData.education["High School"].cgpa}</li>
          </section>
          <section class="internship">
            <h2>Internship</h2>
            <li class="list-with-bullets"><b>Company Name :</b> ${
              currentData.Internship["Company Name"]
            }</li>
            <li class="list-with-bullets"><b>Position :</b> ${
              currentData.Internship.Position
            }</li>
            <li class="list-with-bullets"><b>Start Date :</b> ${
              currentData.Internship["Start Date"]
            }</li>
            <li class="list-with-bullets"><b>End Date :</b> ${
              currentData.Internship["End Date"]
            }</li>
            <li class="list-with-bullets">
              <b>Summary :</b> ${currentData.Internship.Summary}
            </li>
          </section>
          <section class="achievements">
            <h2>Achievements</h2>
            <li>${currentData.achievements.Summary}</li>
          </section>
        </section>
      </section>
   `;

    this.mainSection.insertAdjacentHTML("afterbegin", resumeHTML);
    // if it validates , change the dom elements
  }
  getListItem(listData) {
    return listData.map((key) => `<li class= "list">${key}</li>`).join("");
  }
}

const resumeView = new ResumeView();

export default resumeView;
