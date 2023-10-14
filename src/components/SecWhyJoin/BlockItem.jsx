import React from 'react';
import cls from './style.module.scss'

function BlockItem({ title = '', image = null, text = '', index, }) {

	return (<>
		<div className={cls.block} data-aos-delay={(index + 1) * 100} data-aos="zoom-in">
			<h6 className={cls.block__title}>{title}</h6>
			<img src={image} className={cls.block__img} />
			<p className={cls.block__text}>{text}</p>
		</div>
	</>);
}

export default BlockItem;