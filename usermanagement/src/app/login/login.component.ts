import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormGroup, FormControl,FormBuilder, Validators} from '@angular/forms';
import { UsermanagementService} from '../services/usermanagement.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  getReplay: any;
  data: any; 
  constructor(private http: HttpClient ,private fb: FormBuilder, private router: Router, private userService: UsermanagementService,private toastr: ToastrService) { 
    this.createForm();
   }

  ngOnInit() {
  }

  get f() { return this.form.controls; }

  createForm() {
    this.form = this.fb.group({
      Email: new FormControl('', [Validators.required, Validators.email]),
      Password: new FormControl('', [Validators.required, ]),
    
    });
  }

  login(){


    this.submitted = true;
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value);
    this.userService.login(this.form.value)
    .subscribe(
      data => {
        this.data = data;
        console.log(this.data.status);
        if (this.data.status == true) {
         this.getReplay = this.data.message;
         this.toastr.success(this.data.message,"",{positionClass: 'toast-top-right',});
         this.form.get('Email').setValue("");
         this.form.get('Password').setValue("");
         this.router.navigate(['/dashboard/']);

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
