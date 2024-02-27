import { Component } from '@angular/core';

interface UserModel{
  id: number;
  name: string;
  email: string;
}

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent {

  user: UserModel = {
    id: 1,
    name: 'Alexis Fierro',
    email: 'fierroeften@gmail.com'
  };

}
