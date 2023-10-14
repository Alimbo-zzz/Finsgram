import classNames from 'classnames';
import React from 'react';
import cls from './style.module.scss';

import tg_img from '@images/tg-stars.png';
import megaphone_img from '@images/megaphone.png';
import ring_img from '@images/ring-2.png';

function SecForm(props) {

	function sendRequest(params) {
		params.preventDefault();
		params.target.reset();
		console.log(params)
	}


	return (<>
		<section id='sec-form' className={cls.section}>
			<div className={classNames(['container', cls.section__cont])}>
				<div className={classNames('sec-tag', cls.section__tag)}>заявка</div>
				<form className={cls.form} autoComplete='off' onSubmit={sendRequest}>
					<div className={cls.form__head}>Регистрация на чемпионат:</div>
					<div className={cls.form__cont}>
						<input required placeholder='Имя' type="text" name="name" autoComplete='newPassword' />
						<input required placeholder='Фамилия' type="text" name="last-name" autoComplete='newPassword' />
						<input required placeholder='Адрес' type="text" name="address" autoComplete='newPassword' />
						<input required placeholder='Наименование учебного заведения' type="text" name="institution" autoComplete='newPassword' />
						<input required placeholder='Контактный телефон' type="number" name="phone" autoComplete='newPassword' />
						<input required placeholder='E-mail' type="email" name="email" autoComplete='newPassword' />
						<div className={cls.form__police}>
							<input required type="checkbox" name="private police" />
							<p>Согласен с <span>условиями использования</span> формы заявки и <br /> <span>политикой конфиденциальности</span> лица, разместившего форму заявки </p>
						</div>
						<button type='submit'>РЕГИСТРАЦИЯ</button>
					</div>

					<img src={ring_img} data-decor='ring' />
					<img src={tg_img} data-decor='tg' />
					<img src={megaphone_img} data-decor='megaphone' />
					<div data-decor='circle-blur' />
				</form>
			</div>
		</section>
	</>);
}

export default SecForm;