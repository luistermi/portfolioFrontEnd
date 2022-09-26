import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  skills: any[] = [
    {name: "Inglés", value: 60},
    {name: "Portugués", value: 60},
    {name: "Italiano", value: 40},
    {name: "Trabajo en equipo", value: 80},
    {name: "Proactividad", value: 80}
  ];

    editable = false;
    addable = false;
    visible=true;
    contadorAddable: number[]= [];
    skillsName = "";
    skillsValue: number = 0;
    
    toEditable(){
    this.editable = true;
    }
  
    toNotEditable(){
      this.editable = false;
      this.contadorAddable = [];
      this.addable = false;
      if(this.skillsName!="" || (this.skillsValue!=null || this.skillsValue != 0)){
      let valor;
      if(this.skillsValue == null) {
        valor = 0;
      } else {
        valor = this.skillsValue};
      this.skills.push({name:this.skillsName, value: valor})
      }
      this.skillsName = "";
      this.skillsValue = 0;
      this.visible=true;
      this.cleanSkills();
    }
    
    clean(index: number): void {
      this.skills.splice(index, 1);
    }
    
    add(){
      this.addable = true;
      this.contadorAddable.push(1);
    }
    
    visibleOff(){
    this.visible=false;
    }

    cleanSkills(){
      for (let skill of this.skills){
        if (skill.name == '' && (skill.value == 0 || skill.value == null)) {
          let index = this.skills.indexOf(skill);
          this.skills.splice(index,1);
        }

        if (skill.name != '' && skill.value == null) {
          skill.value = 0;
        }
      }
    }

}
