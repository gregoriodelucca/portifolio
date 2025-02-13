import { Component, signal } from '@angular/core';
import { IEProjects } from '../../interfaces/IEProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IEProjects[]>([
    {
      src: 'assets/projects/aassoft.png',
      alt: '',
      title: 'empresa software assoft',
      with:'100px',
      height:'51px',
      description:'somos a empresa desenvolvimento de software a mais de 10  anos',
      links: [
        {
          name:'conheça a empresa assoft',
          href:'https://www.aasoft.com.br',
        },
      ],
    },
  ]);

}
