import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdviceComponent } from './advice/advice.component';

@NgModule({
    declarations: [
        AdviceComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        AdviceComponent
    ]

})
export class ComponentsModule { }