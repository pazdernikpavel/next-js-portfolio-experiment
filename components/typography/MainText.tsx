interface TextType {
  text: string;
  type: "normal" | "bold";
}

export default function MainText({
  textChunks,
  className = "",
}: {
  textChunks: TextType[];
  className?: string;
}) {
  return (
    <p className={className + " text-xl xl:text-3xl leading-normal"}>
      {textChunks.map((chunk) => {
        if (chunk.type === "bold") {
          return <strong key={chunk.text}>{chunk.text}</strong>;
        } else {
          return chunk.text;
        }
      })}
    </p>
  );
}
