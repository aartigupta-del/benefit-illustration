import { Component, OnInit } from '@angular/core';
import { PolicyService } from '../policy.service';

@Component({
  selector: 'app-illustration',
  templateUrl: './illustration.component.html',
  styleUrls: ['./illustration.component.scss']
})
export class IllustrationComponent implements OnInit {
  policies: any[] = [];

  constructor(private policyService: PolicyService) {}

  ngOnInit(): void {
    this.policyService.getPolicies().subscribe(
      (data) => {
        this.policies = data;
        console.log( this.policies,"this.policies")
      },
      error => {
        console.error('Error fetching policies', error);
      }
    );
  }
}
