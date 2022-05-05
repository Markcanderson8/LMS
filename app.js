const onlineQuiz = [
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 01,
    studentName: "Mark",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 02,
    studentName: "Madison",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 03,
    studentName: "Michael",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 04,
    studentName: "Jenny",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 05,
    studentName: "Jim",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 06,
    studentName: "Jeff",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 83,
    studentId: 07,
    studentName: "Molly",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 08,
    studentName: "Mary",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Functions",
    quizScore: 67,
    studentId: 09,
    studentName: "Melissa",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Fundamentals",
    quizModule: "Calculus",
    quizScore: 0,
    studentId: 10,
    studentName: "Bill",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Section 2",
    quizModule: "Variables",
    quizScore: 91,
    studentId: 11,
    studentName: "Jessica",
    submissionDate: "5/1/2022",
  },
  {
    quizName: "Section 3",
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

/**
 * Function takes in two parameters a date and an array of objects and returns
 * a filtered array of objects that match the date parameter
 * @param {} date - a string to be checked against other object's strings
 * @param {} submissions[objects] - An array of objects that includes multiple fields, one being date
 * @returns mySubmissions - an array of objects
 */
const filterByDate = (date, submissions) => {
  const mySubmissions = [];
  for (let i = 0; i < submissions.length; i++) {
    if (submissions[i].submissionDate == date) {
      mySubmissions.push(submissions[i]);
    }
  }
  return mySubmissions;
};

/**
 * Function takes a student Id and array of objects and returns
 * an array with the object of a student that matches the id
 * @param {} Id - number
 * @param {} submissions[objects] - An array of objects that includes multiple fields, one being studentId
 * @returns studentIds - an array of objects that match the Id parameter
 */
const filterByStudentId = (Id, submissions) => {
  const studentIds = [];
  for (let j = 0; j < submissions.length; j++) {
    if (Id == submissions[j].studentId) {
      studentIds.push(submissions[j]);
    }
  }
  return studentIds;
};

/**
 * Function takes a date, a function that checks dates against names
 * and an array of objects and returns a list of names that haven't
 * taken a quiz for the date given
 * @param {} date - a string to be checked against other object's strings
 * @param {} arrayOfNames[names] - An array of names
 * @param {} submissions[objects] - An array of objects that includes multiple fields
 * @returns difference - a filtered list of names that haven't taken a text on that date
 */
const findUnsubmitted = (date, arrayOfNames, submissions) => {
  let filteredNames = [];
  filteredSubmissions = filterByDate(date, submissions);
  for (let i = 0; i < filteredSubmissions.length; i++) {
    filteredNames.push(filteredSubmissions[i].studentName);
  }
  const difference = arrayOfNames.filter(
    (x) => filteredNames.indexOf(x) === -1
  );
  return difference;
};

/**
 * Function that takes an array of objects and loops through it to get
 * the quiz scores of each object then it returns the average of the scores
 * @param {} submissions[objects] - An array of objects that includes multiple fields
 * @returns result - an average number with 1 decimal point
 */
const getAverageScore = (submissions) => {
  let sum = 0;
  for (let i = 0; i < submissions.length; i++) {
    sum += submissions[i].quizScore;
  }
  const result = sum / submissions.length;
  return result.toFixed(1);
};
