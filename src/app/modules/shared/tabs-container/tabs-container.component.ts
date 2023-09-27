import { AfterContentInit, Component, ContentChildren, QueryList } from "@angular/core";
import { CommonModule } from '@angular/common';
import { TabsComponent } from "../tabs/tabs.component";
import { ButtonsComponent } from "../buttons/buttons.component";

@Component({
  selector: 'app-tabs-container',
  standalone: true,
  imports: [CommonModule, ButtonsComponent],
  templateUrl: './tabs-container.component.html',
  styleUrls: ['./tabs-container.component.css'],
})
export class TabsContainerComponent implements AfterContentInit {
  @ContentChildren(TabsComponent) tabs?: QueryList<TabsComponent>;

  ngAfterContentInit() {
    console.log(this.tabs);

    const activeTabs = this.tabs?.filter(
      tab => tab.active
    )

    if (!activeTabs || activeTabs.length === 0){
      this.selectTab(this.tabs!.first)
    }

  }

  selectTab(tab: TabsComponent) {
    this.tabs?.forEach(tab => tab.active = false)
    tab.active = true
  }
}
