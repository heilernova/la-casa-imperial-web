import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Platform } from "@angular/cdk/platform";

@Injectable({
  providedIn: 'root'
})
export class LayoutService {
  private _theme: "dark" | "light" =  "light";
  private _platform = inject(Platform)
  
  public readonly changeTheme = new BehaviorSubject<"dark" | "light">("light");
  
  constructor() { 
    if (this._platform.isBrowser){
      this.theme = (localStorage.getItem("theme") as "dark" | "light" | null) ?? "light"
      console.log("En web")
    } else {
      console.log("En servidor")
    }
  }

  public get theme(){
    return this._theme;
  }
  public set theme(theme: "dark" | "light"){
    this._theme = theme;
    this.changeTheme.next(theme);
    if (this._platform.isBrowser){
      localStorage.setItem("theme", theme);
      if (theme == "dark"){
        document.body.classList.remove("light");
        document.body.classList.add(theme);
      } else {
        document.body.classList.remove("dark");
        document.body.classList.add(theme);
      }
    }
  }
}
