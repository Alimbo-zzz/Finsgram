import React, { useState } from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';

import map_svg from '@icons/map.svg';
import star from '@icons/star-white.svg';


function SecOrganizer(props) {
	const [list] = useState([
		{ count: "700+", text: "учеников за 2022 год" },
		{ count: "30+", text: "школ-участников" },
		{ count: "5", text: "площадок" },
	]);

	return (<>
		<section id='sec-organizer' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div data-aos-delay="100" data-aos="zoom-in" className='sec-tag'>организатор</div>
				<h2 data-aos-delay="200" data-aos="zoom-in" className='title'>Организатор чемпионата</h2>
				<hr />
				<div className={cls.section__content}>
					<div data-block='map'>
						<img src={map_svg} />
						<div data-decor='circle-blur' />
						<div data-name='map-mark'>Хабаровский край</div>
					</div>
					<div data-block='description'>
						<p data-aos-delay="100" data-aos="fade-left" ><span>Финсграм</span> - это некоммерческая организация, занимающаяся развитием навыков у детей, которые необходимы для успешной жизни и карьеры в будущем. </p>
						<p data-aos-delay="200" data-aos="fade-right" >Мы обучаем детей и подростков 8−18 лет финансовой грамотности, soft skills, помогаем развивать эмоциональный интеллект <br /> и предпринимательское мышление.</p>
					</div>
				</div>
				<ul className={cls.section__list}>
					{list.map((el, i) => (
						<li data-aos-delay={(i + 1) * 100} data-aos="zoom-in" className={cls.section__item} key={i}>
							<img src={star} />
							<h3 data-name='count'>{el.count}</h3>
							<p data-name='text'>{el.text}</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	</>);
}

export default SecOrganizer;