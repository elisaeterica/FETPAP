import { Component, Injectable, OnInit } from '@angular/core';
import { persona } from '../../model/persona.model';


@Component({
  selector: 'app-acercade',
  templateUrl: './acercade.component.html',
  styleUrls: ['./acercade.component.css']
})

export class acercadeComponent implements OnInit {

  persona: persona = new persona("","","","","","","","");
  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
  }

}
