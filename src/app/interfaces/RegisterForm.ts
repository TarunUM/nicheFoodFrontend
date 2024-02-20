import { FormControl } from "@angular/forms";

export interface RegisterForm {
  name : FormControl;
  email : FormControl;
  password : FormControl;
  phone : FormControl;
}