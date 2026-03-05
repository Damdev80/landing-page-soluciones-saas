import { Component } from '@angular/core';
import { Servicios } from '../../components/servicios/servicios';
import { Conocenos } from '../../components/conocenos/conocenos';
import { Equipo } from '../../components/equipo/equipo';
import { Proyectos } from '../../components/proyectos/proyectos';
import { Contacto } from '../../components/contacto/contacto';
import { Faq } from '../../components/faq/faq';
import { Cta } from '../../components/cta/cta';

@Component({
  selector: 'app-body',
  imports: [Servicios, Conocenos, Equipo, Proyectos, Contacto, Faq, Cta],
  templateUrl: './body.html',
})
export class Body {}
