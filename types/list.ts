export interface HeroList {
    hero: HeroInfo[];
    language: { [key: string]: string } | null;
}

export interface HeroInfo {
    id: string;
    role: number;
}