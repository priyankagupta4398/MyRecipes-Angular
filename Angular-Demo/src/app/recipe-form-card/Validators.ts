import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { validateUrl } from '../../../node_modules/youtube-validat';

export class CustomValidators {
    static validRecipeTime(control: AbstractControl): ValidationErrors | null {
        const timepattern = new RegExp(/(^[0-9]{1,2})\s*(?:minutes|mins?|days?|day?|hours?)?$/);
        if (!timepattern.test(control.value)) {
            return { validRecipeTime: true };
        }
        return null;

    }
    static validNoOfServes(control: AbstractControl): ValidationErrors | null {
        const validServes = [];
        for (let i = 1; i < 11; i++) {
            validServes.push('' + i);
        }
        console.log('validServes');
        console.log(validServes);

        if (control.value && !validServes.includes(control.value)) {
            return { validNoOfServes: true };
        }
        return null;
    }

    static validRecipeName(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === 'Dalwada') {
                    resolve({ validRecipeName: true });
                } else {
                    resolve(null);
                }
            }, 1500);
        });
    }

    static validYouTubeUrl(control: AbstractControl): ValidationErrors | null  {
        // tslint:disable-next-line: max-line-length
        const urlPattern = new RegExp(/^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/);
        if (!urlPattern.test(control.value)) {
            return { validYouTubeUrl: true };
        }
        return null;
    }


}
