const onlineQuiz = [
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 01,
    studentName: "Mark",
    submissionDate: "5/4/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 02,
    studentName: "Madison",
    submissionDate: "5/4/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 03,
    studentName: "Michael",
    submissionDate: "5/4/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 04,
    studentName: "Jenny",
    submissionDate: "5/4/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 05,
    studentName: "Jim",
    submissionDate: "5/3/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 06,
    studentName: "Jeff",
    submissionDate: "5/3/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 07,
    studentName: "Molly",
    submissionDate: "5/2/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 08,
    studentName: "Mary",
    submissionDate: "5/2/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 09,
    studentName: "Melissa",
    submissionDate: "5/2/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 10,
    studentName: "Bill",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Python",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 11,
    studentName: "Jessica",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Python",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 12,
    studentName: "Jamie",
    submissionDate: "5/1/2022",
  },
];

const arrayOfNames = [
  "Michael",
  "Madison",
  "Mark",
  "Jenny",
  "Jim",
  "Jeff",
  "Molly",
  "Mary",
  "Melissa",
  "Bill",
  "Jessica",
  "Jamie",
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

/* test cases for filterByDate
let filter = filterByDate("5/2/2022", onlineQuiz);
let filter = filterByDate("5/3/2022", onlineQuiz);
let filter = filterByDate("5/4/2022", onlineQuiz);
let filter = filterByDate("5/1/2022", onlineQuiz);
console.log(filter);
*/

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
let newId = filterByStudentId(11, onlineQuiz);
console.log(newId);
// Function takes a date, a function that checks dates against names and
// an array of objects and returns a list of names that haven't taken a
// quiz for the date given
const findUnsubmitted = (date, arrayOfNames, submissions) => {
  let filteredNames = [];
  filteredSubmissions = filterByDate(date, submissions);
  //loop thru filtered submission and get names from filteredSubmissions.
  for (let i = 0; i < filteredSubmissions.length; i++) {
    filteredNames.push(filteredSubmissions[i].studentName);
  }
  let difference = arrayOfNames.filter((x) => filteredNames.indexOf(x) === -1);
  return difference;
};

/* Use this test for findUnsubmitted func
let difference = findUnsubmitted("5/1/2022", arrayOfNames, onlineQuiz);
console.log(difference);
*/

// Function that takes an array of objects and loops through it to get
// the quiz scores of each object then it returns the average of the scores
const getAverageScore = (submissions) => {
  let sum = 0;
  for (let i = 0; i < submissions.length; i++) {
    sum += submissions[i].quizScore;
  }
  const result = sum / submissions.length;
  return result.toFixed(1);
};
