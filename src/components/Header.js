import React from 'react';
import frend from "../assets/frend.jpg";

export default function Header() {
    return (
        <header>
        <div className="jumbotron bg-secondary text-white p-3">
            <div className="container p-4" style={{marginTop:"100px"}}>
                <div className="row">
                    <div className="col-md-6">
                        <h1 className="display-3 fst-italic">Front-End Development</h1>
                        <p>
                        Full-stack web development is creating and maintaining complete web applications and websites, which require both front-end and back-end skills. Front-end refers to the client-side of the application that users can see and interact with, whereas back-end refers to the server-side of the application, which is everything that happens behind the scenes. Front-end development involves transforming back-end code into something that is easily navigable to the user via a graphical presentation. The front-end of a website includes all facets and external elements that the users interact with. The foundation technology of the front-end development is a combination of HTML, CSS, and JavaScript.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <img src={frend} style={{width:"100%"}}></img>
                    </div>
                </div>
            </div>
        </div>
    </header>
    )
}
