import { Image } from "@heroui/image";
import { DescriptionBlock } from "@/types/heroes";

export default function SkillDescription({
  description,
}: {
  description: DescriptionBlock[];
}) {
  return (
    <p className="text-md text-zinc-300 leading-relaxed">
      {description.map((_blk, _idx) => {
        switch (_blk.type) {
          case "number":
            return (
              <span key={_idx} className="text-orange-400 font-bold">
                {_blk.content}
              </span>
            );
          case "cooldown":
            return (
              <span key={_idx} className="text-blue-400 font-bold">
                {_blk.content}
              </span>
            );
          case "ability":
            return (
              <span key={_idx} className="text-purple-400 font-bold">
                <Image src="/assets/icons/abilDamage.svg" className="w-auto h-auto" alt="Ability Damage" /> {_blk.content}
              </span>
            );
          case "strong":
            return (
              <span key={_idx} className="text-white font-bold">
                {_blk.content}
              </span>
            );
          case "text":
          default:
            return <span key={_idx}>{_blk.content}</span>;
        }
      })}
    </p>
  );
}
