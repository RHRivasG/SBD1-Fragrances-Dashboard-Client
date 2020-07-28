import { Component, OnInit, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogData } from './dialog-data';


@Component({
  selector: 'app-rusuer-dialog',
  templateUrl: './rusuer-dialog.component.html',
  styleUrls: ['./rusuer-dialog.component.scss']
})
export class RusuerDialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<RusuerDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  close() {
    this.data.cancelCallback()
    this.dialogRef.close()
  }

  accept() {
    this.data.callback()
    this.dialogRef.close()
  }

  ngOnInit(): void {
  }

}
