import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';

function Footer(props) {

	return (<>
		<footer className={cls.footer}>
			<div className={classNames(['container', cls.footer__cont])}>
				<h5 className={cls.footer__title}>АВТОНОМНАЯ НЕКОММЕРЧЕСКАЯ ОРГАНИЗАЦИЯ ЦЕНТР РАЗВИТИЯ ЛИЧНЫХ И ПРОФЕССИОНАЛЬНЫХ КОМПЕТЕНЦИЙ "НАСТАВНИКИ"</h5>
				<hr />
				<ul className={cls.footer__list}>
					<li className={cls.footer__item}>© Финсграм 2022-2023. Все права защищены.</li>
					<li className={cls.footer__item}>Общие положения</li>
					<li className={cls.footer__item}>Регламент проведения чемпионата</li>
					<li className={cls.footer__item}>Политика обработки персональных данных</li>
				</ul>
			</div>
		</footer>
	</>);
}

export default Footer;