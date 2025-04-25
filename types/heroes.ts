// types/Skill.ts
export interface Hero {
  ability: SkillData[];
  power: PowerData[];
  survive: SkillData[];
  weapon: SkillData[];
}

export type DescriptionBlock = {
  type: "text" | "number" | "cooldown" | "ability" | "strong";
  content: string;
};

export interface ItemStat {
  type: string;
  value: number;
}

export interface ItemExtra {
  value: string;
  content: string;
}

export interface SkillData {
  name: string;
  image: string;
  description: DescriptionBlock[] | null;
  grade: number;
  cost: number;
  stats: ItemStat[] | null;
  extras: ItemExtra[] | null;
}

export interface PowerData {
  name: string;
  image: string;
  description: DescriptionBlock[];
}