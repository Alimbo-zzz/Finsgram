import React, { useState, useEffect } from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import logo_svg from '@icons/logo.svg';


function Header(props) {
	const [menuOpen, setMenuOpen] = useState(false);

	const openMenu = () => setMenuOpen(true);
	const closeMenu = () => setMenuOpen(false);
	const toggleMenu = () => setMenuOpen(prev => !prev);

	useEffect(() => {
		document.addEventListener('click', closeMenu);
		return () => {
			document.removeEventListener('click', closeMenu);
		}
	}, [])

	return (<>
		<header className={cls.header} onClick={e => e.stopPropagation()}>
			<div className={classNames(['container', cls.header__cont])}>
				<a href="" className={cls.header__logo}>
					<img src={logo_svg} />
					ФИНСГРАМ
				</a>
				<nav className={cls.header__nav} data-active={menuOpen}>
					<a onClick={closeMenu} href="#sec-what-is" className={cls.header__link}>о чемпионате</a>
					<a onClick={closeMenu} href="#sec-news" className={cls.header__link}>новости</a>
					<a onClick={closeMenu} href="#sec-contacts" className={cls.header__link}>контакты</a>
					<a onClick={closeMenu} href="#sec-form" className={cls.header__btn}>Регистрация</a>
				</nav>
				<div className={cls.header__menu} data-active={menuOpen} onClick={toggleMenu} />
			</div>
		</header>
	</>);
}

export default Header;