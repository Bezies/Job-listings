import JobSearch from "./Components/JobSearch";
import JobsCard from "./Components/JobsCard";
import Header from "./Components/Header";

export default function App() {
  return (
    <div className="bg-black-squeeze-50">
      <Header />
      <JobSearch />
      <JobsCard />
    </div>
  );
}
