import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  showAddFields: boolean = false;
  categories: any[] = [];
  selectedCategorie: any = {};

  constructor(private categorieService: CategorieService) { }

  ngOnInit() {
    this.loadCategories();
  }

  loadCategories() {
    this.categorieService.getAllCategories().subscribe(data => {
      this.categories = data;
    });
  }

  editCategorie(categorie: any) {
    this.selectedCategorie = { ...categorie };
  }

  updateCategorie() {
    this.categorieService.updateCategorie(this.selectedCategorie).subscribe(() => {
      this.loadCategories();
      this.selectedCategorie = {};
    });
  }

  addCategorie() {
    this.selectedCategorie = {};
  }

  addNewCategorie() {
    this.categorieService.addCategorie(this.selectedCategorie).subscribe(() => {
      this.loadCategories();
      this.selectedCategorie = {};
    });
    this.showAddFields = false;
  }

  deleteCategorie(categorieId: number) {
    if (confirm('Voulez-vous vraiment supprimer cette catégorie ?')) {
      this.categorieService.deleteCategorie(categorieId).subscribe(() => {
        this.loadCategories();
      });
    }
  }

  toggleAddFields() {
    this.showAddFields = !this.showAddFields;
  }
}
