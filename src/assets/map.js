   ymaps.ready(init);

    function init() {
        var myMap = new ymaps.Map("map", {
            center: [53.123836, 25.994307],
            zoom: 18
        }, {
            searchControlProvider: 'yandex#search'
        });

        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [53.123836, 25.994307]
            },

            properties: {
                iconContent: 'Мы',
                hintContent: 'Библиотека инструментов: "Baranovichytools"'
            }
        }, {
            preset: 'islands#blueStretchyIcon',
            draggable: false,
        });
        myMap.behaviors.disable('scrollZoom');
        myMap.geoObjects.add(myGeoObject);
    }