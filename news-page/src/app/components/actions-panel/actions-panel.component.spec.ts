import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ActionsPanelComponent } from './actions-panel.component';

describe('ActionsPanelComponent', () => {
  let component: ActionsPanelComponent;
  let fixture: ComponentFixture<ActionsPanelComponent>;
  let el: HTMLSelectElement;
  const secondOptionSource = 'bbc-news';

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    el = fixture.debugElement.query(By.css('select')).nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should source display second option source', () => {
    el.value = el.options[2].value;
    expect(el.value).toContain(secondOptionSource);
  });

  it('should currentNewsSource display second option source', () => {
    el.value = el.options[2].value;
    el.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(component.currentNewsSource).toContain(secondOptionSource);
  });
});
