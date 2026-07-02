import { LIBRARY_MENU_ITEMS, MENU_ITEMS } from "@/data/menu.data";
import { Menu } from "./Menu";

export function LeftSidebar() {
  return (
    <aside className=" border-r border-player-bg h-full p-10">
      <svg
        width="180"
        height="60"
        viewBox="0 0 250 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="mb-8"
      >
        <rect width="250" height="80" rx="20" fill="#0B0F19" />
        <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="red" />
          <stop offset="50%" stopColor="white" />
          <stop offset="100%" stopColor="green" />
        </linearGradient>
        <rect x="25" y="30" width="6" height="20" rx="3" fill="url(#g)" />
        <rect x="36" y="18" width="6" height="44" rx="3" fill="url(#g)" />
        <rect x="47" y="24" width="6" height="32" rx="3" fill="url(#g)" />
        <rect x="58" y="35" width="6" height="10" rx="3" fill="url(#g)" />
        <text
          x="80"
          y="46"
          fill="white"
          font-family="Arial, sans-serif"
          font-weight="900"
          font-size="28"
          tracking-spacing="2"
          letter-spacing="2"
        >
          SADO
        </text>
        <text
          x="82"
          y="58"
          fill="#9CA3AF"
          font-family="Arial, sans-serif"
          font-weight="700"
          font-size="9"
          letter-spacing="3"
          
        >
          MUSIC PLATFORM
        </text>
      </svg>

      <Menu items={MENU_ITEMS} />

      <hr className=" my-10 border-player-bg " />

      <Menu items={LIBRARY_MENU_ITEMS} title="Library" />

      <hr className=" my-10 border-player-bg " />

      {/* <Menu items={MENU_ITEMS} title="Playlists" /> */}
    </aside>
  );
}
