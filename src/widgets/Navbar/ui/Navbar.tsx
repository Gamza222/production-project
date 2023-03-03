import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [])}>
      <div className={classNames(cls.links)}></div>
      <AppLink
        to={'/'}
        theme={AppLinkTheme.SECONDARY}
        className={classNames(cls.mainLink)}
      >
        Главная
      </AppLink>
      <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>
        О сайте
      </AppLink>
    </div>
  );
};

export default Navbar;
