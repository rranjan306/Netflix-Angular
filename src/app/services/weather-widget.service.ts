import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherWidgetService {

	url: string = 'api.openweathermap.org/data/2.5/weather';
	params = new HttpParams().set('q', 'patna').set('appid', '718a6ed134fbfdb706c4f0560b5ea040')

  constructor(private http: HttpClient) {
  }

  getWeatherData(): Observable<any> {
  	return of({"coord":{"lon":85.12,"lat":25.6},"weather":[{"id":721,"main":"Haze","description":"haze","icon":"50n"}],"base":"stations","main":{"temp":292.15,"feels_like":291.93,"temp_min":292.15,"temp_max":292.15,"pressure":1012,"humidity":72},"visibility":3500,"wind":{"speed":2.04,"deg":283},"clouds":{"all":0},"dt":1603907010,"sys":{"type":1,"id":9129,"country":"IN","sunrise":1603844711,"sunset":1603885272},"timezone":19800,"id":1260086,"name":"Patna","cod":200});
  }
}
