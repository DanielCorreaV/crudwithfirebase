import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
  standalone:false
})
export class NotificationComponent  implements OnInit {
  @Input() message: string = '¿Estás seguro?';
  @Input() icon: string = 'alert-circle-outline'; 
  @Input() behavior: string = 'toast';
  @Input() time: number = 2000;
  showbuttons: boolean=false;
  @Output() confirm = new EventEmitter<boolean>();
  @Input() color: string = '--ion-color-success';

  constructor() { }

  ngOnInit() {
    if(this.behavior == 'toast'){
      this.playSound();
      setTimeout(()=>{
        this.closePopup(true);
      },2000)
    }
    else if(this.behavior =='YES_NO_QUESTION'){
      this.showbuttons=true;
    }
  }

  playSound() {
    const audio = new Audio('assets/sounds/check.mp3');
    audio.play();
  }


  closePopup(response: boolean) {
    this.confirm.emit(response);
  }

}
