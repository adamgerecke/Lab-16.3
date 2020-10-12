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
  
  content : string = "";
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

  public highlight(){
      //Reading ALOT about PIPE and FILTER for this, not 100% which to use, or how to implement them, everything I have attempted thus far has failed.
      //
      //After spending another hour or so reasearching Pipe, and Filter, I wanted to go a different route, and just highlight the searched for text instead.
      //After several different attempts I was unable to come up with a working solution. Hopfully this will be something we cover in class this week, so I can ask questions
      //and understand better.

      if (!this.searchEntry){
        return this.content;
      }
      return this.content.replace(new RegExp(this.searchEntry, "gi"), match => {
        return '<span class="highlightText">' + match + '</span>';
    });
  }


}

interface ToDo{
  task: string,
  completed: boolean
};
