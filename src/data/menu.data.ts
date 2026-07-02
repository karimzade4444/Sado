import { Album, Clock, Compass, Heart, Home, icons, Music, Radio, User } from "lucide-react";
import { PagesConfig } from "../config/page.config";

export const MENU_ITEMS = [
  {
    icon: Home,
    name: "Home",
    link: PagesConfig.HOME,
  },
  {
    icon: Compass,
    name: "Discover",
    link: PagesConfig.DISCOVER,
  },
  {
    icon: Radio,
    name: "Radio",
    link: PagesConfig.RADIO,
  },
];

export type TMenuItem = (typeof MENU_ITEMS)[number];

 export const LIBRARY_MENU_ITEMS = [
    {
        icon: Music,
        name: 'Made For You',
        link: PagesConfig.MADE_FOR_YOU,
    },
    {
        icon: Clock,
        name: 'Recently Played',
        link: PagesConfig.RECENTLY_PLAYED,
    },
    {
        icon: Heart,
        name: 'Liked Songs',
        link: PagesConfig.LIKED_SONGS,
    },
    {
        icon: Album,
        name: 'Albums',
        link: PagesConfig.ALBUMS()
    },
    {
        icon: User,
        name: 'Artists',
        link: PagesConfig.ARTISTS()
    }
]
