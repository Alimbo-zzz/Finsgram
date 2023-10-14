import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';
import { useGallery } from '@/hooks';

import ring_img_1 from '@images/ring-3.png';
import ring_img_2 from '@images/ring-4.png';
import cup_img from '@images/cup-violet.png';

const images = import.meta.glob('@images/news/**/*.png', { eager: true });


function SecNews(props) {
	const newsImages = useGallery(images)?.arr;

	return (<>
		<section id='sec-news' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div data-aos-delay="100" data-aos="zoom-in" className='sec-tag'>новости</div>
				<h2 data-aos-delay="200" data-aos="zoom-in" className='title'>Новости чемпионата</h2>
				<hr />
				<h4 data-aos-delay="300" data-aos="zoom-in" className={cls.section__text}>Как проходил летний чемпионат по финансовой грамотности в 2022 г. <span>в Хабаровске</span></h4>
				<ul className={cls.section__list}>
					{newsImages.map((el, i) => (
						<li data-aos-delay={(i + 1) * 100} data-aos="zoom-in" className={cls.section__item} key={i}>
							<img src={el} />
						</li>
					))}
				</ul>
				<div className={cls.section__decor}>
					<img src={ring_img_1} data-decor='ring-1' />
					<img src={ring_img_2} data-decor='ring-2' />
					<div data-decor='cup'>
						<img src={cup_img} />
						<div data-decor='circle-blur' />
					</div>
				</div>
			</div>
		</section>
	</>);
}

export default SecNews;