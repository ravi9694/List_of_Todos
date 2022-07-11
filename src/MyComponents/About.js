import React from "react";

export const About = (props) => {
    let myStyle = {
        minHeight: "75vh",
        marginTop: "2px",
        marginBottom :"2px",
        padding : "10px"
    }
    let extrastyle = {
      padding : "5px",
      margin : "5px"
    }

  return (
    <>
    <div className={`bg-${props.mode} text-${props.mode==="light" ? 'dark' : 'light'}`} style={myStyle} >
    <div className="container" style={myStyle} >
      <div className={`btn-outline-secondary text-${props.mode==="light" ? 'dark' : 'light'}`} style = {extrastyle}> 
        <h3>Todo</h3>
        <p>
          You can add with a title or description about that todo . It helps to remember your task and complete on time.
        </p>
          <strong>Some days are just bad days, that's all. You have to experience sadness to know happiness, and I remind myself that not every day is going to be a good day, that's just the way it is!</strong>

      </div>
      <div className={`btn-outline-secondary text-${props.mode==="light" ? 'dark' : 'light'}`} style = {extrastyle}>
      <h3>Something about reminder</h3>
        <p>
        Jazz music is America's past and its potential, summed up and sanctified and accessible to anybody who learns to listen to, feel, and understand it. The music can connect us to our earlier selves and to our better selves-to-come. It can remind us of where we fit on the time line of human achievement, an ultimate value of art
        </p>
      </div>
      </div>
      </div>
      
    </>
  );
};
