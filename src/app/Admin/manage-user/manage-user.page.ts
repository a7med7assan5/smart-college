import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user',
  templateUrl: 'manage-user.page.html',
  styleUrls: ['manage-user.page.scss']
})
export class manageUserPage implements OnInit {
  _id: string;
  name: string;
  email: string;
  password: string;
  role: string;
  roles: Array<string>;
  type: any;
  selectedLanguage:string;
  validations_form: FormGroup;
  constructor(private adminservices: AdminservicesService, private alertservice: AlertService, private formBuilder: FormBuilder,
    private translateConfigService: TranslateConfigService, private _router: Router) { 
      this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    }

    onSelectChange(event: any) {
    //update the ui
    this.role = event.target.value;
  }
  updateUser(id: HTMLInputElement, name: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    this._id = id.value, this.name = name.value, this.email = email.value, this.password = password.value;
    this.adminservices.updateUser(this._id, this.name, this.email, this.password, this.role).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      id.value = "";
      name.value = "";
      email.value = "";
      password.value = "";
      this.type = null;
      this.navigateToUsers();
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  }
  
  deleteUser(id: HTMLInputElement) {
    this._id = id.value;
    let response = document.getElementById('response');
    let error = document.getElementById('error');
    this.adminservices.deleteUser(this._id).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      id.value = '';
      this.navigateToUsers();
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  }

  navigateToUsers(){
    this._router.navigate(['/users']);
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }

  static validID(fc: FormControl){

    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return {
        validID: true
      };
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.roles = [
      "student",
      "professor",
      "admin"
    ];
    this.validations_form = this.formBuilder.group({
      id: new FormControl('', Validators.compose([
        Validators.maxLength(8),
        Validators.minLength(8),
        Validators.max(20301800),
        Validators.min(20201800),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+.com')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(8),
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
      ])),
      role: new FormControl(this.roles[0], Validators.required),
    });


  }

  validation_messages = {
    'id': [
      { type: 'maxlength', message: 'ID cannot be more than 8 characters long.' },
      { type: 'minlength', message: 'ID must be at least 8 characters long.' },
      { type: 'max', message: 'ID cannot be more than 20301800.' },
      { type: 'min', message: 'ID must be at least 20201800.' },
      { type: 'required', message: 'ID is required.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'pattern', message: 'Please enter a valid email.' }
    ],
    'password': [
      { type: 'required', message: 'Password is required.' },
      { type: 'minlength', message: 'Password must be at least 8 characters long.' },
      { type: 'pattern', message: 'Your password must contain at least one uppercase, one lowercase, and one number.' }
    ]
  };


}
