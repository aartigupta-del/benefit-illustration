import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-policy-calculation',
  templateUrl: './policy-calculation.component.html',
})
export class PolicyCalculationComponent {
  dob: string = '';
  age: number | null = null;
  gender: string = '';
  sumAssured: number | null = null;
  premium: number | null = null;
  term: number | null = null;
  premiumFrequency: string = '';
  premiumPayingTerm: number | null = null;
  benefits: any = null;

  constructor(private policyService: PolicyService) {}

  calculateAge() {
    if (this.dob) {
      const birthDate = new Date(this.dob);
      const today = new Date();
      let age = today.getFullYear() - birthDate.getFullYear();
      const monthDiff = today.getMonth() - birthDate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      this.age = age;
    }
  }

  calculate(form: NgForm) {
    if (form.valid) {
      this.sumAssured = Number(this.sumAssured);
      this.premium = Number(this.premium);
      this.term = Number(this.term);
      this.premiumPayingTerm = Number(this.premiumPayingTerm);

      const policyParams = {
        dob: this.dob,
        age: this.age,
        gender: this.gender,
        sumAssured: this.sumAssured,
        premium: this.premium,
        term: this.term,
        premiumFrequency: this.premiumFrequency,
        premiumPayingTerm: this.premiumPayingTerm,
      };

      this.policyService.calculatePolicy(policyParams).subscribe(
        (data) => {
          this.benefits = data;
        },
        (error) => {
          console.error(error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

// Assuming this is the method
getKeys(obj: any): string[] {
  if (!obj) {
    return []; // Return an empty array if obj is null or undefined
  }
  return Object.keys(obj);
}
}
