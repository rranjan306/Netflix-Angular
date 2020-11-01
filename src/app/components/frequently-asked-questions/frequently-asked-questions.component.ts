import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FrequentlyAskedQuestionsService } from '../../services/frequently-asked-questions.service';

@Component({
  selector: 'frequently-asked-questions',
  templateUrl: './frequently-asked-questions.component.html',
  styleUrls: ['./frequently-asked-questions.component.scss']
})
export class FrequentlyAskedQuestionsComponent implements OnInit {

	showParagraph: boolean = false;
	questins$: Observable<any>;

  constructor(private faqs: FrequentlyAskedQuestionsService) { }

  ngOnInit(): void {
  	this.questins$ = this.faqs.fetchFrequentlyAskedQuestions();
  }

  onParagraphToggle(question): void {
  	question.showParagraph = !question.showParagraph;
  }
}
