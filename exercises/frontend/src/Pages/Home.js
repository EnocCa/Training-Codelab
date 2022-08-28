import React, { useState,useEffect } from "react";
import TestButton from "../Components/TestButton";
import styles from "./Home.module.css"

function Home () {
  // set variables [chosen, setChosen] using hooks (useState) to "button 1"
  const [chosen, setChosen] = useState("Button 1")

  //  excercise 9.3
  // set variables [message, setMessage] using hooks (useState) to "you choose 1"
  const [message,setMessage] = useState("You Choose 1");
  useEffect(() =>{setMessage(chosen === "Button 1" ? "You Choose 1" : "You Choose 2")},[chosen])

  //  excercise 9.3 update message when chosen change ( set dependecy to chosen) 
  /* uncomment for excercise 9.3
  useEffect(() =>{
  },[])
  */

  // handle currency button onclick
  const changeChosen = (clickedButton) =>{
    setChosen(clickedButton);
  }

  return (
      <div class={styles.bodyContainer}>
        <div class={styles.innerBodyContainer}>
          {chosen}
          <TestButton chosen={chosen} changeChosen={changeChosen}/> 
          {message}
          {/* uncomment for exercise 9.3 {message} */}
        </div>
      </div>
  );

}

export default Home;
