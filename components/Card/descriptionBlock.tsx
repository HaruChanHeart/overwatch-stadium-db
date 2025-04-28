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
          case "weaponDamage":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/wpDamage.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Weapon Damage"
                    className="rounded-none"
                  />
                </div>
                <span className=" text-red-400">{_blk.content}</span>
                <span>무기 공격력</span>
              </span>
            );
          case "abilityDamage":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/abilDamage.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Ability Damage"
                    className="rounded-none"
                  />
                </div>
                <span className=" text-purple-400">{_blk.content}</span>
                <span>기술 위력</span>
              </span>
            );
          case "attackSpeed":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/atkSpeed.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Attack Speed"
                    className="rounded-none"
                  />
                </div>
                <span className=" text-orange-400">{_blk.content}</span>
                <span>공격 속도</span>
              </span>
            );
          case "cooldownReduction":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/cooldown.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Cooldown Reduction"
                    className="rounded-none"
                  />
                </div>
                <span className=" text-blue-400">{_blk.content}</span>
                <span>재사용 대기시간 감소</span>
              </span>
            );
          case "movementSpeed":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/mvSpeed.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Movement Speed"
                    className="rounded-none"
                  />
                </div>
                <span className=" text-green-400">{_blk.content}</span>
                <span>이동 속도</span>
              </span>
            );
          case "health":
            return (
              <span className="inline-flex flex-row gap-1 justify-start items-baseline font-bold text-white">
                <div className="self-center">
                  <Image
                    src="/assets/icons/health.svg"
                    height={"1rem"}
                    width={"fit-content"}
                    alt="Melee Damage"
                    className="rounded-none self-center"
                  />
                </div>
                <span className=" text-slate-300">{_blk.content}</span>
                <span>생명력</span>
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
