import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { baches } from 'src/app/Models/Baches';
import { ciudadano } from 'src/app/Models/Ciudadano';
import { user } from 'src/app/Models/User';
import { GetAllBachesServiceService } from 'src/app/services/GetAllBachesService.service';

@Component({
  selector: 'app-TableAllBaches',
  templateUrl: './TableAllBaches.component.html',
  styleUrls: ['./TableAllBaches.component.css'],
})
export class TableAllBachesComponent implements OnInit {
  bache: baches = new baches();
  ciudadano: ciudadano = new ciudadano();
  ciudadano2: ciudadano = new ciudadano();
  bachessList: baches[] = [];
  user: user = new user();
  idU: number = 0;
  email: string;

  constructor(
    private router: Router,
    private GetAllBachesSer: GetAllBachesServiceService
  ) {
    this.loadBaches();
  }
 private loadBaches(){
  this.GetAllBachesSer.findAllUsers().subscribe(
    //Arrow function, funcion anónima similar a expersiones Lambda , aqui relleno el vector
    (userData) => {
      this.bachessList = userData;
    }
  );
 }
  ngOnInit() {}
  Ordenar() {}
}