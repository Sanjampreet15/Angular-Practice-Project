import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  // fetching values from parent component and avatar! means ehde ch value hougi
  //  hi hmesha, null nhi hou ga
  @Input() avatar!: string;
  @Input() name!: string;

// getter property use to fetch the data
get imagePath(){
  return 'assets/users/' + this.avatar;
}

//Event listener
onSelectUser() {
  console.log('Clicked!')
}
}
