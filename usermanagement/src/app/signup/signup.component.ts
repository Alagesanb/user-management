import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { UsermanagementService} from '../services/usermanagement.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  getReplay: any;
  data:any;
  constructor(private http: HttpClient ,private fb: FormBuilder, private router: Router, private userService: UsermanagementService, private toastr: ToastrService) { 
    this.createForm();
   }

  ngOnInit() {
  }

  

  createForm() {
    this.form = this.fb.group({
      Username: new FormControl('', [Validators.required, ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, ]),
    });
  }
  
  get f() { return this.form.controls; }

  signup(){

    this.submitted = true;

    if (this.form.invalid) {
      console.log(this.form.value);
      console.log("iii")
      return;
    }

    console.log(this.form.value);
    this.userService.create(this.form.value)
    .subscribe(
      data => {
        console.log(data);
        this.data = data;
        console.log(this.data.status);
        if (this.data.status == true) {
         this.getReplay = this.data.message;
         this.toastr.success(this.data.message,"",{positionClass: 'toast-top-right',});
         this.form.get('Username').setValue("");
         this.form.get('Email').setValue("");
         this.form.get('Password').setValue("");
         this.router.navigate(['/login/']);

        }
        else if (this.data.status == false) {
          this.submitted = false;
          alert(this.data.message)
        }
        
      },
      error => {
        console.log(error);
      });
  }

}
