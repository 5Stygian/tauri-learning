import Greet from "./greet";
import Sidebar from "./components/sidebar/Sidebar";
import SidebarElement from "./components/sidebar/SidebarElement";

export default function Home() {
  return (
    <Sidebar>
      <SidebarElement content="test1" />
      <SidebarElement content="test2" />
    </Sidebar>
  );
}
