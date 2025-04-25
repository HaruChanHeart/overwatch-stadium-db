export interface HeroList {
    hero: HeroInfo[];
    language: { [key: string]: string };
}

export interface HeroInfo {
    id: string;
    role: number;
}