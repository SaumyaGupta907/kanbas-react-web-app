export default function Modules() {
    return (
        <div>
            {/* Collapse All button, View Progress button, etc. */}

            <button id="wd-collapse-button" type="button">
                Collapse All
            </button>
            <button id="wd-progress-button" type="button">
                View Progress
            </button>
            <button id="wd-progress-all-button" type="button">
                Publish All
            </button>
            <button id="wd-module-button" type="button">
                Module
            </button>

            <ul id="wd-modules">
                <li className="wd-module">
                    <div className="wd-title">Week 1</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to the course</li>
                                <li className="wd-content-item">Learn what is Web Development</li>
                            </ul>
                        </li>
                        <li>
                            <span className="wd-title">READING</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Full Stack Developer - chapter 1 - Introduction</li>
                                <li className="wd-content-item">Full Stack Developer - chapter 2 - Creating User</li>
                            </ul>
                        </li>
                        <li>
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to Web Development</li>
                                <li className="wd-content-item">Creating an HTTP server with Node.js</li>
                                <li className="wd-content-item">Creating a React Application</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li className="wd-module">
                    <div className="wd-title">Week 2</div>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">LEARNING OBJECTIVES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Learn how to create user interfaces with HTML</li>
                                <li className="wd-content-item">Deploy the assignment to Netlify</li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="wd-lessons">
                        <li className="wd-lesson">
                            <span className="wd-title">SLIDES</span>
                            <ul className="wd-content">
                                <li className="wd-content-item">Introduction to HTML and the DOM</li>
                                <li className="wd-content-item">Formatting Web content with Headings</li>
                            </ul>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );}
