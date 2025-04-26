import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentaryListComponent } from './commentary-list.component';

describe('CommentaryListComponent', () => {
  let component: CommentaryListComponent;
  let fixture: ComponentFixture<CommentaryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CommentaryListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommentaryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
