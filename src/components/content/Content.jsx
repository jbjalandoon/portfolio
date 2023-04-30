import { useContext } from "react";
import Card from "./Card";
import { ViewContext } from "../../store/ViewContext";

export default function Content() {
  const { view } = useContext(ViewContext);

  return (
    <div className='w-full md:max-w-4xl mt-7 my-10 lg:px-0 h-full'>
      {view === 0 && <Card>Home</Card>}
      {view === 1 && <Card>About Me</Card>}
      {view === 2 && <Card>Projects</Card>}
      {view === 3 && <Card>Contact Me</Card>}
    </div>
  );
}
