import { useDispatch, useSelector } from "react-redux"
import { nanoid } from "nanoid"
import { removeLanguagesFilters, removeRoleFilters, removeLevelFilters, removeToolsFilters, removeAll } from "../features/job"

export default function JobSearch() {

    const jobList = useSelector(state => state.job)
    const dispatch = useDispatch()
    const open = jobList.RolesFilters.length === 0 && jobList.LevelFilters.length === 0 && jobList.LanguageFilters.length === 0 && jobList.ToolsFilters.length === 0


    return (
        !open &&
        < div className="w-3/4 mx-auto bg-white py-4 flex justify-between px-6 relative -translate-y-1/2 rounded" >

            <div className="w-2/3 flex flex-row flex-wrap">

                {jobList.RolesFilters.length > 0 &&
                    jobList.RolesFilters.map(role => (
                        <div className="rounded bg-slate-100 flex items-center" key={nanoid(4)}>
                            <span className="font-bold text-cyan-700 ml-3 pr-2">{role.name}</span>
                            <span
                                onClick={() => dispatch(removeRoleFilters(role.id))}
                                className="bg-cyan-700 text-white px-2 font-bold hover:bg-black hover:text-white cursor-pointer">X</span>
                        </div>
                    ))
                }

                {jobList.LevelFilters.length > 0 &&
                    jobList.LevelFilters.map(level => (
                        <div className="rounded bg-slate-100 flex items-center ml-3" key={nanoid(4)}>
                            <span className="font-bold text-cyan-700 ml-3 bg-slate-100 px-2 text-sm">{level.name}</span>
                            <span
                                onClick={() => dispatch(removeLevelFilters(level.id))}
                                className="bg-cyan-700 text-white px-2 font-bold hover:bg-black hover:text-white cursor-pointer">X</span>
                        </div>
                    ))
                }

                {jobList.LanguageFilters.length > 0 &&
                    jobList.LanguageFilters.map(language => (
                        <div className="rounded bg-slate-100 flex items-center ml-3" key={nanoid(4)}>
                            <span className="font-bold text-cyan-700 ml-3 bg-slate-100 px-2 text-sm">{language.name}</span>
                            <span
                                onClick={() => dispatch(removeLanguagesFilters(language.id))}
                                className="bg-cyan-700 text-white px-2 font-bold hover:bg-black hover:text-white cursor-pointer">X</span>
                        </div>
                    ))
                }

                {jobList.ToolsFilters.length > 0 &&
                    jobList.ToolsFilters.map(tool => (
                        <div className="rounded bg-slate-100 flex items-center" key={nanoid(4)}>
                            <span className="font-bold text-cyan-700 ml-3 bg-slate-100 px-2 text-sm">{tool.name}</span>
                            <span
                                onClick={() => dispatch(removeToolsFilters(tool.id))}
                                className="bg-cyan-700 text-white px-2 font-bold hover:bg-black hover:text-white cursor-pointer">X</span>
                        </div>
                    ))
                }

            </div>
            <div className="flex items-center">
                <p
                    onClick={() => dispatch(removeAll())}
                    className="text-cyan-700 hover:border-b hover:border-b-cyan-700 cursor-pointer font-semibold">Clear</p>
            </div>
        </div >
    )
}