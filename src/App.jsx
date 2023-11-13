import { useState } from "react";
import JobSearch from "./Components/JobSearch";
import JobsCard from "./Components/JobsCard";

export default function App() {
  const [BgImage, setBgImage] = useState(false);
  return (
    <div className="bg-cyan-50">
      <div className="w-full bg-teal-600">
        <img src="images/bg-header-desktop.svg" alt="" />
      </div>
      <JobSearch />
      <JobsCard />
    </div>
  );
}
