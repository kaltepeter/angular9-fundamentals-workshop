import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  private courses = [
    {
      id: 1,
      title: 'Angular 9 Fundamentals!!',
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

  all() {
    return this.courses;
  }

  find(courseId) {
    console.log('CoursesService -> find -> courseId', courseId);
  }

  create(course) {
    console.log('CoursesService -> create -> course', course);
  }

  update(course) {
    console.log('CoursesService -> update -> course', course);
  }

  delete(courseId) {
    console.log('CoursesService -> delete -> courseId', courseId);
  }
}
