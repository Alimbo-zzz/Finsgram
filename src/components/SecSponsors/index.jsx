import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import tg_img from '@images/tg-stars.png';
import star from '@icons/star-gold.svg';
import { useGallery } from '@/hooks';

const images = import.meta.glob('@images/sponsors/*.png', { eager: true });



function SecSponsors(props) {
	const sponsorList = useGallery(images)?.arr;

	return (<>
		<section id='sec-sponsors' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div className={cls.section__head}>
					<div data-aos-delay="100" data-aos="zoom-in" className='sec-tag'>поддержка</div>
					<h2 data-aos-delay="200" data-aos="fade-left" className={cls.section__title}>партнёры</h2>
					<h2 data-aos-delay="300" data-aos="fade-right" className={cls.section__title}>и спонсоры</h2>
				</div>
				<ul className={cls.section__list}>
					{sponsorList.map((el, i) => (
						<li data-aos-delay={(i + 1) * 100} data-aos="zoom-in" className={cls.section__item} key={i}>
							<img src={el} />
						</li>
					))}
				</ul>

				<div className={cls.section__foot}>
					<p>
						Хотите стать партнером или спонсором Чемпионата?
						<br />
						Напишите свой запрос на адрес <a href="mailto:club@finsgram.ru">club@finsgram.ru</a>
					</p>
					<img src={tg_img} />
				</div>

				<img src={star} data-decor='star' />
				<div data-decor='circle-blur' />
			</div>
		</section>
	</>);
}

export default SecSponsors;