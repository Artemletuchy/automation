import chalk from 'chalk';

console.log(
	chalk.hex('#77ff01').bold('Припев:') +
		'\n' +
		chalk.blue(
			'Красиво ты вошла в мою грешную жизнь,\n' +
				'Красиво ты ушла из неё.\n' +
				'Но почему же я снова ищу эту боль,\n' +
				'Хотя, казалось бы, всё решено?\n',
		) +
		chalk.hex('#ff0808').bold('Куплет 1:') +
		'\n' +
		chalk.hex('#e7d3fef1')(
			'Где же ты, счастье моё?\n' + 'Ты было, но прошло.\n' + 'Я тебя, словно огонь,\n' + 'В сердце берегла.\n',
		) +
		chalk.hex('#77ff01').bold('Припев:') +
		'\n' +
		chalk.blue(
			'Красиво ты вошла в мою грешную жизнь,\n' +
				'Красиво ты ушла из неё.\n' +
				'Но почему же я снова ищу эту боль,\n' +
				'Хотя, казалось бы, всё решено?\n',
		) +
		chalk.hex('#ff0808').bold('Куплет 2:') +
		'\n' +
		chalk.hex('#e7d3fef1')(
			'Пусть будет так, как хочешь ты,\n' +
				'Не понимаю я игры,\n' +
				'Но я люблю, а значит, мне\n' +
				'Не нужно больше ничего.\n',
		),
);
