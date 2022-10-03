import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BubbleComponent } from '../components/bubble/bubble.component';

@NgModule({
    declarations: [
        BubbleComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        BubbleComponent
    ]

})
export class ComponentsModule { }