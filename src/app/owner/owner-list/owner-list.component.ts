import { RepositoryService } from './../../shared/repository.service';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Owner } from '../../interface/owner.model';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public displayedColumns = ['name', 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
  public dataSource = new MatTableDataSource<Owner>();

  constructor(private repoService: RepositoryService) { }

  ngOnInit() {
    this.getAllOwners();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public getAllOwners = () => {
    /* this.repoService.getData('api/owner')
    .subscribe(res => {
      this.dataSource.data = res as Owner[];
    }); */
    this.dataSource.data = [
      {'id': '1', 'address': '27 Colored Row', 'dateOfBirth': new Date('Nov 14, 1994') , 'name': 'Anna Bosh'},
      {'id': '2', 'address': 'Congress Avenue 56', 'dateOfBirth': new Date('Apr 19, 2000') , 'name': 'Daniel Batista'},
      {'id': '3', 'address': 'Dave\'s Street 23', 'dateOfBirth': new Date('Mar 29, 2009') , 'name': 'Dave'},
      {'id': '4', 'address': '61 Wellfield Road', 'dateOfBirth': new Date('Dec 30, 1980') , 'name': 'John Keen'},
      {'id': '5', 'address': '3 Edgar Buildings', 'dateOfBirth': new Date('May 21, 1983') , 'name': 'Martin Miller'},
      {'id': '6', 'address': '91 Westren roads', 'dateOfBirth': new Date('Apr 22, 1990') , 'name': 'Sam Query'},
    ];
  }

  public redirectToDetails = (id: string) => {

  }

  public redirectToUpdate = (id: string) => {

  }

  public redirectToDelete = (id: string) => {

  }
  public doFilter = (value: string) => {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
}
