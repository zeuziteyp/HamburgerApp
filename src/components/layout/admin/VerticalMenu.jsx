import { Link, useLocation } from "react-router-dom";
import { Fragment, useCallback, useEffect, useState } from "react";
import { LuChevronDown, LuDot, LuLayoutGrid } from "react-icons/lu";
import { findAllParent, findMenuItem, getMenuItemFromURL } from "@/helpers";
import { cn } from "@/utils";

const MenuItemWithChildren = ({
  item,
  linkClassName,
  activeMenuItems,
  toggleMenu,
  className,
}) => {
  const [open, setOpen] = useState(activeMenuItems.includes(item.key));

  const Icon = item.icon ?? LuLayoutGrid;

  useEffect(() => {
    if (activeMenuItems) setOpen(activeMenuItems.includes(item.key));
  }, [activeMenuItems, item]);

  const toggleMenuItem = () => {
    const status = !open;
    setOpen(status);
    if (toggleMenu) toggleMenu(item, status);
    return false;
  };

  return (
    <li className={className}>
      <button
        className={cn(
          "hs-accordion-toggle flex w-full items-center gap-x-3.5 rounded-md px-4 py-3 text-sm text-default-700 hover:bg-default-100",
          {
            active: activeMenuItems.includes(item.key),
          }
        )}
        aria-expanded={open}
        data-menu-key={item.key}
        onClick={toggleMenuItem}
      >
        <Icon size={20} />
        {item.label}
        <LuChevronDown
          size={16}
          className="ms-auto transition-all hs-accordion-active:rotate-180"
        />
      </button>
      <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height]">
        <ul className="mt-2 space-y-2">
          {(item.children ?? []).map((child, idx) => {
            return (
              <Fragment key={idx}>
                {child.children ? (
                  <MenuItemWithChildren
                    item={child}
                    toggleMenu={toggleMenu}
                    className="hs-accordion"
                    activeMenuItems={activeMenuItems}
                    linkClassName={cn(linkClassName, {
                      active: activeMenuItems?.includes(child.key),
                    })}
                  />
                ) : (
                  <MenuItem
                    item={child}
                    className={cn("group", {
                      active: activeMenuItems?.includes(child.key),
                    })}
                    linkClassName={cn(
                      linkClassName,
                      "group-[.active]:text-primary group-[.active]:bg-primary/10"
                    )}
                  />
                )}
              </Fragment>
            );
          })}
        </ul>
      </div>
    </li>
  );
};

const MenuItem = ({ item, className, linkClassName }) => {
  return (
    <li className={className}>
      <MenuItemLink item={item} className={linkClassName} />
    </li>
  );
};

const MenuItemLink = ({ item, className }) => {
  const Icon = item.icon ?? LuDot;
  return (
    <Link
      className={className}
      to={item.url ?? ""}
      target={item.target}
      data-menu-key={item.key}
    >
      <Icon size={item.icon ? 20 : 24} />
      {item.label}
    </Link>
  );
};

/**
 * Renders the application menu
 */
const VerticalMenu = ({ menuItems }) => {
  const [activeMenuItems, setActiveMenuItems] = useState([]);

  const { pathname } = useLocation();

  const toggleMenu = (menuItem, show) => {
    if (show) {
      setActiveMenuItems([
        menuItem["key"],
        // ...findAllParent(menuItems, menuItem),
      ]);
    }
  };
  /**
   * activate the menuitems
   */
  const activeMenu = useCallback(() => {
    const trimmedURL = pathname.replaceAll("", "");

    const matchingMenuItem = getMenuItemFromURL(menuItems, trimmedURL);

    if (matchingMenuItem) {
      const activeMt = findMenuItem(menuItems, matchingMenuItem.key);
      if (activeMt) {
        setActiveMenuItems([
          activeMt["key"],
          ...findAllParent(menuItems, activeMt),
        ]);
      }
    }
  }, [pathname, menuItems]);

  useEffect(() => {
    if (menuItems && menuItems.length > 0) activeMenu();
  }, [activeMenu, menuItems]);

  return (
    <ul className="admin-menu hs-accordion-group flex w-full flex-col gap-1.5 p-4">
      {(menuItems ?? []).map((item) => {
        return (
          <Fragment key={item.key}>
            {item.children ? (
              <MenuItemWithChildren
                item={item}
                toggleMenu={toggleMenu}
                className={"hs-accordion"}
                activeMenuItems={activeMenuItems}
                linkClassName={cn(
                  "flex items-center gap-x-3.5 py-2 px-2.5 text-sm font-medium text-default-700 rounded-md hover:bg-default-100"
                )}
              />
            ) : (
              <MenuItem
                item={item}
                linkClassName={cn(
                  "flex items-center gap-x-3.5 py-3 px-4 text-sm text-default-700 rounded-md hover:bg-default-100 group-[.active]:text-primary group-[.active]:bg-primary/10",
                  { active: activeMenuItems.includes(item.key) }
                )}
                className={cn("group", {
                  active: activeMenuItems?.includes(item.key),
                })}
              />
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

export default VerticalMenu;
