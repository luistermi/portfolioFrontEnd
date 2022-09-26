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

  skills = [
    {skill: "Inglés", porcentaje: 60},
    {skill: "Portugués", porcentaje: 60},
    {skill: "Italiano", porcentaje: 40},
    {skill: "Trabajo en equipo", porcentaje: 80},
    {skill: "Proactividad", porcentaje: 80}
  ];

    editable = false;
    addable = false;
    visible=true;
    contadorAddable: number[]= [];
    skillsSkill = "";
    skillsPorcentaje: number = 0;
    
    toEditable(){
    this.editable = true;
    }
  
    toNotEditable(){
      this.editable = false;
      this.contadorAddable = [];
      this.addable = false;
      if(this.skillsSkill!="" || (this.skillsPorcentaje!=null || this.skillsPorcentaje != 0)){
      this.skills.push({skill:this.skillsSkill, porcentaje: this.skillsPorcentaje})
      }
      this.skillsSkill = "";
      this.skillsPorcentaje = 0;
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
        if (skill.skill == '' && (skill.porcentaje == 0 || skill.porcentaje == null)) {
          let index = this.skills.indexOf(skill);
          this.skills.splice(index,1);
        }
      }
    }

}
