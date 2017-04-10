import {Component, OnInit, Input} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {FieldBase} from "./field-base";

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrls: ['./field.component.css']
})
export class FieldComponent implements OnInit {

  @Input() field: FieldBase<any>;
  @Input() form: FormGroup;

  constructor() { }

  ngOnInit() {
  }


  get isValid() {
    return this.form.controls[this.field.key].valid;
  }

  get isEmpty() {
    let errors = this.form.controls[this.field.key].errors || {};
    return errors['empty'];
  }

}
