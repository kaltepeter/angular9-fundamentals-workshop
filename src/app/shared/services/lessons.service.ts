import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LessonsService {
  private lessons = [
    { title: 'Hello Angular' },
    { title: 'Component Fundamentals' },
    { title: 'Template Driven Forms' },
    { title: 'Angular Services' },
    { title: 'Server Communication' },
    { title: 'Component Driven Architecture' },
    { title: 'Angular Routing' },
    { title: 'Unit Testing Fundamentals' },
  ];

  constructor() { }

  all() {
    return this.lessons;
  }

  find(lessonId) {
    console.log('lessonsService -> find -> lessonId', lessonId);
  }

  create(lesson) {
    console.log('lessonsService -> create -> lesson', lesson);
  }

  update(lesson) {
    console.log('lessonsService -> update -> lesson', lesson);
  }

  delete(lessonId) {
    console.log('lessonsService -> delete -> lessonId', lessonId);
  }
}
