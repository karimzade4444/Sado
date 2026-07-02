import type { IMenuItem } from "@/types/menu.types";

interface Props {
  items: IMenuItem[];
  title?: string;
}

export function Menu({ items, title }: Props) {
  return (
    <div>
      {title && <div className=" opacity-70 uppercase mb-6">{title}</div>}
      <ul>
        {items.map((item) => (
          <li>
            <a className="flex gap-3 items-center mb-5 group">
              {item.icon && <item.icon  className="group-hover:text-accent"/>}
              <span>{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
