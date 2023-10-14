import React from 'react';
import cls from './style.module.scss';
import classNames from 'classnames';

import cup_img from '@images/cup.png';
import ruble_img from '@images/ruble.png';
import star_svg from '@icons/star-gold.svg';


function SecIntro(props) {

	return (<>
		<section id='sec-intro' className={cls.intro}>
			<div className={classNames(['container', cls.intro__cont])}>
				<h1 className={cls.intro__title} data-aos="fade-right">Летний чемпионат <br /> по финансовым <span>играм <img src={ruble_img} /></span> </h1>
				<div className={cls.intro__tags}>
					<span data-aos="zoom-in" data-aos-delay='100'>май-август 2023 г.</span>
					<span data-aos="zoom-in" data-aos-delay='200'>г. Хабаровск</span>
					<span data-aos="zoom-in" data-aos-delay='300'>для школьников 8-18 лет</span>
				</div>
				<h4 className={cls.intro__description} data-aos="fade-left">Прокачай свои знания <br /> по финансовой грамотности</h4>

				<div className={cls.intro__preview} data-aos="zoom-in" data-aos-delay='200'>
					<img src={cup_img} />
					<div data-decor='circle-blur' />
				</div>
				<img data-aos="zoom-in" data-aos-delay='400' src={star_svg} className={cls.intro__star} />
			</div>
		</section>
	</>);
}

export default SecIntro;