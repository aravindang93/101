import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'onenotone';
  arrayList: any[] = [
    {content: 'content 1'},
    {content: 'content 2'},
    {content: 'content 3'},
    {content: 'content 4'},
    {content: 'content 5'},
    {content: 'content 6'},
    {content: 'content 7'},
    {content: 'content 8'}
    
  ]
}
