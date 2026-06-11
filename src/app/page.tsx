import Link from "next/link";
import { MainLayout } from "../layouts/main/main-layout";

const featuredWork = [
  {
    title: "Web Application",
    description: "Next.js と Django を中心に、使う人の流れを大切にした実装をします。",
  },
  {
    title: "Portfolio Design",
    description: "見やすさと余白を整えて、作品や考えがまっすぐ届く画面を作ります。",
  },
  {
    title: "Learning Lab",
    description: "小さな試作を重ねながら、アイデアを動くものへ育てていきます。",
  },
];

const stats = [
  { label: "Focus", value: "Frontend" },
  { label: "Stack", value: "Next.js" },
  { label: "Base", value: "Japan" },
];

export default function Home() {
  return (
    <MainLayout>
      <section className="min-h-screen overflow-hidden bg-[#f7f3ea] text-neutral-950">
        <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-10 sm:px-8 lg:px-10">
          <div className="grid flex-1 items-center gap-12 py-12 lg:grid-cols-[1.05fr_0.95fr] lg:py-16">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-neutral-950/15 bg-white/55 px-4 py-2 text-sm font-medium text-neutral-700">
                Miki Kogoe / Web Developer Portfolio
              </p>
              <h1 className="text-5xl font-black leading-[0.98] tracking-normal text-neutral-950 sm:text-6xl lg:text-7xl">
                Ideas shaped into clear, useful web experiences.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-neutral-700 sm:text-lg">
                こんにちは、Miki Kogoe です。学びと実装を行き来しながら、
                触って気持ちよく、目的まで迷わないWebサイトやアプリを作っています。
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/project"
                  className="inline-flex min-h-12 items-center justify-center rounded-md bg-neutral-950 px-6 text-sm font-bold text-white transition hover:bg-neutral-800"
                >
                  View Projects
                </Link>
                <Link
                  href="/about"
                  className="inline-flex min-h-12 items-center justify-center rounded-md border border-neutral-950/20 bg-white/60 px-6 text-sm font-bold text-neutral-950 transition hover:border-neutral-950/40 hover:bg-white"
                >
                  About Miki
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-lg border border-neutral-950/10 bg-neutral-950 p-5 shadow-2xl shadow-neutral-950/15">
                <div className="flex h-full flex-col justify-between rounded-md bg-[#d9ecff] p-6 text-neutral-950">
                  <div className="flex items-center justify-between text-sm font-bold">
                    <span>Portfolio</span>
                    <span>2026</span>
                  </div>
                  <div>
                    <div className="mb-6 grid grid-cols-3 gap-2">
                      <span className="h-24 rounded-md bg-[#ff7a59]" />
                      <span className="h-24 rounded-md bg-white" />
                      <span className="h-24 rounded-md bg-[#1f8a70]" />
                    </div>
                    <p className="text-3xl font-black leading-tight sm:text-4xl">
                      Build carefully.
                      <br />
                      Keep it human.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {stats.map((item) => (
                      <div
                        key={item.label}
                        className="rounded-md bg-white/75 p-3 text-center"
                      >
                        <p className="text-[11px] font-bold uppercase text-neutral-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm font-black">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 pb-8 md:grid-cols-3">
            {featuredWork.map((work) => (
              <article
                key={work.title}
                className="rounded-lg border border-neutral-950/10 bg-white/65 p-5"
              >
                <h2 className="text-lg font-black">{work.title}</h2>
                <p className="mt-3 text-sm leading-6 text-neutral-700">
                  {work.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
