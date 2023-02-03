import React from "react";
import { Link } from "react-router-dom";
import classes from "../../main.module.css";

const Home = () => {
  return (
    <section>
      <div className={classes.container}>
        <h1>Front-End Quiz</h1>
        <div className={classes["link-container"]}>
          <Link className={classes["links"]} to="/html">
            Html Quiz
          </Link>
          <Link className={classes["links"]} to="/css">
            CSS Quiz
          </Link>
          <Link className={classes["links"]} to="/js">
            JavaScript Quiz
          </Link>
          <Link className={classes["links"]} to="/react">
            React Quiz
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
