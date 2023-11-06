import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {CitiesService} from "../../shared/services/cities.service";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{
  public form: FormGroup;

  constructor(protected fb: FormBuilder, protected citiesService: CitiesService, protected router: Router) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', Validators.required],
      latitude: ['', [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
      longitude: ['', [Validators.required, Validators.pattern(/^\d+.?\d*$/), Validators.max(180), Validators.min(-180)]],
    })
  }

  createCity() {
    this.citiesService.addCity(this.form.value);
    void this.router.navigate(['/']);
  }
}
