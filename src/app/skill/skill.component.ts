interface Skill_INTR {
  skill: string;
  dataProgress: string;
  width?: number;
}
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { SkillsService } from './skills.service';
@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
// AfterViewInit
export class SkillComponent implements OnInit, AfterViewInit {
  title = 'OUR-SKILLS';
  @ViewChild('skill_sec') skill_sec!: ElementRef;
  grow_smozzy = false;
  @ViewChild('counterElement') counterElement!: ElementRef;
  constructor(private skill: SkillsService) {}
  ngOnInit(): void {
    this.Get_data_from_SERVICES();
    this.From_ZERO_TO_TOP();
  }
  ngAfterViewInit(): void {
    this.From_ZERO_TO_TOP();
  }

  Skills: Skill_INTR[] = [];
  Get_data_from_SERVICES() {
    this.skill.Get_data_From_SERVER().subscribe((data: any) => {
      this.Skills = data.map((skill: any) => {
        const width = parseInt(skill.dataProgress, 10);

        return { ...skill, width };
      });
      console.log(this.Skills);
    });
  }

  From_ZERO_TO_TOP() {
    const skillSecOffsetTop = this.skill_sec.nativeElement.offsetTop;
    console.log(skillSecOffsetTop);
    window.addEventListener('scroll', () => {
      if (window.scrollY >= skillSecOffsetTop) {
        this.grow_smozzy = true;
        this.Skills.forEach((DA_Porg) => {
          const targetWidth = DA_Porg.width!; // حفظ القيمة المستهدفة
          let interval = setInterval(() => {
            if (DA_Porg.width! < targetWidth) {
              // التحقق من عدم وصول العرض الحالي للقيمة المستهدفة
              DA_Porg.width = DA_Porg.width! + 1; // زيادة العرض الحالي
            } else {
              clearInterval(interval); // إيقاف الزيادة عندما يتساوى العرض الحالي بالقيمة المستهدفة
            }
          }, 100);
        });
      }
    });
  }
}
