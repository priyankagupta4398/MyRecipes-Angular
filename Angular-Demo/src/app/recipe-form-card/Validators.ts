import { AbstractControl, ValidationErrors } from '@angular/forms';
// import { validateUrl } from 'youtube-validate';

export class CustomValidators {
    static validRecipeTime(control: AbstractControl): ValidationErrors | null {
        const validTimes = ['day', Number + ' ' + 'mins', Number + ' ' + 'hours'];
        if (control.value && !validTimes.includes(control.value)) {
            return { validRecipeTime: true };
        }
        return null;
    }
    static validNoOfServes(control: AbstractControl): ValidationErrors | null {
        const validServes = [];
        for (let i = 0; i < 11; i++) {
            validServes.push('' + i);
        }
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

    static validYouTubeUrl(control: AbstractControl): ValidationErrors | null {
        //    validateUrl(control.value)
        //    .then(res => {
            return null;
        //    }).catch({
        //     return {validYouTubeUrl: true}
        //    });
        // return new Promise((resolve, reject) => {
        //     validateUrl(control.value)
        //    .then(res => {
        //        console.log("Res YOutube Url");
        //     console.log(res);

            // resolve(null);
        //    }).catch({
        //    // resolve({ validYouTubeUrl: true });
        //    });
        // });
    }


}
