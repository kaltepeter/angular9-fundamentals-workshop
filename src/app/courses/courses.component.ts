import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../shared/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  selectedCourse = null;
  courses = null;

  constructor(private coursesService: CoursesService) {}

  ngOnInit(): void {
    this.resetSelectedCourse();
    this.courses = this.coursesService.all();
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
    this.coursesService.delete(courseId);
  }

  cancel() {
    this.resetSelectedCourse();
  }

  saveCourse(course) {
    if (course.id) {
      this.coursesService.update(course);
    } else {
      this.coursesService.create(course);
    }
  }
}
