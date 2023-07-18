function verifyStudent(event) {
  event.preventDefault(); // Prevent form submission

  var rollNo = document.getElementById("rollNo").value;

  var students = [
    {
      rollNo: 1,
      registrationNo: '2023104',
      name: 'ABDUL KHALIQ',
      fatherName: 'SAEED JAN',
      course: 'PHARMACY TECHNICIAN',
      duration: '2 Years',
      session: '2019-2021',
      totalMarks: 2000,
      obtainedMarks: 1698,
      grade: 'A'
    },
    // Add more student data here
  ];

  // Search for the student with the provided roll number
  var foundStudent = students.find(function(student) {
    return student.rollNo == rollNo;
  });

  // If a student is found, display the student details
  if (foundStudent) {
    document.getElementById("resultContainer").innerHTML = `
      <h2>VERIFICATION RESULT</h2>
      <p>It is to verify that the Diploma/Certificate issued in favor of Mr/Miss <strong>${foundStudent.name}</strong> S/D/O <strong>${foundStudent.fatherName}</strong>, vide Roll No: <strong>${foundStudent.rollNo}</strong> with Registration No: <strong>${foundStudent.registrationNo}</strong> trained and evaluated by <strong>INSTITUTE OF TECHNICAL AND PROFESSIONAL EDUCATION ISLAMABAD</strong> in the trade of <strong>${foundStudent.course}</strong> is found genuine according to our office record with the following transcript.</p>
      <h2>TRANSCRIPT DETAILS</h2>
      <p>Total Marks: <strong>${foundStudent.totalMarks}</strong></p>
      <p>Marks Obtained: <strong>${foundStudent.obtainedMarks}</strong></p>
      <p>Grade: <strong>${foundStudent.grade}</strong></p>
      <p>Session: <strong>${foundStudent.session}</strong></p>
      <p>Duration: <strong>${foundStudent.duration}</strong></p>
    `;
  } else {
    // If no student is found, display an error message
    document.getElementById("resultContainer").textContent = "Student not found.";
  }
}
