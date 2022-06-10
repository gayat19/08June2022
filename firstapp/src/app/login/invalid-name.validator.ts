import { AbstractControl, ValidatorFn } from "@angular/forms";

export function nameNotAllowedValidator(control:AbstractControl){

        if(control.value=="admin")
            return {err:"Not allowed username"};
        else
            return null;

}