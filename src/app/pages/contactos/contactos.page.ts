import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.page.html',
  styleUrls: ['./contactos.page.scss'],
})
export class ContactosPage implements OnInit {

  contactos: Contactos[] = [

    {
      icon: 'contact',
      name: 'Jose Juan Patron Guerrero',
      phone: '7351181377'
    },

    {
      icon: 'contact',
      name: 'Omar Salgado Diaz',
      phone: '7351068582'
    },

    {
      icon: 'contact',
      name: 'Manuel Alejandro Garces Maldonado',
      phone: '7352644123'
    }

  ];

  constructor() { }

  ngOnInit() {
  }

}

interface Contactos {
  icon: string,
  name: string,
  phone: string
}