import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interfaces/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiencies = signal<IExperiences[]>([
    {
      summary:{
        strong:'front end ',
        p: 'julho 2022 ás setembro 2022',
      },
      text:'desde julho de 2022 eu trabalhei como desenvolvimento front end dou <br/> autalização no desenvolvimento front end bootstrap e javascript',
    },
    {
      summary:{
        strong:'front end  ',
        p: 'julho 2023 no momento',
      },
      text:'eu trabalho voluntário na empresa RadicalSP dando suporte em desenvolvimento multimidia, <br/>site, cuidando automação de eventos!, usando html, css e javascript',
    },
  ]);
}
