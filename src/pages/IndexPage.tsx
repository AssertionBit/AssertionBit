import { Link } from "react-router-dom";
import TechnologiesTable from "../components/TechnologiesTable";

export default function IndexPage() {
    return (<>
        <main>
            <div className="container">
                <h1>Hi, I am AssertionBit!</h1>
                <p>
                    I am fullstack developer with experience of 3 years.
                    I am developing different software: from simple websites to hard system utilities requiring addition acceleration.
                    Full list of my works can be found in <Link to="/works">works</Link> section.
                </p>
            </div>
        </main>
        <section>
            <div className="container">
                <h2>My technical skills</h2>
                <p>Full list of my skills with time of usage:</p>
                <TechnologiesTable/>
            </div>
        </section>
    </>)
}