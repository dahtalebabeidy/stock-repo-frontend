import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produit.service';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {
  showAddFields: boolean = false;
  produits: any[] = [];
  etageres: any[] = [];
  categories: any[] = [];
  selectedProduit: any = {};

  constructor(private produitsService: ProduitsService) { }

  ngOnInit() {
    this.loadProduits();
    this.loadEtagereAndCategorie();
  }

  loadProduits() {
    this.produitsService.getAllProduits().subscribe(data => {
      this.produits = data;
    });
  }

  loadEtagereAndCategorie() {
    this.produitsService.getAllEtagere().subscribe(data => {
      this.etageres = data;
    });
    this.produitsService.getAllCategorie().subscribe(data => {
      this.categories = data;
    });
  }

  editProduit(produit: any) {
    this.selectedProduit = { ...produit };
  }

  updateProduit() {
    this.produitsService.updateProduit(this.selectedProduit).subscribe(() => {
      this.loadProduits();
      this.selectedProduit = {};
    });
  }

  addProduit() {
    this.selectedProduit = {
      code: '',
      libelle: '',
      prixUnitaire: 0,
      etagere: this.etageres[0],
      categorie: this.categories[0]
    };
  }

  addNewProduit() {
    this.produitsService.addProduit(this.selectedProduit).subscribe(() => {
      this.loadProduits();
      this.selectedProduit = {};
    });
    this.showAddFields = false;
  }

  deleteProduit(produitId: number) {
    if (confirm('Voulez-vous vraiment supprimer ce produit ?')) {
      this.produitsService.deleteProduit(produitId).subscribe(() => {
        this.loadProduits();
      });
    }
  }

  toggleAddFields() {
    this.showAddFields = !this.showAddFields;
  }
}
