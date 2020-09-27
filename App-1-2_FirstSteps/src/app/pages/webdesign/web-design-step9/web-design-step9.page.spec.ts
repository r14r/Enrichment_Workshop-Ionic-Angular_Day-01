import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStep9Page } from './web-design-step9.page';

describe('WebDesignStep9Page', () => {
  let component: WebDesignStep9Page;
  let fixture: ComponentFixture<WebDesignStep9Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignStep9Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStep9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
