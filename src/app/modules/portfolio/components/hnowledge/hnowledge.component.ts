import { Component, signal } from '@angular/core';

// interface
import { IKnowledge } from '../../interfaces/IKnowledge.interface';

@Component({
  selector: 'app-hnowledge',
  standalone: true,
  imports: [],
  templateUrl: './hnowledge.component.html',
  styleUrl: './hnowledge.component.scss'
})
export class HnowledgeComponent {
  public arrayHnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/knowledge/html5.svg',
      alt:' icone conhecimento em html5',
    },
    {
      src:'assets/icons/knowledge/css3.svg',
      alt:' icone conhecimento em css3',
    },
    {
      src:'assets/icons/knowledge/js.svg',
      alt:' icone conhecimento em javascript',
    },
    {
      src:'assets/icons/knowledge/angular.svg',
      alt:' icone conhecimento em angular',
    },
    {
      src:'assets/icons/knowledge/react.svg',
      alt:' icone conhecimento em react',
    },
    {
      src:'assets/icons/knowledge/node.svg',
      alt:' icone conhecimento em node',
    },
    {
      src:'assets/icons/knowledge/aws.svg',
      alt:' icone conhecimento em aws',
    },
  ])

}
