import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cars',
  imports: [ReactiveFormsModule],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css',
})
export class CarsComponent {
  cars: any = [];

  baseCars = [
    {
      images: 'https://testologia.ru/cars-images/1.png',
      title: 'BMW M4 Competition',
      prices: [1450, 1300, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/2.png',
      title: 'BMW M5',
      prices: [1600, 1450, 1250],
    },
    {
      images: 'https://testologia.ru/cars-images/3.png',
      title: 'Lamborghini Huracan Spyder Green',
      prices: [3200, 2900, 2600],
    },
    {
      images: 'https://testologia.ru/cars-images/4.png',
      title: 'Ferrari F8 Spider',
      prices: [3500, 3200, 2900],
    },
    {
      images: 'https://testologia.ru/cars-images/5.png',
      title: 'Porsche 911 Targa 4S Yellow',
      prices: [1800, 1650, 1450],
    },
    {
      images: 'https://testologia.ru/cars-images/6.png',
      title: 'Mercedes SL 55 AMG',
      prices: [1700, 1550, 1350],
    },
    {
      images: 'https://testologia.ru/cars-images/7.png',
      title: 'BMW Z4',
      prices: [1200, 1100, 950],
    },
    {
      images: 'https://testologia.ru/cars-images/8.png',
      title: 'Mercedes C180 Convertible',
      prices: [1000, 900, 800],
    },
    {
      images: 'https://testologia.ru/cars-images/9.png',
      title: 'Chevrolet Corvette Orange',
      prices: [1400, 1250, 1100],
    },
    {
      images: 'https://testologia.ru/cars-images/10.png',
      title: 'Audi R8 Blue',
      prices: [2000, 1850, 1600],
    },
    {
      images: 'https://testologia.ru/cars-images/11.png',
      title: 'Chevrolet Corvette White',
      prices: [1350, 1200, 1000],
    },
    {
      images: 'https://testologia.ru/cars-images/12.png',
      title: 'Ford Mustang Convertible Black',
      prices: [1250, 1150, 1000],
    },
  ];

  carsFilter = [
    {
      active: true,
      name: 'Все марки',
    },
    {
      active: false,
      name: 'Lamborghini',
    },
    {
      active: false,
      name: 'Ferrari',
    },
    {
      active: false,
      name: 'Porsche',
    },
    {
      active: false,
      name: 'BMW',
    },
    {
      active: false,
      name: 'Mercedes',
    },
    {
      active: false,
      name: 'Chevrolet',
    },
    {
      active: false,
      name: 'Audi',
    },
    {
      active: false,
      name: 'Ford',
    },
  ];

  orderForm = new FormGroup({
    car: new FormControl(''),
    name: new FormControl(''),
    phone: new FormControl(''),
  });

  ngOnInit() {
    this.cars = this.baseCars;
  }

  changeFilter(filter: any, carsContent: HTMLElement) {
    this.carsFilter.forEach((el) => (el.active = false));
    filter.active = true;

    const filterText = filter.name.toLowerCase();

    if (filterText === 'все марки') {
      this.cars = this.baseCars;
    } else {
      this.cars = this.baseCars.filter((item) =>
        item.title.toLowerCase().includes(filterText)
      );
    }

    carsContent.scrollIntoView({ behavior: 'instant' });
  }

  isError(fieldName: string) {
    const control = this.orderForm.get(fieldName);
    return !!(control?.invalid && (control?.dirty || control?.touched));
  }

  sendOrder() {
    if (this.orderForm.valid) {
      alert('Спасибо за заявку! Мы скоро свяжемся с вами');
      this.orderForm.reset();
    }
  }

}
