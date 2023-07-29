import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { menusActions } from "../../store/Menu.store";
import BtnAddTask from "../Utilities/BtnAddTask";
import avatar1 from "../../assets/search.svg";
import NavLinks from "./NavLinks";
import LayoutMenus from "../Utilities/LayoutMenus";

const classLinkActive =
  "text-rose-600 bg-blue-100 border-r-4 border-rose-500 dark:bg-slate-700/[.2] dark:text-slate-200 dark:border-slate-200";

const Menu: React.FC = () => {
  const menuOpen = useAppSelector((state) => state.menu.menuHeaderOpened);
  const dispatch = useAppDispatch();

  const closeMenuHandler = () => {
    dispatch(menusActions.closeMenuHeader());
  };
  return (
    <LayoutMenus
      menuOpen={menuOpen}
      closeMenuHandler={closeMenuHandler}
      className="left-0"
    >
      <header className="h-full flex flex-col">
        <h1 className="font-bold uppercase text-center mt-8 text-6xl tracking-wide hidden xl:block">
          📝
        </h1>
        <BtnAddTask className="my-8 mx-4" />
        <NavLinks classActive={classLinkActive} />
      </header>
    </LayoutMenus>
  );
};

export default Menu;
