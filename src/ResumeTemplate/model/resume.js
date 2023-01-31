const state = {
  applicationToBeDisplayed: [],
  currentResumeApplicationIndex: -1,
};

async function fetchDataFromJson() {
  // fetch data from json
  const response = await fetch("/src/data/data.json");
  console.log(response);
  const result = await response.json();
  return result.resume;
}

async function fetchDataToBeDisplayed(searchValue) {
  const entireData = await fetchDataFromJson();
  searchValue = searchValue.toLowerCase();
  // filter whith search value
  if (searchValue) {
    state.applicationToBeDisplayed = entireData.filter((eachApplicant) =>
      eachApplicant.basics.AppliedFor.toLowerCase().includes(searchValue)
    );
  } else {
    state.applicationToBeDisplayed = entireData;
  }
  setDefaultIndexInState();
}

function setDefaultIndexInState() {
  state.currentResumeApplicationIndex = 0;
}

function increamentIndexInState() {
  state.currentResumeApplicationIndex++;
}

function decrementIndexInState() {
  state.currentResumeApplicationIndex--;
}

function getCurrentIndexFromState() {
  return state.currentResumeApplicationIndex;
}

// async function fetchDataToBeDisplayed1(searchValue) {
//   const dataSetToStatePromise = new Promise((resolve, reject) => {
//     // fetch entire data
//     const entireDataPromise = fetchDataFromJson();
//     entireDataPromise.then((resp) => {
//       const entireData = resp.resume;

//       // filter whith search value
//       if (searchValue) {
//         state.applicationToBeDisplayed = entireData.filter(
//           (eachApplicant) => eachApplicant.basics.AppliedFor === searchValue
//         );
//       } else {
//         state.applicationToBeDisplayed = entireData;
//       }

//       resolve("data is set");
//     });
//   });

//   return dataSetToStatePromise;
// }

export const resumeModel = {
  state: state,
  methods: {
    fetchDataToBeDisplayed,
    setDefaultIndexInState,
    increamentIndexInState,
    decrementIndexInState,
    getCurrentIndexFromState,
  },
};
