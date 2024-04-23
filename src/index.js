import "bootstrap";
import './style.scss';

let center = [55.67201606905937,37.631630999999985];

function init() {
	let map = new ymaps.Map('map', {
		center: center,
		zoom: 12
	});

    let placemark = new ymaps.Placemark(center, {}, {


    });

    map.geoObjects.add(placemark);
}

ymaps.ready(init);