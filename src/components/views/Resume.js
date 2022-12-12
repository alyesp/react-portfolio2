import React from "react";

const styles = {
  resume:{
    marginLeft:"10%",
    marginRight:"10%",
    alignItems:'center',
    marginTop:"25px",
  },
};

export default function Resume() {
  return (
    <div style={styles.resume} className='d-flex flex-column'>
      <h1>Resume</h1>

      <h4
      style={{
        marginTop:"10px",
      }}>
        Alyssa Esparza Bonney Lake, WA | alyssa.esparza95@gmail.com | 253-442-3833
      </h4>

      <div style={styles.resume}>
        <div>
          <h4>Education</h4>
          <p>
            Auburn Riverside Senior High School 2010 - 2014 / National School of Dental Assisting 2018 / University
            of Washington Coding Bootcamp 2022
          </p>
        </div>

        <div>
          <h4>Skills</h4>
          <p>
            HTML, CSS, Javascript, JQuery and Bootstrap Experience working on
            single page applications
          </p>
        </div>

        <div>
          <h4>Work Experience</h4>
          <p>
          A dedicated self starter with more than 10 years of work experience; 4 of those years in a professional dental office.  
          Enjoy working in a team environment and have often been selected for leadership positions by management and by other associates.  
          Skilled at assimilating information quickly; enjoy the challenge of running projects and am always looking for  improvement in current processes.  
          A dependable asset that you rely on to get any job accomplished.
          </p>
        </div>
      </div>
    </div>
  );
}