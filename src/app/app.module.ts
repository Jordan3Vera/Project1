import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Formularios
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Ruta
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

// Locale para PIPES
import localeES from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeES); //registramos el LOCALE_ID de 'es para poder usarlo en los pipes

// Modules
import { ListsModule } from './modules/lists/lists.module';

// Components
import { AppComponent } from './app.component';
import { SaludoComponent } from './components/saludo/saludo.component';
import { ListaContactosComponent } from './components/lista-contactos/lista-contactos.component';
import { LoginFormComponent } from './components/forms/login-form/login-form.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactDetailPageComponent } from './pages/contact-detail-page/contact-detail-page.component';
import { FormularioAnidadoComponent } from './components/forms/formulario-anidado/formulario-anidado.component';
import { FormularioArrayComponent } from './components/forms/formulario-array/formulario-array.component';
import { FormularioValidadoComponent } from './components/forms/formulario-validado/formulario-validado.component';
import { FormularioComponent } from './components/forms/formulario/formulario.component';
import { MaterialModule } from './libraries/material/material.module';
import { EjemploPipesComponent } from './components/ejemplo-pipes/ejemplo-pipes.component';
import { MultiplicaPipe } from './pipes/multiplica.pipe';
import { CalcularPuntuacionPipe } from './pipes/calcular-puntuacion.pipe';
import { NombreCompletoPipe } from './pipes/nombre-completo.pipe';
import { RandomUserComponent } from './components/random-user/random-user.component';
import { RandomContactPageComponent } from './pages/random-contact-page/random-contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SaludoComponent,
    ListaContactosComponent,
    LoginFormComponent,
    HomePageComponent,
    LoginPageComponent,
    NotFoundPageComponent,
    ContactsPageComponent,
    ContactDetailPageComponent,
    FormularioAnidadoComponent,
    FormularioArrayComponent,
    FormularioValidadoComponent,
    FormularioComponent,
    EjemploPipesComponent,
    MultiplicaPipe,
    CalcularPuntuacionPipe,
    NombreCompletoPipe,
    RandomUserComponent,
    RandomContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    //Importanto el modulo personalizado
    ListsModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
   providers: [
    // Registramos el locale de ES para que los PIPES salgan en español
    {
      provide: LOCALE_ID, useValue: 'es'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
