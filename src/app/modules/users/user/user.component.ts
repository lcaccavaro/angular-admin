import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  service : UserService = new UserService();

  status = [
    {
      id: true,
      value: "enabled"
    },
    {
      id: false,
      value: "disabled"
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onClear(){
    this.service.form.reset();
    this.service.initializeFormGroup();
  }

}
