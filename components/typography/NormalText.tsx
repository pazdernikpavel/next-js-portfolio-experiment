interface TextType {
  text: string;
  type: "normal" | "bold";
}

export default function NormalText({ textChunks }: { textChunks: TextType[] }) {
  return (
    <p className="text-base xl:text-xl leading-normal">
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
