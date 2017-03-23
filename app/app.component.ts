import { Component } from '@angular/core';
import { Keg } from './keg.model';

@Component ({
  selector: 'my-app',
  template: `
<div class="container">
<h1> Welcome to Collins Keg bar </h1>
<keg-list
  [childTaskList]="masterTaskList"
  (clickSender)="showDetails($event)"
  ></keg-list>
<edit-keg
  [childSelectedTask]="selectedTask"
  (doneClickedSender)="finishedEditing()"
  ></edit-keg>
<new-keg
  (newTaskSender)="addTask($event)"
  ></new-task>
</div>
  `
})

export class AppComponent {
  // array used to pass the tasks into the task list component(child component) to enable data down, actions up //
  // masterTaskList//
  public masterTaskList: Keg[] = [
    new Keg("Create To-Do List app.", 0),
    new Keg("Learn Kung Fu.", 1),
    new Keg("Rewatch all the Lord of the Rings movies.", 2),
    new Keg("Do the laundry.", 3)
  ];
  selectedTask: Keg = null;
  showDetails(clickedTask: Keg) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChild: Keg) {
    this.masterTaskList.push(newTaskFromChild);
  }
}
