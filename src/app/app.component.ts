import { style } from '@angular/animations';
import { THIS_EXPR, ThrowStmt } from '@angular/compiler/src/output/output_ast';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  title : string = 'TODO List';
  userEntry : string ="";
  updateEntry : string ="";
  searchEntry : string ="";
  
  index : number;

  updateEnable : boolean = false;
  
  

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

  toggleUpdate = function(i){
    this.updateEnable = true;
    this.index = i;
  }
  
  updateTheTask = function(i){
    if (!!this.updateEntry){
      this.todoObjects[i].task = this.updateEntry;
      this.updateEnable = false;
      this.updateEntry = '';
    }

  }

  updateOff = function(){
    this.updateEnable = false;
  }

  searchTask = function(i){
    let searchIndex : number = 0
    for (let query of this.todoObjects){
      if(query.task == this.searchEntry[i].task){
        this.todoObjects.splice(searchIndex,1)
      }
    }

  }


}

interface ToDo{
  task: string,
  completed: boolean
};
