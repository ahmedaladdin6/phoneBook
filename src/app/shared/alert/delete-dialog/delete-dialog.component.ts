import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { SnackBarComponent } from '../snack-bar/snack-bar.component';
@Component({
  selector: 'app-delete-dialog',
  templateUrl: './delete-dialog.component.html',
  styleUrls: ['./delete-dialog.component.scss']
})
export class DeleteDialogComponent implements OnInit {
  contacts: any = [];
  contactsAfterDeleteItem: any = [];
  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UsersService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(result => {
      this.contacts = result;
    })
  }
  onCancel() {
    this.dialogRef.close();
  }
  onDelete() {
    this.userService.deleteUser(this.data.id).subscribe(reseult => {
      this.contactsAfterDeleteItem.push(this.data);
    })
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackBarComponent, {
      duration: 2000,
    });
  }
}
