import React, { useState, useEffect } from 'react';
import { v4 as setId } from 'uuid';
import cls from './style.module.scss'
import classNames from 'classnames';
import BlockItem from './BlockItem';
import { useGallery } from '@/hooks';
const allImages = import.meta.glob('@images/*.png', { eager: true });

function SecWhyJoin(props) {
	const [blockList, setBlockList] = useState([]);
	const icon = useGallery(allImages)?.obj;


	useEffect(() => {
		if (!icon) return;
		setBlockList([
			{
				id: setId(),
				title: "Получить прикладные знания",
				text: "На чемпионате есть возможность познакомиться с базовыми понятиями и принципами финансовой грамотности, прокачать гибкие навыки и предпринимательское мышление. А благодаря игровому формату новые знания усвоятся значительно лучше!",
				image: icon['lamp.png']
			},
			{
				id: setId(),
				title: "Проверить себя",
				text: "Результаты личного и командного зачетов продемонстрируют, насколько хорошо ты разбираешься в теме финансов и умеешь управлять своими ресурсами.",
				image: icon['checklist.png']
			},
			{
				id: setId(),
				title: "Восполнить пробелы и потрениро­вать навыки",
				text: "Если умений и опыта не хватает, во время турнира ты сможешь потренироваться, закрепить новую информацию и систематизировать свои знания.",
				image: icon['hat.png']
			},
			{
				id: setId(),
				title: "Получить призы и подарки",
				text: "Все участники получат сертификаты, а финалистов и призеров ждут памятные подарки. ",
				image: icon['achieve.png']
			},
		])
	}, [icon])


	return (<>
		<section id='sec-why-join' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div data-aos="zoom-in" className='sec-tag'>для чего</div>
				<h2 data-aos-delay="100" data-aos="zoom-in" className='title'>Зачем участвовать <br /> в чемпионате?</h2>
				<hr />
				<ul className={cls.section__list}>
					{blockList.map((el, i) => (
						<li className={cls.section__item} key={el.id}>
							<BlockItem {...el} index={i} />
						</li>
					))}
				</ul>
				<a href="#sec-form" className='btn'>Подать заявку на участие</a>

				<img src={icon['ring-1.png']} data-decor='ring' />
			</div>
		</section>
	</>);
}

export default SecWhyJoin;