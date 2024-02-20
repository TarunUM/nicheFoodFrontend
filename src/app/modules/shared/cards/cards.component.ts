import { Component, Input } from "@angular/core";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-cards',
  standalone: true,
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
  imports: [DatePipe],
})
export class CardsComponent {
  @Input() imgSrc = '';
  @Input() foodName = 'Food';
  @Input() cuisine = 'Indian';

}
