import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export default function Module() {
    
  const [module, setModule] = useState({
    id:2614, name:"NodeJS ReactJS", description:"Learning NodeJS and ReactJS",
    course:"Web Development",
  });
  const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

  return (
    <div id="wd-module">
    
      <a id="wd-get-module" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module`}>
        Get Module
      </a><hr/>

      <a id="wd-get-module-name" className="btn btn-primary"
         href={`${REMOTE_SERVER}/lab5/module/name`}>
        Get Module Name
      </a><hr/>
    </div>
);}
