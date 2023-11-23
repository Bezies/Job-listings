import { useDispatch, useSelector } from "react-redux";
import {
  getJobList,
  addLanguageFilters,
  addRolesFilters,
  addLevelFilters,
  addToolsFilters,
} from "../features/job";

export default function JobsCard() {
  const jobList = useSelector((state) => state.job);
  const dispatch = useDispatch();

  if (!jobList.jobData) {
    dispatch(getJobList());
  }

  return (
    <ul className="pt-10">
      {jobList.jobData &&
        jobList.jobData.length > 0 &&
        jobList.jobData
          .filter((item) =>
            item.role.includes(jobList.RolesFilters.map((el) => el.name))
          )
          .filter((item) =>
            item.level.includes(jobList.LevelFilters.map((el) => el.name))
          )
          .filter((item) =>
            jobList.LanguageFilters.every((el) =>
              item.languages.includes(el.name)
            )
          )
          .filter((item) =>
            jobList.ToolsFilters.every((el) => item.tools.includes(el.name))
          )
          .map((job) => (
            <li
              style={{ borderLeft: job.featured && "solid hsl(180, 29%, 50%)" }}
              className="relative bg-slate-50 w-3/4 mx-auto mb-10 rounded xl:flex xl:items-center xl:justify-between"
              key={job.id}
            >
              <div className="flex items-center">
                <img
                  className="absolute top-0 w-10 h-10 -translate-y-1/2 left-3 xl:w-20 xl:h-20 xl:relative xl:top-10"
                  src={job.logo}
                  alt={`${job.company} logo`}
                />

                <div className="md:ml-10 w-80">
                  <div className="flex pt-10 pl-3">
                    <p className="font-bold text-breaker-bay-400 ">
                      {job.company}
                    </p>
                    {job.new && (
                      <span className="ml-5 mr-2 text-slate-50 bg-cyan-700 text-xs md:text-sm font-bold rounded-full px-2 cursor-pointer flex items-center justify-center">
                        NEW!
                      </span>
                    )}
                    {job.featured && (
                      <span className="text-slate-50 bg-black font-bold text-xs md:text-sm rounded-full px-2 cursor-pointer flex items-center justify-center">
                        FEATURED
                      </span>
                    )}
                  </div>
                  <p className="text-black hover:text-breaker-bay-400 font-bold cursor-pointer pl-3 pt-3">
                    {job.position}
                  </p>
                  <div className="text-gray-400 flex items-center border-b md:border-none pb-5 pt-4 w-11/12 mx-auto">
                    <span>{job.postedAt}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400 mx-3 block"></span>
                    <span>{job.contract}</span>
                    <span className="w-1 h-1 rounded-full bg-gray-400 mx-3 block"></span>
                    <span>{job.location}</span>
                  </div>
                </div>
              </div>

              <div className="flex py-5 flex-wrap mr-3 items-center gap-2">
                <span
                  onClick={() => dispatch(addRolesFilters(job.role))}
                  className="font-bold text-breaker-bay-400 ml-3 bg-aqua-haze-50 px-2 rounded cursor-pointer hover:bg-cyan-700 hover:text-slate-50"
                >
                  {job.role}
                </span>

                <span
                  onClick={() => dispatch(addLevelFilters(job.level))}
                  className="font-bold text-breaker-bay-400 ml-3 bg-slate-100 px-2 rounded cursor-pointer hover:bg-cyan-700 hover:text-slate-50"
                >
                  {job.level}
                </span>

                {job.languages.map((language, index) => (
                  <span
                    onClick={() => dispatch(addLanguageFilters(language))}
                    key={index}
                    className="font-bold text-breaker-bay-400 ml-3 bg-slate-100 px-2 rounded cursor-pointer hover:bg-cyan-700 hover:text-slate-50"
                  >
                    {language}
                  </span>
                ))}
                {job.tools.length === undefined ? (
                  <span></span>
                ) : (
                  job.tools.map((tool, index) => (
                    <span
                      onClick={() => dispatch(addToolsFilters(tool))}
                      key={index}
                      className="font-bold text-breaker-bay-400 ml-3 bg-slate-100 px-2 rounded cursor-pointer hover:bg-cyan-700 hover:text-slate-50"
                    >
                      {tool}
                    </span>
                  ))
                )}
              </div>
            </li>
          ))}
    </ul>
  );
}
