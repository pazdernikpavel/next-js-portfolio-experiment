export default function SkillBadge({
  skill,
  className,
}: {
  skill: string;
  className?: string;
}) {
  return (
    <span
      className={
        className +
        " bg-white px-4 py-2 xl:px-8 xl:py-4 rounded-full xl:text-lg uppercase select-none shadow-md skill"
      }
    >
      {skill}
    </span>
  );
}
