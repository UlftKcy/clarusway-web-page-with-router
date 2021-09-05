import React from "react";
import logo_js from "../assets/logo_js.png";
import logo_css from "../assets/logo_css.png";
import logo_html from "../assets/logo_html.png";
import { useHistory } from "react-router";

export default function Main() {
  let history = useHistory();
  return (
    <main>
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-4">
            <div className="card mb-4 align-items-center">
              <img
                src={logo_html}
                style={{ width: "50%", objectFit: "cover" }}
                className="card-img-top img-thumbnail"
                alt="html"
              ></img>
              <div class="card-body">
                <h5 className="card-title">HTML5</h5>
                <p className="card-text">
                  HTML (HyperText Markup Language) is a descriptive language
                  that specifies webpage structure.
                </p>
                <button
                  onClick={() => {
                    history.push("/html");
                  }}
                  className="btn btn-primary"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 align-items-center">
              <img
                src={logo_css}
                style={{ width: "50%", objectFit: "cover" }}
                className="card-img-top img-thumbnail"
                alt="css"
              ></img>
              <div class="card-body">
                <h5 className="card-title">CSS</h5>
                <p className="card-text">
                  CSS (Cascading Style Sheets) is a declarative language that
                  controls how webpages look in the browser.
                </p>
                <button
                  onClick={() => {
                    history.push("/css");
                  }}
                  className="btn btn-primary"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 align-items-center">
              <img
                src={logo_js}
                style={{ width: "50%", objectFit: "cover" }}
                className="card-img-top img-thumbnail"
                alt="javascript"
              ></img>
              <div class="card-body">
                <h5 className="card-title">Javascript</h5>
                <p className="card-text">
                  JavaScript (JS) is a lightweight, interpreted, or just-in-time
                  compiled programming language.
                </p>
                <button
                  onClick={() => {
                    history.push("/javascript");
                  }}
                  className="btn btn-primary"
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
