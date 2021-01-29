import React from "react";
import "./styles.css";
import Student from "./Student";

export default function App() {
  return (
    <div className="App">
      <h1 className="leadersboardHeading">LeadersBoard</h1>
      <Student
        studentName="Rizwan Ullah"
        university="Bahria University"
        score={345}
      />
      <Student studentName="Imran" university="NED University" score={345} />
      <Student
        studentName="Abdurahman"
        university="Karachi University"
        score={345}
      />
    </div>
  );
}
