export default function CertificationItem({ img, link, title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-md bg-blue-950 p-8 shadow-lg">
      <a href={link} target="_blank" rel="noreferrer">
        <h3 className="text-center text-xl underline underline-offset-4">
          {title}
        </h3>
      </a>
      <img src={img} className="h-56 w-56" />
    </div>
  );
}
