import React from 'react';
import cls from './style.module.scss'
import classNames from 'classnames';

import logo_svg from '@icons/logo.svg';
import vk_svg from '@icons/vk.svg';
import star_svg from '@icons/star-gold.svg';
import stress_svg from '@icons/stress-circle.svg';
import cup_img from '@images/cup.png';

function SecContacts(props) {

	return (<>
		<section id='sec-contacts' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div className={cls.section__logo}>
					<img src={logo_svg} />
					<span>ФИНСГРАМ</span>
				</div>
				<div data-decor='circle-blur' />
				<div className={cls.section__content}>
					<div data-block='info'>
						<h4 data-aos-delay="100" data-aos="zoom-in" data-name='title' >Хабаровский край, г. Хабаровск</h4>
						<a data-aos-delay="200" data-aos="zoom-in" data-name='phone' href="tel:+79227774014" target='_blanck'>{"8 (922) 777- 40-14"}</a>
						<a data-aos-delay="300" data-aos="zoom-in" data-name='mail' href="mailto:club@finsgram.ru" target='_blanck'>club@finsgram.ru</a>
						<a data-aos-delay="400" data-aos="zoom-in" data-name='vk' href="https://vk.com/" target='_blanck'><img src={vk_svg} /></a>
					</div>
					<div data-block='preview'>
						<div data-decor='circle-blur' />
						<img src={star_svg} data-decor='star-1' />
						<img src={star_svg} data-decor='star-2' />
						<img src={cup_img} data-decor='cup' />
						<div data-decor='stress'>
							<img src={stress_svg} />
							<span>Ждём тебя <br />	на чемпионате!</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	</>);
}

export default SecContacts;