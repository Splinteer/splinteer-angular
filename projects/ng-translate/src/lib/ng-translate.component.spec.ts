import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTranslateComponent } from './ng-translate.component';

describe('NgTranslateComponent', () => {
  let component: NgTranslateComponent;
  let fixture: ComponentFixture<NgTranslateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTranslateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
