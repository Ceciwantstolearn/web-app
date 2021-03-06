import { LanguageService } from 'src/app/core/services/language.service';
import { Component, OnInit, AfterViewInit,  Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input() project;

  constructor(
    private router: Router,
    public langService: LanguageService
  ) { }

  goToProject() {
    this.router.navigateByUrl('project/' + this.project._id);
  }

  ngOnInit() {
    if (this.project.imageUrl === null) {
      this.project.imageUrl = 'assets/logos/hm.png';
    }
  }
}


