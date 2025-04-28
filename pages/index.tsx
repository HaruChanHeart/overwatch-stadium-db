"use client";
import fs from "fs/promises";
import path from "path";

import Link from "next/link";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

import Footer from "@/components/footer";
import CustomNavBar from "@/components/navbar";

import { Image } from "@heroui/react";
import { HeroInfo, HeroList } from "@/types/list";

export default function Home({ herolist }: { herolist: HeroList }) {
  const { locale } = useRouter(); // Get the current locale

  return (
    <div className="bg-black min-w-screen min-h-screen flex flex-col">
      <CustomNavBar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 grow">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
          {herolist.hero.map((hero: HeroInfo) => (
            <Link key={hero.id} href={`/${locale}/heroes/${hero.id}`}>
              <div className="flex flex-col justify-center items-center gap-2">
                <Image
                  src={`/assets/heroes/${hero.id}.webp`}
                  alt={herolist.language?.[hero.id] || "Unknown"}
                  className="bg-linear-to-b from-indigo-400 to-blue-200 border-2 border-white rounded"
                />
                <div className="text-xl font-bold text-white">
                  {herolist.language?.[hero.id] ?? "Unknown"}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const locale = context.locale || "ko"; // multilingual support

  async function getJson<T>(filePath: string): Promise<T | null> {
    try {
      const content = await fs.readFile(filePath, "utf-8");
      return JSON.parse(content) as T;
    } catch (err) {
      if ((err as NodeJS.ErrnoException).code === "ENOENT") {
        return null;
      }
      throw err;
    }
  }

  const getMergedJson = async (
    filename: string,
    locale: string | null
  ): Promise<object[] | object> => {
    const baseDir = path.join(process.cwd(), "json", "list");
  
    const tryRead = async (loc: string | null): Promise<object[] | object | null> => {
      const suffix = loc ? `.${loc}` : "";
      return await getJson(path.join(baseDir, `${filename}${suffix}.json`));
    };
  
    if (locale) {
      const localizedData = await tryRead(locale);
      if (localizedData !== null) {
        return localizedData;
      }
  
      // fallback to Korean if localized file not found
      const fallbackData = await tryRead("ko");
      return fallbackData || {};
    }
  
    // no locale provided, try default (no suffix)
    const defaultData = await tryRead(null);
    return [...(Array.isArray(defaultData) ? defaultData : [])];
  };
  

  const herolist: HeroList = {
    hero: (await getMergedJson("hero", null)) as HeroInfo[],
    language: (await getMergedJson("hero", locale)) as { [key: string]: string },
  };

  return {
    props: {
      herolist,
    },
  };
};
