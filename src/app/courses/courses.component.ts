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
    this.loadCourses();
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

  loadCourses() {
    this.courses = this.coursesService
      .all()
      .subscribe((courses) => (this.courses = courses));
  }

  refreshCourses() {
    this.resetSelectedCourse();
    this.loadCourses();
  }
  saveCourse(course) {
    if (course.id) {
      this.coursesService
        .update(course)
        .subscribe((res) => this.refreshCourses());
    } else {
      this.coursesService
        .create(course)
        .subscribe((res) => this.refreshCourses());
    }
  }
  deleteCourse(courseId) {
    this.coursesService
      .delete(courseId)
      .subscribe((res) => this.refreshCourses());
  }

  cancel() {
    this.resetSelectedCourse();
  }
}
