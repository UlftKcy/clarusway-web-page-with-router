import { useHistory } from "react-router";
import logo_css from "../assets/logo_css.png";

const Css = () => {
  let history = useHistory();
  return (
    <div className="container my-5">
      <div className="header text-center mb-5">
        <img src={logo_css} style={{ marginTop: "100px" }}></img>
        <h5>CSS</h5>
      </div>
      <div className="html-body">
        <p>
          CSS (Cascading Style Sheets) is a declarative language that controls
          how webpages look in the browser.CSS is designed to enable the
          separation of presentation and content, including layout, colors, and
          fonts.[3] This separation can improve content accessibility, provide
          more flexibility and control in the specification of presentation
          characteristics, enable multiple web pages to share formatting by
          specifying the relevant CSS in a separate .css file which reduces
          complexity and repetition in the structural content as well as
          enabling the .css file to be cached to improve the page load speed
          between the pages that share the file and its formatting.
        </p>
        <p>
          Separation of formatting and content also makes it feasible to present
          the same markup page in different styles for different rendering
          methods, such as on-screen, in print, by voice (via speech-based
          browser or screen reader), and on Braille-based tactile devices. CSS
          also has rules for alternate formatting if the content is accessed on
          a mobile device.
        </p>
        <p>
          The name cascading comes from the specified priority scheme to
          determine which style rule applies if more than one rule matches a
          particular element. This cascading priority scheme is predictable.
        </p>
        <button onClick={() => history.goBack()} className="btn btn-primary">
          Return to home
        </button>
      </div>
    </div>
  );
};
export default Css;
