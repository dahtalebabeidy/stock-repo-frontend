import { Component, OnInit } from '@angular/core';
import { EtagereService } from '../etagere.service';

@Component({
  selector: 'app-etageres',
  templateUrl: './etageres.component.html',
  styleUrls: ['./etageres.component.css']
})
export class EtageresComponent implements OnInit {
  showAddFields: boolean = false;
  etageres: any[] = [];
  selectedEtagere: any = {};

  constructor(private etagereService: EtagereService) { }

  ngOnInit() {
    this.loadEtageres();
  }

  loadEtageres() {
    this.etagereService.getAllEtagere().subscribe(data => {
      this.etageres = data;
    });
  }

  editEtagere(etagere: any) {
    this.selectedEtagere = { ...etagere };
  }

  updateEtagere() {
    this.etagereService.updateEtagere(this.selectedEtagere).subscribe(() => {
      this.loadEtageres();
      this.selectedEtagere = {};
    });
  }

  addEtagere() {
    this.selectedEtagere = {};
  }

  addNewEtagere() {
    this.etagereService.addEtagere(this.selectedEtagere).subscribe(() => {
      this.loadEtageres();
      this.selectedEtagere = {};
    });
    this.showAddFields = false;
  }

  deleteEtagere(etagereId: number) {
    if (confirm('Voulez-vous vraiment supprimer cette étagère ?')) {
      this.etagereService.deleteEtagere(etagereId).subscribe(() => {
        this.loadEtageres();
      });
    }
  }

  toggleAddFields() {
    this.showAddFields = !this.showAddFields;
  }
}
