import style from './Header.module.scss';
import { Logo } from './logo/Logo';
import { Menu } from './menu/Menu';
// import { PanelFilter } from './panelFilter/PanelFilter';

export const Header = () => {
  return (
    <div className={style.wrapHeader}>
      <div className={style.header}>
        <Logo />
        {/* <PanelFilter /> */}
        <Menu />
      </div>
    </div>
  );
};
