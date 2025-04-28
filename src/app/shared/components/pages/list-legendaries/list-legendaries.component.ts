import { Component, HostListener, OnInit } from '@angular/core';
import { legendariesList } from 'src/app/shared/interfaces/legendaries';

@Component({
  selector: 'app-list-legendaries',
  templateUrl: './list-legendaries.component.html',
  styleUrls: ['./list-legendaries.component.css']
})
export class ListLegendariesComponent implements OnInit {

  normalLegendaries: legendariesList[][];
  strongerLegendaries: legendariesList[][];
  weakerLegendaries: legendariesList[][];

  pageNormal: number = 0;
  pageWeaker: number = 0;
  pageStronger: number = 0;
  pageSize: number = 6;

  legendaryNormalSelected: legendariesList;
  legendaryStrongerSelected: legendariesList;
  legendaryWeakerSelected: legendariesList;

  ngOnInit(): void {
    this.getLegendariesList();
    this.adjustPageSize();
  }

  @HostListener('window:resize')
  onResize() {
    this.adjustPageSize();
  }

  private adjustPageSize(): void {
    const width = window.innerWidth;
    let newPageSize = 6;
    
    if (width <= 425) {
      newPageSize = 2;
    } else if (width <= 768) {
      newPageSize = 3;
    } else if (width <= 1024) {
      newPageSize = 4;
    }
  
    if (this.pageSize !== newPageSize) {
      this.pageSize = newPageSize;
      this.getLegendariesList();
    }
  }

  getLegendariesList() {
    const cache = localStorage.getItem('legendaries');
    if (cache) {
      const legendariesList = JSON.parse(cache);

      const strongerLegendaries = legendariesList.filter((l: legendariesList) => l.atk > 95);
      const weakerLegendaries = legendariesList.filter((l: legendariesList) => l.atk <= 95);

      this.normalLegendaries = this.paginateList(legendariesList);
      this.strongerLegendaries = this.paginateList(strongerLegendaries);
      this.weakerLegendaries = this.paginateList(weakerLegendaries);

      this.legendaryNormalSelected = legendariesList[0];
      this.legendaryStrongerSelected = strongerLegendaries[0];
      this.legendaryWeakerSelected = weakerLegendaries[0];
    }
  }

  paginateList(list: legendariesList[]): legendariesList[][] {
    const paginated: legendariesList[][] = [];
    for (let i = 0; i < list.length; i += this.pageSize) {
      paginated.push(list.slice(i, i + this.pageSize));
    }
    return paginated;
  }

  legendarySelected(type: string, legendary: legendariesList) {
    switch (type) {
      case 'legendary':
        this.legendaryNormalSelected = legendary;
        return
      case 'stronger':
        this.legendaryStrongerSelected = legendary;
        return
      case 'weaker':
        this.legendaryWeakerSelected = legendary;
        return
    }
  }

  listStats = [
    { name: 'HP', key: 'hp' },
    { name: 'ATK', key: 'atk' },
    { name: 'DEF', key: 'def' },
    { name: 'SP ATK', key: 'spAtk' },
    { name: 'SP DEF', key: 'spDef' },
    { name: 'XP', key: 'xp' }
  ];
}
