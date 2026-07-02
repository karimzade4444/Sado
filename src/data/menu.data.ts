import { PagesConfig } from "../config/page.config";

export const MENU_ITEMS = [
    {
        name: "Home",
        link: PagesConfig.HOME,
    },
    {
        name: "Discover",
        link: PagesConfig.DISCOVER,
    },
    {
        name: "Radio",
        link: PagesConfig.RADIO,
    }
]

export type TMenuItem = (typeof MENU_ITEMS)[number];