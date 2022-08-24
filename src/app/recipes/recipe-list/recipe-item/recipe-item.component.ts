import { AfterViewInit, Component, Input, OnInit } from "@angular/core";
import { Recipe } from "../../recipe.model";

@Component({
  selector: "app-recipe-item",
  templateUrl: "./recipe-item.component.html",
  styleUrls: ["./recipe-item.component.css"],
})
export class RecipeItemComponent implements AfterViewInit {
  @Input() recipe: Recipe;
  @Input() index: number;

  constructor() {}

  ngAfterViewInit() {
    document.getElementById("recipe-0").click();
  }
}
