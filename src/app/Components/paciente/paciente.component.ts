import { Component, OnInit } from '@angular/core';
import { PacienteService } from 'src/app/Services/paciente.service';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css'],
})
export class PacienteComponent implements OnInit {
  constructor(private _pacienteService: PacienteService) {}

  ngOnInit(): void {
    var hh = this._pacienteService.getAllPacientes();
    console.log(hh, 'datos get');
    console.log(this._pacienteService.getAllPacientes(), 'datos get2');
  }
}
