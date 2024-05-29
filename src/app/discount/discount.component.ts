import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './data.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.scss'],
})
export class DiscountComponent implements OnInit {
  form!: FormGroup;
  forbidden = ['sami', 'khaled', 'Mram'];
  constructor(private send: DataService) {}

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.required]),
      message: new FormControl(null, [Validators.required]),
    });
  }

  NameMetod(x: FormControl): { [s: string]: Boolean } {
    if (this.forbidden.indexOf(x.value) !== -1) {
      return { nameis: true };
    }
    return {};
  }

  sub() {
    if (this.form.valid) {
      this.send.post_sign(this.form.value).subscribe(
        (response) => {
          console.log('Data sent successfully', response);
          this.form.reset();
        },
        (error) => {
          console.error('Error sending data', error);
        }
      );
    } else {
      console.error('Form is invalid');
    }
  }
}
