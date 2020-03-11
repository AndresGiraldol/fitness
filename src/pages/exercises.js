import React from "react";
import ExcerciseList from "../components/ExcerciseList";
import Welcome from "../components/Welcome";
import AddButton from "../components/AddButton";

const Exercises = ({ data }) => (
  <React.Fragment>
    <Welcome username="Raúl" />
    <ExcerciseList exercises={data} />
    <AddButton />
  </React.Fragment>
);

export default Exercises;
