import { style } from '@angular/animations';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  userEntry="";
  updateEntry="";
  allCompleted: boolean;
  

  todoObjects:ToDo[] = [
    {task: 'Patch Andy\'s Drywall hole', completed:false},
    {task: 'Pizza Party @ Gabes', completed:false},
    {task: 'BOBODDY', completed:true},
    {task: 'Make Chili', completed:true},
    {task: 'Mop the Carpet', completed:false},
    {task: 'Make another Chili to replace the one that fell on the carpet', completed:false},
    {task: 'Chat with Robert California', completed:false},
    {task: 'Finish Rabies 5k', completed:false},
    {task: 'Remove stapler from Jello', completed:false},
  ];

  completeTask = function(i){
    this.todoObjects[i].completed = true;
  }

    addTheTask = function(){
    let newTask = {task: this.userEntry, completed:false}
    if(!!this.userEntry){
      this.todoObjects.push(newTask)
    }
    this.userEntry=''
    
  }

  remove = function(i){
    this.todoObjects.splice(i,1);
  }

  Congrats = function(){

      if(this.todoObjects.some(task => task.completed === false)){
        return true;
      }
      return false;

  }
  
  updateTheTask = function(i){
    this.todoObjects[i].task = this.updateEntry;
  }


}

interface ToDo{
  task: string,
  completed: boolean
};
