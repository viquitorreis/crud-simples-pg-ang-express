import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../models/userInterface';
import { UserServiceService } from '../services/user-service.service';
import { TableUsersDataSource, TableUsersItem } from './table-users-datasource';

@Component({
  selector: 'app-table-users',
  templateUrl: './table-users.component.html',
  styleUrls: ['./table-users.component.css']
})
export class TableUsersComponent implements OnInit, AfterViewInit {

  /** Colunas que vão ser mostradas na table.*/
  displayedColumns = ['id', 'name', 'acao'];

  dataSource = new MatTableDataSource

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private userService: UserServiceService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
    .subscribe((resp: User[]) => {
      this.dataSource.data = resp
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  cancelar(): void{
    this.router.navigate([''])
  }
}
