import { Component, OnInit } from '@angular/core';
import { ModuleTree } from '../bean/ModuleTree';
import { EditorConfig } from '../config/EditorConfig';
declare var editormd: any;
@Component({
  selector: 'face-body',
  templateUrl: './face-body.component.html',
  styleUrls: ['./face-body.component.css']
})
export class FaceBodyComponent implements OnInit {
  isCollapsed = false;
  moduleTree =new Array();
  isVisible=false;
  constructor() {
    
   }

  ngOnInit(): void {
    this.initModule();
  }
  initModule() {
    var root = new ModuleTree(
      "根节点","home","/home",1,-1,null,-1,1
    );
    var quickStart = new ModuleTree(
      "快速开始","quickStart","/home/quickStart",2,1,null,1,1
    );
    var test = new ModuleTree(
      "测试","test","/home/quickStart",3,1,null,1,2
    );
    
    var test1 = new ModuleTree(
      "测试1","test1","/home/quickStart",4,3,null,2,1
    );

    var myStar = new ModuleTree(
      "收藏训练","starTrain","/home/starTrain",2,1,null,2,1
    )
    var MyQuestions = new ModuleTree(
      "题库列表","questionTable","/home/questionTable",2,1,null,3,1
    )
    // test.subModules.push(test1);
 
    root.subModules.push(quickStart);
    root.subModules.push(myStar);
    root.subModules.push(MyQuestions);
    // root.subModules.push(test);

    this.moduleTree = root.subModules;
  }
  show(){
    this.isVisible=true
 }
 onConfirm(event){
   console.log(event)
 }
 onCancel( ){
   this.isVisible=false;
 }
}
