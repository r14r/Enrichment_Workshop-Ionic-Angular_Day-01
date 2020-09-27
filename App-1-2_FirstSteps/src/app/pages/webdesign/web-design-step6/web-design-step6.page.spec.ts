import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStep6Page } from './web-design-step6.page';

describe('WebDesignStep6Page', () => {
  let component: WebDesignStep6Page;
  let fixture: ComponentFixture<WebDesignStep6Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignStep6Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStep6Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
