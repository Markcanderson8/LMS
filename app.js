// Author Mark Anderson

const onlineQuiz = [
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 01,
    studentName: "Mark Anderson",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Section 2",
    quizModule: "Variables",
    quizScore: 87,
    studentId: 02,
    studentName: "Madison Anderson",
    submissionDate: "5/3/2022",
  },
  {
    quizName: "Section 3",
    quizModule: "Functions",
    quizScore: 93,
    studentId: 03,
    studentName: "Michael Anderson",
    submissionDate: "5/1/2022",
  },
];

// Function takes a date and an array as parameters and returns an array of
// objects that have that same date
const filterByDate = (date, submissions) => {
  const mySubmissions = [];
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submissionDate == date) {
      mySubmissions.push(submissions[i]);
    }
  }
  return mySubmissions;
};

// Function takes a student Id and array of objects and returns
// an array with the object of a student that matches the id
const filterByStudentId = (Id, submissions) => {
  const studentIds = [];
  for (let j = 0; j < submissions.length; j++) {
    if (Id == submissions[j].studentId) {
      studentIds.push(submissions[j]);
    }
  }
  return studentIds;
};

// Function takes and array of objects and returs the names
// of the objects
const filterByStudentName = (submissions) => {
  let myNamesList = [];
  for (let i = 0; i < submissions.length; i++) {
    myNamesList.push(submissions[i].studentName);
  }
  return myNamesList;
};

//let myNamesList = filterByStudentName(onlineQuiz);

// const findUnsubmitted = (date, namesList, submissions) => {
//   let myNames = namesList(submissions);
//   for (let i = 0; i < namesList.length; i++) {}
// };

// findUnsubmitted("5/2/2022", myNamesList, onlineQuiz);