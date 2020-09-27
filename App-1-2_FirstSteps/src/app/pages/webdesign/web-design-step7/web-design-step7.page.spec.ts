import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStep7Page } from './web-design-step7.page';

describe('WebDesignStep7Page', () => {
  let component: WebDesignStep7Page;
  let fixture: ComponentFixture<WebDesignStep7Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignStep7Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStep7Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
