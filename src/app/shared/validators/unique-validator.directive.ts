import { Directive } from '@angular/core';
import { AsyncValidator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import { UsersService } from '../services/users.service';
import * as _ from 'lodash';
@Directive({
  selector: '[uniqueNumber]',
  providers: [{provide :NG_ASYNC_VALIDATORS, useExisting: UniqueValidatorDirective, multi: true}]
})
export class UniqueValidatorDirective implements AsyncValidator {
   phones:any=[];
  constructor(private userService: UsersService) { }
  validate(c: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    return  this.userService.getUsers().pipe(
      map((users:any)=>{
        users.map(users=>{
          this.phones.push(users.phone);
        })
        
        return _.includes(this.phones, c.value) ? {'uniqueNumber':true}:null;
      })
    )
  
  
   }
}
 