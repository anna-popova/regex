export default class Validator {
	constructor(name) {
	  this.name = name;
	}
 
	validateUsername() {
	  const re = /^[a-z]*[\d{0-3}\w-_][a-z]*$/i; 
	  return re.test(this.name);
	}
 }

//У вас есть ошибка в регулярке disk.yandex.ru...-FCVKj8m0g
//Даже если поправить, регулярное выражение сейчас не верное
//Эту задачу возможно, но сложно (я видел только 1 раз) решить за одну регулярку, советую попробовать за две
