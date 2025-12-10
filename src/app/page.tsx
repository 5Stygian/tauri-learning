import { Main } from "next/document";

import Sidebar from "./components/sidebar/Sidebar";
import SidebarElement from "./components/sidebar/SidebarElement";

export default function Home() {
  return (
    <Main>
      <Sidebar>
        <SidebarElement />
        <SidebarElement />
      </Sidebar>
    </Main>
  );
}
