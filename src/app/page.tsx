 import { Component } from "../components/component/component";
 import { MainFooter } from "../components/layout/main/main-footer";
 import { MainHeader } from "../components/layout/main/main-header";

export default function Home() {
  return (
    <main>
      <MainHeader />
       <Component/>
      　<h1>Hello,World I am Miki Kogoe</h1>
       <Component/>
      <MainFooter />
    </main>
  );
}