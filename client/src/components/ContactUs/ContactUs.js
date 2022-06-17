import React from "react";
import "./Dashboard_forum.css";
import search from "../../../../assets/dashboard_form/search-solid.png";

function Dashboard_form() {
  return (
    <div className="dashboard_inner_forum">
      <div className="position_container">
        <div className="dashboard_inner_forum_wrapper">
          <h1 className="position_rdn_chat">RDN Chat</h1>
          <p className="find_answers">
            Find answers, ask questions, and connect with our community of
            Dietitian Your Way Registered Dietitian Nutritionists around the
            country.
          </p>

          <div className="dashboard_inner_search_box">
            <input
              type="text"
              name="box"
              placeholder="Search or ask a question....."
              className="ask_question_box"
            />
            <img src={search} className="custom_dashboard_inner_search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard_form;
