import { Component, OnInit } from "@angular/core";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.css"],
})
export class ErrorComponent implements OnInit {
  errorImageURL = environment.errorImageURL;

  constructor() {}

  ngOnInit() {}
}
