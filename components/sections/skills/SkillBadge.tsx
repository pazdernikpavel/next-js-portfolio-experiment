export default function SkillBadge({ skill }: { skill: string }) {
  return (
    <span className="bg-white px-4 py-2 xl:px-8 xl:py-4 rounded-full xl:text-lg uppercase select-none shadow-md hover:scale-110 transition-all hover:shadow-xl">
      {skill}
    </span>
  );
}
