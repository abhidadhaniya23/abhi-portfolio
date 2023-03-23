import { useContext } from "react";
import MenuBarContext from "../../context/MenuBarContext";

const Menu = () => {
  // @ts-ignore
  const { menuActive, setMenuActive } = useContext(MenuBarContext);
  return (
    <>
      <div
        onClick={() => {
          menuActive ? setMenuActive(false) : setMenuActive(true);
        }}
        className="fixed z-30 flex flex-row items-center justify-center duration-150 rounded-full active:scale-90 lg:hidden w-14 h-14 bottom-10 right-10 bg-cyanPrimary"
      >
        <i className="text-2xl fa-solid fa-bars-staggered"></i>
      </div>
    </>
  );
};

export default Menu;
