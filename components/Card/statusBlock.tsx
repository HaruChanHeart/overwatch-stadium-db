import { ItemStat } from "@/types/heroes";
import { Image } from "@heroui/image";

export default function StatDescription({
  description,
}: {
  description: ItemStat[];
}) {
  return description.map((_blk) => {
    switch (_blk.type) {
      case "weaponDamage":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/wpDamage.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Weapon Damage"
              className="rounded-none"
            />
            <div className=" text-red-400">{_blk.value * 100}%</div>
            <div>무기 공격력</div>
          </div>
        );
      case "abilityPower":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/abilDamage.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Ability Damage"
              className="rounded-none"
            />
            <div className=" text-purple-400">{_blk.value * 100}%</div>
            <div>기술 위력</div>
          </div>
        );
      case "attackSpeed":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/atkSpeed.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Attack Speed"
              className="rounded-none"
            />
            <div className=" text-orange-400">{_blk.value * 100}%</div>
            <div>공격 속도</div>
          </div>
        );
      case "cooldownReduction":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/cooldown.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Cooldown Reduction"
              className="rounded-none"
            />
            <div className=" text-blue-400">{_blk.value * 100}%</div>
            <div>재사용 대기시간 감소</div>
          </div>
        );
      case "maxAmmo":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/maxAmmo.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Max Ammo"
              className="rounded-none"
            />
            <div className=" text-green-400">{_blk.value * 100}%</div>
            <div>최대 탄약</div>
          </div>
        );
      case "weaponLifeSteal":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/wpLifesteal.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Weapon Lifesteal"
              className="rounded-none"
            />
            <div className=" text-yellow-400">{_blk.value * 100}%</div>
            <div>무기 생명력 흡수</div>
          </div>
        );
      case "abilityLifeSteal":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/abilLifeSteal.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Ability Lifesteal"
              className="rounded-none"
            />
            <div className=" text-yellow-400">{_blk.value * 100}%</div>
            <div>기술 생명력 흡수</div>
          </div>
        );
      case "movementSpeed":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/mvSpeed.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Movement Speed"
              className="rounded-none"
            />
            <div className=" text-green-400">{_blk.value * 100}%</div>
            <div>이동 속도</div>
          </div>
        );
      case "reloadSpeed":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/reloadSpeed.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Reload Speed"
              className="rounded-none"
            />
            <div className=" text-orange-400">{_blk.value * 100}%</div>
            <div>재장전 속도</div>
          </div>
        );
      case "meleeDamage":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/meleeDamage.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Melee Damage"
              className="rounded-none"
            />
            <div className=" text-slate-300">{_blk.value * 100}%</div>
            <div>근접 공격력</div>
          </div>
        );
      case "criticalDamage":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/critical.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Melee Damage"
              className="rounded-none"
            />
            <div className=" text-red-400">{_blk.value * 100}%</div>
            <div>치명타 피해</div>
          </div>
        );
      case "health":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/health.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Health"
              className="rounded-none"
            />
            <div className=" text-slate-300">
              {_blk.value < 1 && _blk.value > -1 ? `${_blk.value * 100}%` : _blk.value}
            </div>
            <div>생명력</div>
          </div>
        );
      case "armor":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/health.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Armor"
              className="rounded-none"
            />
            <div className=" text-orange-300">
            {_blk.value < 1 && _blk.value > -1 ? `${_blk.value * 100}%` : _blk.value}
            </div>
            <div>방어구</div>
          </div>
        );
      case "shield":
        return (
          <div className="flex flex-row gap-1 justify-start items-center font-bold text-white">
            <Image
              src="/assets/icons/health.svg"
              height={"1rem"}
              width={"fit-content"}
              alt="Shield"
              className="rounded-none"
            />
            <div className=" text-sky-300">
              {_blk.value < 1 && _blk.value > -1 ? `${_blk.value * 100}%` : _blk.value}
            </div>
            <div>보호막</div>
          </div>
        );
      default:
        return null;
    }
  });
}
