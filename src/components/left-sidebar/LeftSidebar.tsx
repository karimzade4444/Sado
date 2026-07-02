import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from "@/data/menu.data";
import { Menu } from "./Menu";

export function LeftSidebar() {
  return (
    <aside>
      <Menu items={MENU_ITEMS} />

      <hr className=" my-10 border-white/20 " />

      <Menu items={LIBRARY_MENU_ITEMS} title="Library" />

      <hr className=" my-10 border-white/20 " />

      {/* <Menu items={MENU_ITEMS} title="Playlists" /> */}
    </aside>
  );
}
