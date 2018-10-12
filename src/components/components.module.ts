import { NgModule } from '@angular/core';
import { MapComponent } from './map/map';
import { RegisterComponent } from './register/register';
@NgModule({
	declarations: [MapComponent,
    RegisterComponent],
	imports: [],
	exports: [MapComponent,
    RegisterComponent]
})
export class ComponentsModule {}
