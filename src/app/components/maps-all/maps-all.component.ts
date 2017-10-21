import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var ymaps: any;
declare var jQuery: any;

interface YandexMap extends MVCObject {
    constructor(el: HTMLElement, opts?: any): void;
    geoObjects: any;
}

interface MVCObject { addListener(eventName: string, handler: Function): MapsEventListener; }
interface MapsEventListener { remove(): void; }

@Component({
  selector: 'maps-all',
  styleUrls: ['./maps-all.component.scss'],
  template: `
        <div #yamaps class='map'></div>      
    `
})
export class MapsAllComponent implements OnInit {

  myMap: Promise<YandexMap> = new Promise<YandexMap>((resolve: () => void) => { this._mapResolver = resolve; });
    private _mapResolver: (value?: YandexMap) => void;
    options: any = {
            center: [53.123836, 25.994307],
            zoom: 18,
            //controls: ['zoomControl', 'searchControl', 'typeSelector',  'fullscreenControl']
        };

    @ViewChild('yamaps') el: ElementRef;

    ngOnInit(): void {
        
        ymaps.ready().done(() => {
            const map = new ymaps.Map(this.el.nativeElement, this.options);
            const myGeoObject = new ymaps.GeoObject({
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

            this._mapResolver(<YandexMap>map);
            map.events.add('click', this.clickMaps, this); 
            map.behaviors.disable('scrollZoom');  
            map.geoObjects.add(myGeoObject);        
        });
        
    }

    clickMaps(e: any) {
        let coords = e.get('coords');
    }
}
