import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

import { ToggleStarComponent } from './toggle-star.component';

describe('ToggleStarComponent', () => {
  let fixture: ComponentFixture<ToggleStarComponent>;
  let component: ToggleStarComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ToggleStarComponent,
      ],
      schemas: [
        NO_ERRORS_SCHEMA,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToggleStarComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have different icons for different isMarked states', () => {
    component.isMarked = true;

    const currentIcon: IconDefinition = component.starIcon;

    component.isMarked = false;

    expect(component.starIcon).not.toEqual(currentIcon);
  });

  it('should add marked class when isMarked value sets to true', () => {
    expect(component.isMarkedClass).toBeFalsy();

    component.isMarked = true;

    expect(component.isMarkedClass).toBeTruthy();
  });

  it('should change the title value according to the state', () => {
    expect(component.title).toBe('Добавить в избранное');

    component.isMarked = true;

    expect(component.title).toBe('Убрать из избранного');
  });
});
