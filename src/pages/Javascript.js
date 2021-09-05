import { useHistory } from "react-router";
import logo_js from "../assets/logo_js.png";

const Javascript = () => {
  let history = useHistory();
  return (
    <div className="container my-5">
      <div className="header text-center mb-5">
        <img src={logo_js} style={{ marginTop: "100px" }}></img>
        <h5>Javascript</h5>
      </div>
      <div className="html-body">
        <p>
          JavaScript (JS) is a lightweight, interpreted, or just-in-time
          compiled programming language with first-class functions. While it is
          most well-known as the scripting language for Web pages, many
          non-browser environments also use it, such as Node.js, Apache CouchDB
          and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm,
          single-threaded, dynamic language, supporting object-oriented,
          imperative, and declarative (e.g. functional programming) styles. Read
          more about JavaScript.
        </p>
        <p>
          This section is dedicated to the JavaScript language itself, and not
          the parts that are specific to Web pages or other host environments.
          For information about API specifics to Web pages, please see Web APIs
          and DOM.
        </p>
        <p>
          The standards for JavaScript are the ECMAScript Language Specification
          (ECMA-262) and the ECMAScript Internationalization API specification
          (ECMA-402). The JavaScript documentation throughout MDN is based on
          the latest draft versions of ECMA-262 and ECMA-402. And in cases where
          some proposals for new ECMAScript features have already been
          implemented in browsers, documentation and examples in MDN articles
          may use some of those new features.
        </p>
        <p>
          Do not confuse JavaScript with the Java programming language. Both
          "Java" and "JavaScript" are trademarks or registered trademarks of
          Oracle in the U.S. and other countries. However, the two programming
          languages have very different syntax, semantics, and use.
        </p>
        <button onClick={() => history.goBack()} className="btn btn-primary">
          Return to home
        </button>
      </div>
    </div>
  );
};
export default Javascript;
