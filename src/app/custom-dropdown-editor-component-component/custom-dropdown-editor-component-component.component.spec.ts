import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomDropdownEditorComponentComponentComponent } from './custom-dropdown-editor-component-component.component';

describe('CustomDropdownEditorComponentComponentComponent', () => {
  let component: CustomDropdownEditorComponentComponentComponent;
  let fixture: ComponentFixture<CustomDropdownEditorComponentComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomDropdownEditorComponentComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomDropdownEditorComponentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
