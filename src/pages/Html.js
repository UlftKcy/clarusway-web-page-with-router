import { useHistory } from "react-router";
import logo_html from "../assets/logo_html.png";

const Html = () => {
  let history = useHistory();
  return (
    <div className="container my-5">
      <div className="header text-center mb-5">
        <img src={logo_html} style={{ marginTop: "100px" }}></img>
        <h5>HTML5 Markup</h5>
      </div>
      <div className="html-body">
        <p>
          HTML (HyperText Markup Language) is a descriptive language that
          specifies webpage structure.HTML5 is a markup language used for
          structuring and presenting content on the World Wide Web. It is the
          fifth and last major HTML version that is a World Wide Web Consortium
          (W3C) recommendation. The current specification is known as the HTML
          Living Standard. It is maintained by the Web Hypertext Application
          Technology Working Group (WHATWG), a consortium of the major browser
          vendors (Apple, Google, Mozilla, and Microsoft).
        </p>
        <p>
          HTML5 was first released in a public-facing form on 22 January
          2008,[2] with a major update and "W3C Recommendation" status in
          October 2014.[4][5] Its goals were to improve the language with
          support for the latest multimedia and other new features; to keep the
          language both easily readable by humans and consistently understood by
          computers and devices such as web browsers, parsers, etc., without
          XHTML's rigidity; and to remain backward-compatible with older
          software. HTML5 is intended to subsume not only HTML 4 but also XHTML
          1 and DOM Level 2 HTML.
        </p>
        <p>
          HTML5 includes detailed processing models to encourage more
          interoperable implementations; it extends, improves, and rationalizes
          the markup available for documents and introduces markup and
          application programming interfaces (APIs) for complex web
          applications.For the same reasons, HTML5 is also a candidate for
          cross-platform mobile applications because it includes features
          designed with low-powered devices in mind.
        </p>
        <button onClick={() => history.goBack()} className="btn btn-primary">
          Return to home
        </button>
      </div>
    </div>
  );
};
export default Html;
