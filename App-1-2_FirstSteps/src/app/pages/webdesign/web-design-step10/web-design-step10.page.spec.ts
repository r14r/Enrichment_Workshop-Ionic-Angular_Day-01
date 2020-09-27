import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStep10Page } from './web-design-step10.page';

describe('WebDesignStep10Page', () => {
  let component: WebDesignStep10Page;
  let fixture: ComponentFixture<WebDesignStep10Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignStep10Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStep10Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
