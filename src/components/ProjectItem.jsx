import { createPortal } from "react-dom";

export default function ProjectItem({ title, image, onOpenProject, index }) {
  return (
    <div
      className={`h-64 w-72 cursor-pointer rounded-lg border-4 border-green-500 bg-opacity-0 bg-[url("https://fastly.picsum.photos/id/782/200/200.jpg?hmac=Nr26GoCvc_dj_OlbYWA8FscuVWhRo7Qa-f4z6gfbSOU")] bg-100% bg-center bg-no-repeat pt-4 text-center text-xl shadow-project transition-background-size duration-300 ease-in hover:bg-125%`}
      onClick={onOpenProject}
      index={index}>
      {title}
    </div>
  );
}
