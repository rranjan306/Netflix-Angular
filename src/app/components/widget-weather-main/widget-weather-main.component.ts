import { Component, OnInit } from '@angular/core';
import { WeatherWidgetService } from '../../services/weather-widget.service';

@Component({
  selector: 'app-widget-weather-main',
  templateUrl: './widget-weather-main.component.html',
  styleUrls: ['./widget-weather-main.component.scss']
})
export class WidgetWeatherMainComponent implements OnInit {

	weatherData: any;

  constructor(private wws: WeatherWidgetService) { }

  ngOnInit(): void {
  	this.wws.getWeatherData().subscribe((data) => {
  		this.weatherData = data;
  		let sunsetTime = new Date(data.sys.sunset * 1000);
  		this.weatherData.sunset_time = sunsetTime.toLocaleTimeString();
      let currrentDate = new Date();
      this.weatherData.isDay = (currrentDate.getTime() < sunsetTime.getTime());
  		console.log(data);
  	});
  }
}
