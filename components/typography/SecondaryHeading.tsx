export default function SecondaryHeading({ text }: { text: string }) {
  return (
    <h2 className="font-komu-b uppercase text-5xl xl:text-7xl text-secondary-color">
      {text}
    </h2>
  );
}
