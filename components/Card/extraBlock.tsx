import { ItemExtra } from "@/types/heroes";
import { Image } from "@heroui/image";

export default function ExtraDescription({
  value,
  description,
}: {
  value: string[];
  description: ItemExtra[] | null;
}) {
  return value.map((_blk, _idx: number) => {
    return (
      <div key={_idx} className="flex flex-row gap-1 justify-start items-center font-bold text-white">
        <Image
          src="/assets/icons/extra.svg"
          height={"1rem"}
          width={"fit-content"}
          alt="Extra Stat"
        />
        <div className=" text-fuchsia-300">{_blk}</div>
        <div>{description ? description[_idx]?.content : null}</div>
      </div>
    );
  });
}
