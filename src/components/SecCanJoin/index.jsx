import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import star_g_img from "@icons/star-gold.svg";
import { useGallery } from '@/hooks';

const images = import.meta.glob('@images/kids/**/*.png', { eager: true });


function SecCanJoin(props) {
	const imageList = useGallery(images)?.arr;

	return (<>
		<section id='sec-can-join' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div className={cls.section__head}>
					<div data-aos-delay="100" data-aos="zoom-in" className='sec-tag'>для кого</div>
					<h2 data-aos-delay="200" data-aos="zoom-in" className='title'>Кто может <br />	принять участие? </h2>
					<img data-aos-delay="300" data-aos="zoom-in" src={star_g_img} />
				</div>
				<ul className={cls.imagelist}>
					{imageList.map((el, i) => (
						<li data-aos-delay={(i + 1) * 100} data-aos="zoom-in" key={i} className={cls.imagelist__item}>
							<img src={el} />
						</li>
					))}
				</ul>
				<p className={cls.section__text}>Для участия в чемпионате достаточно заполнить форму на сайте. <br />	В этом тебе могут помочь твои родители.</p>
				<p className={cls.section__text} data-name='school'>Школьники 8-18 лет из Хабаровска и Хабаровского края</p>
				<p className={cls.section__text}>После оформления заявки с тобой свяжутся организаторы и расскажут о дальнейших действиях.</p>
				<ul className={cls.roadmap}>
					<li data-aos-delay="100" data-aos="zoom-in" className={cls.roadmap__item}>Ты школьник?</li>
					<li data-aos-delay="200" data-aos="zoom-in" className={cls.roadmap__item}>Хочешь быть финансово грамотным?</li>
					<li data-aos-delay="300" data-aos="zoom-in" className={cls.roadmap__item}>Регистрируйся на чемпионат!</li>
				</ul>
				<a href="#sec-form" className={classNames(['btn', cls.section__btn])}>Принять участие</a>

				<img src={star_g_img} data-decor='star' />
			</div>
		</section>
	</>);
}

export default SecCanJoin;