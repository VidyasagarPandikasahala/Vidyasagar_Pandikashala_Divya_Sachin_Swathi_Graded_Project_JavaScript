import { resumeModel } from "../model/resume.js";
import resumeView from "../view/resumeTemplate.js";

// const noOfApplicants = applicants.length;

async function fetchDataToBeDisplayed() {
  const searchElem = document.querySelector(".search-bar");
  const searchValue = searchElem.value || "";
  //console.log(searchElem.value);

  // prev next disable
  resumeView.removeNextButton();
  resumeView.removePrevButton();

  // fetchdata
  await resumeModel.methods.fetchDataToBeDisplayed(searchValue);

  // send the data to be displayed to view
  const dataToBeDisplayed = resumeModel.state.applicationToBeDisplayed;

  if (dataToBeDisplayed.length === 0) {
    resumeView.displayNoData();
  } else {
    handlePageAction();
  }
}

function handleSearch() {
  // e.preventDefault();
  fetchDataToBeDisplayed();
}

function handlePageAction() {
  resumeView.displayDataToBeDisplayed(
    resumeModel.state.applicationToBeDisplayed[
      resumeModel.methods.getCurrentIndexFromState()
    ]
  );

  if (
    resumeModel.methods.getCurrentIndexFromState() <= 0 &&
    resumeModel.state.applicationToBeDisplayed.length > 0
  ) {
    resumeView.removePrevButton();
    resumeView.displayNextButton();
  } else if (
    resumeModel.methods.getCurrentIndexFromState() !== 0 &&
    resumeModel.state.applicationToBeDisplayed.length - 1 >
      resumeModel.methods.getCurrentIndexFromState()
  ) {
    resumeView.displayPrevButton();
    resumeView.displayNextButton();
  } else if (
    resumeModel.methods.getCurrentIndexFromState() >=
      resumeModel.state.applicationToBeDisplayed.length - 1 &&
    resumeModel.state.applicationToBeDisplayed.length > 0
  ) {
    resumeView.displayPrevButton();
    resumeView.removeNextButton();
  }
}

function handleNextButton() {
  resumeModel.methods.increamentIndexInState();

  handlePageAction();
}

function handlePrevButton() {
  resumeModel.methods.decrementIndexInState();

  handlePageAction();
}

function listenToElement() {
  const searchElem = document.querySelector(".search-bar");
  searchElem.addEventListener("search", handleSearch.bind(this));
  const prevButton = document.querySelector(".btn-prev");
  const nextButton = document.querySelector(".btn-next");
  prevButton.addEventListener("click", handlePrevButton.bind(this));
  nextButton.addEventListener("click", handleNextButton.bind(this));
  // nextElem.onclick = () => {
  //   view.goToNext();
  // };
}

function initialize() {
  fetchDataToBeDisplayed();
  listenToElement();
}

document.body.onload = () => {
  initialize();
};

export const resumeController = {
  methods: {},
};
