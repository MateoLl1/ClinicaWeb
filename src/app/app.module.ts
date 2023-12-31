import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//* Rutas
import { APP_ROUTING } from './app.routes';

//* Pipes

// * Componenets
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SliderComponent } from './components/slider/slider.component';
import { AccessComponent } from './components/access/access.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageFileComponent } from './components/shared/image-file/image-file.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { TpEmpleadosFormComponent } from './components/formularios/tp-empleados-form/tp-empleados-form.component';
import { EspmedFormComponent } from './components/formularios/espmed-form/espmed-form.component';

//* Service
import { HttpClientModule } from '@angular/common/http';
import { ImagenService } from './services/imagen.service';
import { FormsModule } from '@angular/forms';
import { AppThemeService } from './services/app-theme.service';
import { EmpleadoFormComponent } from './components/formularios/empleado-form/empleado-form.component';
import { DoctorFormComponent } from './components/formularios/doctor-form/doctor-form.component';
import { EmpleadosEliminadosFormComponent } from './components/formularios/empleados-eliminados-form/empleados-eliminados-form.component';
import { EspecialidadComponent } from './components/shared/especialidad/especialidad.component';
import { MedicoComponent } from './components/roles/medico/medico.component';
import { RecepcionComponent } from './components/roles/recepcion/recepcion.component';
import { UsuarioComponent } from './components/roles/usuario/usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PublicidadComponent,
    NosotrosComponent,
    SliderComponent,
    AccessComponent,
    ImageFileComponent,
    LoginComponent,
    AdminComponent,
    TpEmpleadosFormComponent,
    EspmedFormComponent,
    EmpleadoFormComponent,
    DoctorFormComponent,
    EmpleadosEliminadosFormComponent,
    EspecialidadComponent,
    MedicoComponent,
    RecepcionComponent,
    UsuarioComponent,
  ],
  imports: [APP_ROUTING, BrowserModule, FormsModule, HttpClientModule],
  providers: [ImagenService, AppThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
