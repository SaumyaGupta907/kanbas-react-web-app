import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import * as client from "./client";
import { BsGripVertical } from "react-icons/bs";
import {useState, useEffect } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
    from "./reducer";
import { useSelector, useDispatch } from "react-redux";

 export default function Modules() {
  const { id } = useParams();
  const [moduleName, setModuleName] = useState<string>("");

  // const [modules, setModules] = useState<any[]>(db.modules);
  // const addModule = () => {
  //     setModules([...modules, {_id: new Date().getTime().toString(),
  //       name: moduleName, course: id, lessons: []}]);
  //     setModuleName("");
  // }
  // const deleteModule = (moduleId: string) => {
  //     setModules(modules.filter((m) => m._id !== moduleId));
  // }
  // const editModule = (moduleId: string) => {
  //     setModules(modules.map((m) => (m._id === moduleId ? {...m, editing: true} : m)));
  // }
  // const updateModule = (module: any) => {
  //     setModules(modules.map((m) => (m._id === module._id ? module : m)));
  // }

  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const removeModule = async (moduleId: string) => {
    await client.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModule = async (module: any) => {
    const newModule = await client.createModule(id as string, module);
    dispatch(addModule(newModule));
  };

  const fetchModules = async () => {
    const modules = await client.findModulesForCourse(id as string);
    dispatch(setModules(modules));
  };

  const saveModule = async (module: any) => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    fetchModules();
  }, []);


  return (
      <div id="wd-modules">
          <ModulesControls
              setModuleName={setModuleName} moduleName={moduleName}
              addModule={() => {
                createModule({ name: moduleName, course: id });
                  setModuleName("");
              }}
          /><br /><br /><br /><br />
          <div>
            <ul id="wd-modules" className="list-group rounded-0">
            {modules.filter((module: any) => module.course === id).map((module: any) => (
              <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray" style={{borderLeft: "solid thick green"}}>
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" />
                  {!module.editing && module.name}
                  {module.editing && (
                      <input className="form-control w-50 d-inline-block"
                             onChange={(e) => saveModule({ ...module, name: e.target.value })}
                             onKeyDown={(e) => {
                                 if(e.key === "Enter") {
                                    saveModule({ ...module, editing: false });
                                 }
                             }} value={module.name}/>
                  )}
                  <ModuleControlButtons moduleId={module._id}
                                        deleteModule={(moduleId) => {removeModule(moduleId);}}
                                        editModule={(moduleId) => dispatch(editModule(moduleId))}/>
                </div>
                {module.lessons && (
                    <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: any) => (
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <BsGripVertical className="me-2 fs-3" />{lesson.name}
                            <LessonControlButtons />
                        </li>
                        ))}
                    </ul>
                    )}
              </li>
            ))}
            </ul>
          </div>
      </div>
 );}
