import { Component, OnInit } from '@angular/core';
import { AdminservicesService } from 'src/app/services/adminservices.service';
import { AlertService } from 'src/app/services/alert.service';
import { TranslateConfigService } from 'src/app/services/translate-config.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: 'add-course.page.html',
  styleUrls: ['add-course.page.scss']
})
export class addCoursePage implements OnInit {
  courseCode: string;
  courseName: string;
  courseDepartment: string;
  department: string;
  departments: Array<string>;
  creditHours: any;
  prerequisite: string;
  selectedLanguage:string;
  validations_form: FormGroup;
  constructor(private adminservices: AdminservicesService, private alertservice: AlertService,  private formBuilder: FormBuilder,
    private translateConfigService: TranslateConfigService, private _router: Router) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  onSelectChange(event: any) {
    //update the ui
    this.courseDepartment = event.target.value;
  }
  addCourse(courseCode: HTMLInputElement, courseName: HTMLInputElement , creaditHours: HTMLInputElement, prerequisite: HTMLInputElement) {
    this.courseCode = courseCode.value, this.courseName = courseName.value , this.creditHours = creaditHours.value, this.prerequisite = prerequisite.value;
    this.adminservices.addCourse(this.courseCode, this.courseName, this.courseDepartment, this.creditHours, this.prerequisite).subscribe(res => {
      this.alertservice.showAlert("&#xE876;", "success", res.msg);
      courseCode.value = "";
      courseName.value = "";
      creaditHours.value = "";
      prerequisite.value = "";
      this.department = null;
      this.navigateToCourses();
    }, err => {
      this.alertservice.showAlert("&#xE5CD;", "error", err.error.msg);
    }
    );

  }

  navigateToCourses(){
    this._router.navigate(['/courses']);
  }

  languageChanged(){
    this.translateConfigService.setLanguage(this.selectedLanguage);
  }


  static validCourseCode(fc: FormControl){

    if(fc.value.toLowerCase() === "abc123" || fc.value.toLowerCase() === "123abc"){
      return {
        validCourseCode: true
      };
    } else {
      return null;
    }
  }

  ngOnInit(): void {
    this.departments = [
      "student",
      "professor",
      "admin"
    ];
    this.validations_form = this.formBuilder.group({
      courseCode: new FormControl('', Validators.compose([
        addCoursePage.validCourseCode,
        Validators.maxLength(5),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),
      name: new FormControl('', Validators.required),
      department: new FormControl(this.departments[0], Validators.required),
      creditHours: new FormControl('', Validators.compose([
        Validators.max(140),
        Validators.min(0),
        Validators.required
      ])),
      prerequisite: new FormControl('', Validators.required),
    });


  }

  validation_messages = {
    'courseCode': [
      { type: 'required', message: 'Course Code is required.' },
      { type: 'minlength', message: 'Course Code must be at least 5 characters long.' },
      { type: 'maxlength', message: 'Course Code cannot be more than 5 characters long.' },
      { type: 'pattern', message: 'Your Course Code must contain only numbers and letters.' },
      { type: 'validCourseCode', message: 'Your Course Code has already been taken.' }
    ],
    'name': [
      { type: 'required', message: 'Name is required.' }
    ],
    'creditHours': [
      { type: 'required', message: 'Credit Hours is required.' },
      { type: 'min', message: 'Credit Hours must be at least 0 Hours.' },
      { type: 'max', message: 'Credit Hours cannot be more than 140 Hours.' },
    ],
    'prerequisite': [
      { type: 'required', message: 'Name is required.' }
    ]

  };


}
