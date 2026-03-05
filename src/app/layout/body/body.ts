import { Component } from '@angular/core';
import { Servicios } from '../../feature/servicios/servicios';
import { Conocenos } from '../../feature/conocenos/conocenos';
import { Equipo } from '../../feature/equipo/equipo';
import { Proyectos } from '../../feature/proyectos/proyectos';
import { Contacto } from '../../feature/contacto/contacto';
import { Faq } from '../../feature/faq/faq';
import { Cta } from '../../feature/cta/cta';

@Component({
  selector: 'app-body',
  imports: [Servicios, Conocenos, Equipo, Proyectos, Contacto, Faq, Cta],
  templateUrl: './body.html',
})
export class Body {}
