import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals',
      description: 'Learn the fundamentals of Angular 9',
      percentComplete: 26,
      favorite: true,
    },
    {
      id: 2,
      title: 'Javascript the Really REALLY HARD PARTS',
      description: 'Worship Will Sentance',
      percentComplete: 50,
      favorite: true,
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.resetSelectedCourse();
  }

  formatLabel(value: number) {
    return Math.round(value);
  }

  resetSelectedCourse() {
    this.selectedCourse = {
      id: null,
      title: '',
      description: '',
      percentComplete: 0,
      favorite: false,
    };
  }

  selectCourse(course) {
    this.selectedCourse = course;
  }

  deleteCourse(courseId) {
    console.log(`Course ${courseId} deleted.`);
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse() {
    console.log(this);
  }
}
