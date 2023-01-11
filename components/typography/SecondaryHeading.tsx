export default function SecondaryHeading({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  return (
    <h2
      className={
        className +
        " font-komu-b uppercase text-5xl xl:text-7xl text-secondary-color"
      }
    >
      {text}
    </h2>
  );
}
