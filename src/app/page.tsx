import { MainLayout } from "../layouts/main/main-layout";

export default function Home() {
  return (
      <MainLayout>
        <div className='mx-auto flex w-full max-w-5xl flex-col gap-16 px-6 py-12'>
          <section className='rounded-2xl bg-neutral-950 px-8 py-16 text-white'>
            <p className='text-sm font-bold text-sky-300'>Portfolio</p>
            <h1 className='mt-4 text-4xl font-bold'>Hello.World I am Miki Kogoe</h1>
            <p className='mt-4 max-w-2xl text-neutral-300'>Next.jsとTailwind CSSを使って、ポートフォリオを作っています。</p>
          </section>
        
        <section id="skills">
          <h2 className='text-2xl font-bold text-neutral-900'>Skills</h2>
          <div className='mt-6 grid gap-4 md:grid-cols-3'>
            <div className='rounded-xl border border-neutral-200 bg-white p-6 shadow-sm'>
              <h3 className='text-xl font-bold text-neutral-900'>Next.js</h3>
              <p className='mt-3 text-sm leading-6 text-neutral-600'>ページ作成、ルーティング、コンポーネント分割を練習いています。</p>
            </div>
            <div className='rounded-xl border border-neutral-200 bg-white p-6 shadow-sm'>
              <h3 className='text-xl font-bold text-neutral-900'>Trailwind CSS</h3>
              <p className='mt-3 text-sm leading-6 text-neutral-600'>ページ作成、ルーティング、コンポーネント分割を練習しています。</p>
            </div>
            <div className='rounded-xl border border-neutral-200 bg-white p-6 shadow-sm'>
              <h3 className='text-xl fon-bold text-neutral-900'>GitHub</h3>
              <p className='mt-3 text-sm leading-6 text-neutral-600'>ブランチ、コミット、push、PR作成を練習しています。</p>
            </div>
          </div>
        </section>
        </div>
      </MainLayout>
    
  );
}