import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PublicidadComponent } from './components/shared/publicidad/publicidad.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/roles/admin/admin.component';
import { TpEmpleadosFormComponent } from './components/formularios/tp-empleados-form/tp-empleados-form.component';
import { EspmedFormComponent } from './components/formularios/espmed-form/espmed-form.component';
import { EmpleadoFormComponent } from './components/formularios/empleado-form/empleado-form.component';
import { DoctorFormComponent } from './components/formularios/doctor-form/doctor-form.component';
import { EmpleadosEliminadosFormComponent } from './components/formularios/empleados-eliminados-form/empleados-eliminados-form.component';
import { EspecialidadComponent } from './components/shared/especialidad/especialidad.component';
import { authGuard } from './guards/auth.guard';
import { formAdGuard } from './guards/form-ad.guard';
import { MedicoComponent } from './components/roles/medico/medico.component';
import { RecepcionComponent } from './components/roles/recepcion/recepcion.component';
import { UsuarioComponent } from './components/roles/usuario/usuario.component';
import { medicoGuard } from './guards/medico.guard';
import { recepcionGuard } from './guards/recepcion.guard';
import { usuarioGuard } from './guards/usuario.guard';
import { NoticiasFormComponent } from './components/formularios/noticias-form/noticias-form.component';
import { GenerarCitaMedicaComponent } from './components/roles/negocio/generar-cita-medica/generar-cita-medica.component';
import { CitasAsignadasDoctoresComponent } from './components/roles/negocio/citas-asignadas-doctores/citas-asignadas-doctores.component';
import { CitasAsignadasPacientesComponent } from './components/roles/negocio/citas-asignadas-pacientes/citas-asignadas-pacientes.component';
import { ActualizarPacienteComponent } from './components/roles/negocio/actualizar-paciente/actualizar-paciente.component';
import { CalendarioDoctorComponent } from './components/roles/medico/logic/calendario-doctor/calendario-doctor.component';
import { ConsultaPacienteComponent } from './components/roles/medico/logic/consulta-paciente/consulta-paciente.component';
import { HistorialPacienteComponent } from './components/roles/usuario/historial-paciente/historial-paciente.component';
import { HistoriaInfoComponent } from './components/roles/usuario/historia-info/historia-info.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'publicidad', component: PublicidadComponent },
  { path: 'login', component: LoginComponent },
  //? ROLES
  { path: 'admin', component: AdminComponent, canActivate: [authGuard] },
  { path: 'medico', component: MedicoComponent, canActivate: [medicoGuard] },
  {
    path: 'recepcion',
    component: RecepcionComponent,
    canActivate: [recepcionGuard],
  },
  { path: 'usuario', component: UsuarioComponent, canActivate: [usuarioGuard] },

  { path: 'especialidad/:id', component: EspecialidadComponent },
  //? FORMULARIOS ADMIN
  {
    path: 'noticiasForm',
    component: NoticiasFormComponent,
    canActivate: [formAdGuard],
  },
  {
    path: 'tpEmpleadoForm',
    component: TpEmpleadosFormComponent,
    canActivate: [formAdGuard],
  },
  {
    path: 'espmedForm',
    component: EspmedFormComponent,
    canActivate: [formAdGuard],
  },
  {
    path: 'empleadosForm',
    component: EmpleadoFormComponent,
    canActivate: [formAdGuard],
  },
  {
    path: 'doctorForm',
    component: DoctorFormComponent,
    canActivate: [formAdGuard],
  },
  {
    path: 'empleadosEliminadosForm',
    component: EmpleadosEliminadosFormComponent,
    canActivate: [formAdGuard],
  },

  //? NEGOCIO
  //? RECEPCION
  {
    path: 'generarCitaMedica',
    component: GenerarCitaMedicaComponent,
    canActivate: [recepcionGuard],
  },
  {
    path: 'verCitasDoctores',
    component: CitasAsignadasDoctoresComponent,
    canActivate: [recepcionGuard],
  },
  {
    path: 'verCitasPacientes',
    component: CitasAsignadasPacientesComponent,
    canActivate: [recepcionGuard],
  },
  {
    path: 'actualicar-paciente',
    component: ActualizarPacienteComponent,
    canActivate: [recepcionGuard],
  },

  //! NEGOCION
  //! MEDICOS
  {
    path: 'calendario-doctor',
    component: CalendarioDoctorComponent,
    canActivate: [medicoGuard],
  },

  {
    path: 'consulta-paciente/:espID/:dcID/:paID/:agID',
    component: ConsultaPacienteComponent,
    canActivate: [medicoGuard],
  },

  {
    path: 'historial-paciente',
    component: HistorialPacienteComponent,
    canActivate: [medicoGuard],
  },

  {
    path: 'historia-info',
    component: HistoriaInfoComponent,
    canActivate: [medicoGuard],
  },

  { path: '**', pathMatch: 'full', redirectTo: '/home' },
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
