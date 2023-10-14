import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@/hooks';

import ruble_img from '@images/ruble.png';
import star_g_svg from '@icons/star-gold.svg';
import star_w_svg from '@icons/star-white.svg';

const images = import.meta.glob('@images/championship/**/*.png', { eager: true });

function SecWhatIs(props) {
	const imagesArray = useGallery(images)?.arr;


	return (<>
		<section id="sec-what-is" className={cls.section}>
			<div className={classNames(['container', cls.content])}>
				<div data-aos="zoom-in" className={classNames(['sec-tag', cls.content__tag])}>о чемпионате</div>
				<h3 data-aos="fade-right" className={cls.content__title}>Что такое чемпионат <br />	по финансовым играм?</h3>

				<div className={cls.content__images}>
					{imagesArray.map((el, i) => <img data-aos="fade-left" data-aos-delay={(i + 1) * 100} key={i} src={el} />)}
				</div>

				<p data-aos="zoom-in" className={cls.content__text}>Летний чемпионат по финансовым играм - это уникальная возможность повысить свои знания и навыки по финансовой грамотности. <br />	Чемпионат проводится в формате увлекательных настольных игр. </p>
				<p data-aos="zoom-in" className={cls.content__text}>Для участия в чемпионате не требуется специальных навыков и знаний. <br /> Изучать и закреплять знания по финансовой грамотности участники будут прямо во время турнира. </p>

				<div className={cls.content__decor}>
					<img data-aos-delay="100" data-aos="zoom-in" src={star_w_svg} data-decor='star-w' />
					<img data-aos-delay="200" data-aos="zoom-in" src={star_g_svg} data-decor='star-g' />
					<img data-aos-delay="300" data-aos="zoom-in" src={ruble_img} data-decor='ruble' />
				</div>
			</div>
		</section>
	</>);
}

export default SecWhatIs;