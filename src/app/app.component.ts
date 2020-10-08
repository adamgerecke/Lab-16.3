import { style } from '@angular/animations';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TODO List';
  userEntry="";
  allCompleted: boolean;
  verifyArray: boolean[];
  

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

  congrats = function() {
    for(let item of this.todoObjects) {
      if (item.completed == true) {
        this.verifyArray.push(true)
      }
      else{
        this.verifyArray.push(false)
      } 
    }
    for(let verify of this.verify) {
      if(verify = true) {
        this.allCompleted = true;
      }
      else {
        this.allCompleted = false;
      }
    }
    return this.allCompleted;
  }
  
  /*congrats = function(){
    for (let item of this.todoObjects){
      if(item.completed == false){
        this.allCompleted = false;
      }
      else{
        this.allCompleted = true; 
      }
    }
    return this.allCompleted;
  }*/

}

interface ToDo{
  task: string,
  completed: boolean
};
