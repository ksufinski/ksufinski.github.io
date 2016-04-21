'use strict';


let date = new Date;

function getAMorPM(){

	if(date.getHours() > 21)
		return date.getHours()+':'+date.getMinutes()+' PM немного стоит подождать и я отвечу утром. ';

	if( date.getHours() < 7 )
		return  date.getHours()+':'+date.getMinutes()+' AM немного стоит подождать и я отвечу утром.';

	if(date.getHours() < 12)
		return date.getHours()+':'+date.getMinutes()+' AM, уже '+(date.getHours()-7)+' часа как не сплю и я мгновенно отвечаю на звонки!.';

	if(date.getHours() > 12)
		return date.getHours()-12+" PM и я мгновенно отвечаю на звонки!";
}

let str =
	'Loading data from server.' +
	'Success.' +
	'Preparing data for output.' +
	'=======BEGIN_OF_THE_MSG=======.'+'Привет!. ' +
	'Меня зовут Дима Муха.' +
	'Мне 21 и я из Днепропетровска. '+
	'Я люблю JavaScript, но так было не всегда . ' +
	'Начинал я с приготовления автотестов на Java с Junit и Selenium, заправлял это BDD фреймворками и настраивал для них Jenkins. ' +
	'Cпустя несколько проектов решил познакомиться с версткой. ' +
	'С тех пор перешел на приготовление веб-сайтов, работал с wordpress.' +
	' Веду проекты от анализа области и требований заказчика до деливери и саппорта.Сейчас я сконцентрирован на JavaScript и производных от него технологиях, использую в работе HTML(HTML5), CSS(CSS3), SAAS, Bootstrap, Gulp ,Vanilla JS и изучаю KISS, jQuery, AJAX, ES6, DRY, AngularJS.Мне интересно поработать в профессиональной команде, получить опыт работы с более сложными проектами, а также заниматься разработкой клиентской части с использованием AngularJS или другого MVC фреймворка.'
	'=======END_OF_THE_MSG=======.';

let arr = str.split('.');
arr.forEach(function(element,index,arr){
	element.concat(".");
});
let div = document.createElement('div');

let pointer = document.createElement('span');
pointer.className = 'pointer';

function passString (element,index ) {

	return new Promise(function(resolve){
		let y = 0;

		let timerForString = setInterval(function(){

			//let rand = Math.round(Math.random() * (element.length - 0));

			div.innerHTML += element.charAt(y);
			document.body.appendChild(div);

			if( y >= element.length) {

				if(index <3 || index ==7) {
					div.innerHTML += '.';
					document.body.appendChild(div);
				}

				setTimeout(() =>{
					y=0;
					clearInterval(timerForString);
					resolve(true);
				}, 250);
			}
			y++;
		},30, element);

		div.innerHTML += '<br>';
		document.body.appendChild(div);

	});


}

let chain = Promise.resolve();
let outChain = Promise.resolve();

arr.forEach(function (element,index ) {

	chain = chain
	.then(() =>passString(element,index ));

});

setTimeout(crash, 41000);
function crash() {
	document.body.style.background= '';
	document.body.style.backgroundColor = '#000';
	div.classList.toggle('crashed-div');


}

