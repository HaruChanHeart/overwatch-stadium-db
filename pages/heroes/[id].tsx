"use client";
import fs from "fs/promises";
import path from "path";

import { useState } from "react";
import { GetStaticProps, GetStaticPaths } from "next";

interface HeroPageProps {
  id: string;
  skills: Hero;
  language: Record<string, SkillData>;
}

import {
  Hero,
  ItemExtra,
  ItemStat,
  PowerData,
  SkillData,
} from "@/types/heroes";

import { getTypeColorClass } from "@/components/Card/typeColor";
import StatDescription from "@/components/Card/statusBlock";
import ExtraDescription from "@/components/Card/extraBlock";
import SkillDescription from "@/components/Card/descriptionBlock";

import { Image, Tooltip } from "@heroui/react";
import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/modal";
import { Button } from "@heroui/button";
import { Tabs, Tab } from "@heroui/tabs";
import Footer from "@/components/footer";
import CustomNavBar from "@/components/navbar";

export default function HeroPage({ id, skills, language }: HeroPageProps) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isPowerOpen,
    onOpen: onPowerOpen,
    onOpenChange: onPowerOpenChange,
  } = useDisclosure();
  const [selectedSkill, setSelectedSkill] = useState<SkillData | null>(null);
  const [selectedPower, setSelectedPower] = useState<PowerData | null>(null);

  const handleOpenSkill = (skill: SkillData) => {
    setSelectedSkill(skill);
    onOpen();
  };

  const handleOpenPower = (power: PowerData) => {
    setSelectedPower(power);
    onPowerOpen();
  };

  return (
    <div className="bg-black text-white min-h-dvh flex flex-col">
      {/* NavBar */}
      <CustomNavBar />
      {/* Content */}
      <div className="flex flex-col md:flex-row bg-black text-white text-left container grow mx-auto max-w-7xl p-4 gap-5">
        {/* Hero Info */}
        <div className="hero-info flex flex-col min-w-75">
          <div className="flex flex-row justify-start items-end">
            <Image
              src={`/assets/heroes/${id}.webp`}
              alt={id}
              className="bg-linear-to-b from-indigo-400 to-blue-200 border-2 border-white h-20 w-20 rounded mr-3"
            />
            <div className="text-3xl font-bold">{id}</div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-4 items-center opacity-50">
            <strong>Health</strong>
            <span className="text-zinc-200">
              <span>300</span> <span className="text-green-300">+ 300</span>
            </span>
            <strong>Weapon Power</strong>
            <span className="text-red-400">+ 0%</span>
            <strong>Ability Power</strong>
            <span className="text-purple-400">+ 0%</span>
            <strong>Attack Speed</strong>
            <span className="text-orange-400">+ 0%</span>
            <strong>Cooldown Reduction</strong>
            <span className="text-blue-400">+ 0%</span>
          </div>
        </div>
        {/* Hero Skills */}
        <div className="hero-section flex flex-col justify-start items-center md:items-start w-full">
          <Tabs aria-label="Options">
            {(["weapon", "ability", "survive", "power"] as const).map((key) => {
              const data = skills[key];

              if (key === "power") {
                return (
                  <Tab key="power" title="Power">
                    <div className="grid grid-cols-3 mx-auto gap-2 h-max">
                      {skills.power?.map((power: PowerData, index: number) => (
                        <div key={index} className="hero-power">
                          {/* Desktop Feature */}
                          <Tooltip
                            content={
                              <div className="power-card flex flex-col items-start gap-2">
                                <div className="flex flex-row justify-start items-end w-full">
                                  <Image
                                    src={`/assets/skills/${power.image}.webp`}
                                    alt={language[power.image].name}
                                    className="h-10, w-10 rounded-full mr-3"
                                  />
                                  <div className="power-name font-bold text-2xl text-white mr-auto">
                                    {language[power.image].name}
                                  </div>
                                </div>
                                <SkillDescription
                                  description={
                                    language[power.image].description || []
                                  }
                                />
                              </div>
                            }
                            classNames={{
                              base: ["before:bg-zinc-800"],
                              content: [
                                "max-w-100 p-4 rounded-md",
                                "border-1.5 border-zinc-800",
                                `bg-linear-45 from-zinc-950 via-zinc-950 via-80% to-orange-950
                                )}`,
                              ],
                            }}
                          >
                            <Image
                              src={`/assets/skills/${power.image}.webp`}
                              alt={power.name}
                              className="h-20, w-20 rounded-full hidden md:block"
                            />
                          </Tooltip>
                          {/* Mobile Feature */}
                          <Image
                            src={`/assets/skills/${power.image}.webp`}
                            alt={power.name}
                            onClick={() => handleOpenPower(power)}
                            key={power.image}
                            className="h-20, w-20 rounded md:hidden"
                          />
                        </div>
                      ))}
                    </div>
                  </Tab>
                );
              }

              return (
                <Tab key={key} title={key} className="w-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                    {[1, 2, 3].map((grade: number) => (
                      <div
                        key={grade}
                        className="grid grid-cols-3 mx-auto gap-4 h-max"
                      >
                        {data
                          .filter(
                            (value) => "grade" in value && value.grade === grade
                          )
                          .map((value, index: number) => (
                            <div key={index}>
                              {/* Desktop Feature */}
                              <Tooltip
                                content={
                                  <div className="power-card flex flex-col items-start gap-2">
                                    <div className="flex flex-row justify-start items-end w-full">
                                      <Image
                                        src={`/assets/skills/${value.image}.webp`}
                                        alt={language[value.image].name}
                                        className="h-10, w-10 rounded-full mr-3"
                                      />
                                      <div className="power-name font-bold text-2xl text-white mr-auto">
                                        {language[value.image].name}
                                      </div>
                                    </div>
                                    <div className="flex flex-col gap-1 font-bold text-white">
                                      {"stats" in value && value.stats
                                        ? value.stats.map((stat: ItemStat) => (
                                            <StatDescription
                                              key={stat.type}
                                              description={[stat]}
                                            />
                                          ))
                                        : null}
                                      {"extras" in value && value.extras
                                        ? value.extras.map(
                                            (
                                              extra: ItemExtra,
                                              _idx: number
                                            ) => (
                                              <ExtraDescription
                                                key={_idx}
                                                value={[extra.value]}
                                                description={
                                                  language[value.image].extras
                                                }
                                              />
                                            )
                                          )
                                        : null}
                                    </div>
                                    {language[value.image].description ? (
                                      <SkillDescription
                                        description={
                                          language[value.image].description ||
                                          []
                                        }
                                      />
                                    ) : null}
                                    <div className="flex flex-row justify-center items-center gap-1 font-bold text-white">
                                      <Image
                                        src="/assets/icons/cash.svg"
                                        height={"1rem"}
                                        width={"fit-content"}
                                        alt="Stadium Cash"
                                        className="rounded-none"
                                      />
                                      {"cost" in value && (
                                        <span>{value.cost}</span>
                                      )}
                                    </div>
                                  </div>
                                }
                                classNames={{
                                  base: ["before:bg-zinc-800"],
                                  content: [
                                    "max-w-100 p-4 rounded-md",
                                    "border-1.5 border-zinc-800",
                                    `bg-linear-45 from-zinc-950 via-zinc-950 via-80% to-${getTypeColorClass(
                                      "grade" in value ? value.grade : 3
                                    )}`,
                                  ],
                                }}
                              >
                                <Image
                                  src={`/assets/skills/${value.image}.webp`}
                                  alt={value.name}
                                  className="h-20, w-20 rounded-full hidden md:block"
                                />
                              </Tooltip>
                              {/* Mobile Feature */}
                              <Image
                                src={`/assets/skills/${value.image}.webp`}
                                alt={value.name}
                                onClick={() => {
                                  if ("grade" in value) {
                                    handleOpenSkill(value);
                                  }
                                }}
                                key={value.image}
                                className="h-20, w-20 rounded-full md:hidden"
                              />
                            </div>
                          ))}
                      </div>
                    ))}
                  </div>
                </Tab>
              );
            })}
          </Tabs>
        </div>
        {/* Modal for Skill Details in Mobile */}
        {isOpen && selectedSkill && (
          <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            placement="bottom-center"
            scrollBehavior="inside"
            classNames={{
              base: [
                "max-w-100 pt-4 rounded-md",
                "border-1.5 border-zinc-800",
                `bg-linear-45 from-zinc-950 via-zinc-950 via-80% to-${getTypeColorClass(
                  selectedSkill.grade
                )}`,
              ],
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <div className="power-card flex flex-col items-start gap-2">
                      <div className="flex flex-row justify-start items-end w-full">
                        <Image
                          src={`/assets/skills/${selectedSkill?.image}.webp`}
                          alt={language[selectedSkill?.image].name}
                          className="h-10, w-10 rounded-full mr-3"
                        />
                        <div className="power-name font-bold text-2xl text-white mr-auto">
                          {language[selectedSkill?.image].name}
                        </div>
                      </div>
                      <div className="flex flex-col gap-1 font-bold text-white">
                        {selectedSkill?.stats
                          ? selectedSkill?.stats?.map((stat) => (
                              <StatDescription
                                key={stat.type}
                                description={[stat]}
                              />
                            ))
                          : null}
                        {selectedSkill?.extras
                          ? selectedSkill?.extras?.map(
                              (extra) => (
                                <ExtraDescription
                                  key={extra.content}
                                  value={[extra.value]}
                                  description={
                                    language[selectedSkill?.image].extras
                                  }
                                />
                              )
                            )
                          : null}
                      </div>
                      {language[selectedSkill?.image].description ? (
                        <SkillDescription
                          description={
                            language[selectedSkill?.image].description || []
                          }
                        />
                      ) : null}
                      <div className="flex flex-row justify-center items-center gap-1 font-bold text-white">
                        <Image
                          src="/assets/icons/cash.svg"
                          height={"1rem"}
                          width={"fit-content"}
                          alt="Stadium Cash"
                          className="rounded-none"
                        />
                        <span>{selectedSkill?.cost}</span>
                      </div>
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
        {/* Modal for Power Details in Mobile */}
        {isPowerOpen && selectedPower && (
          <Modal
            isDismissable={false}
            isKeyboardDismissDisabled={true}
            isOpen={isPowerOpen}
            onOpenChange={onPowerOpenChange}
            placement="bottom-center"
            scrollBehavior="inside"
            classNames={{
              base: [
                "max-w-100 pt-4 rounded-md",
                "border-1.5 border-zinc-800",
                `bg-linear-45 from-zinc-950 via-zinc-950 via-80% to-orange-950`,
              ],
            }}
          >
            <ModalContent>
              {(onClose) => (
                <>
                  <ModalBody>
                    <div className="power-card flex flex-col items-start gap-2">
                      <div className="flex flex-row justify-start items-end w-full">
                        <Image
                          src={`/assets/skills/${selectedPower?.image}.webp`}
                          alt={language[selectedPower?.image].name}
                          className="h-10, w-10 rounded-full mr-3"
                        />
                        <div className="power-name font-bold text-2xl text-white mr-auto">
                          {language[selectedPower?.image].name}
                        </div>
                      </div>
                      {language[selectedPower?.image].description ? (
                        <SkillDescription
                          description={
                            language[selectedPower?.image].description || []
                          }
                        />
                      ) : null}
                    </div>
                  </ModalBody>
                  <ModalFooter>
                    <Button color="danger" variant="light" onPress={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </>
              )}
            </ModalContent>
          </Modal>
        )}
      </div>
      {/* Initialize Color */}
      <div className="none to-zinc-800" />
      <div className="none to-blue-950" />
      <div className="none to-purple-950" />
      <Footer />
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
  const heroDir = path.join(process.cwd(), "json", "heroes");
  const allDirs = await fs.readdir(heroDir);

  const heroIds = allDirs.filter(
    (name) => !name.startsWith(".") && !name.endsWith(".DS_Store")
  );

  const paths = locales
    ? locales.flatMap((locale) =>
        heroIds.map((id) => ({
          params: { id },
          locale,
        }))
      )
    : heroIds.map((id) => ({
        params: { id },
      }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
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
    heroId: string,
    filename: string,
    locale: string
  ): Promise<object[]> => {
    const baseDir = path.join(process.cwd(), "json", "heroes");
    const heroPath = path.join(baseDir, heroId);
    const globalPath = path.join(baseDir, "global");

    const tryRead = async (folder: string) => {
      const localized = path.join(folder, `${filename}.${locale}.json`);
      const fallback = path.join(folder, `${filename}.json`);
      return (await getJson(localized)) ?? (await getJson(fallback)) ?? [];
    };

    const globalData = await tryRead(globalPath);
    const heroData = await tryRead(heroPath);

    return [
      ...(Array.isArray(globalData) ? globalData : []),
      ...(Array.isArray(heroData) ? heroData : []),
    ];
  };

  const getLanguageJson = async (
    heroId: string,
    locale: string
  ): Promise<Record<string, string>> => {
    const baseDir = path.join(process.cwd(), "json", "heroes");
    const heroPath = path.join(baseDir, heroId);
    const globalPath = path.join(baseDir, "global");

    const tryRead = async (folder: string) => {
      const localized = path.join(folder, `locale.${locale}.json`);
      const fallback = path.join(folder, `locale.json`);
      return (await getJson(localized)) ?? (await getJson(fallback)) ?? {};
    };

    const globalLang = await tryRead(globalPath);
    const heroLang = await tryRead(heroPath);

    return {
      ...(globalLang ?? {}),
      ...(heroLang ?? {}),
    };
  };

  const language = await getLanguageJson(id, locale);

  const skills: Hero = {
    ability: (await getMergedJson(id, "ability", locale)) as SkillData[],
    power: (await getMergedJson(id, "power", locale)) as PowerData[],
    survive: (await getMergedJson(id, "survive", locale)) as SkillData[],
    weapon: (await getMergedJson(id, "weapon", locale)) as SkillData[],
  };

  return {
    props: {
      id,
      skills,
      language,
    },
  };
};
