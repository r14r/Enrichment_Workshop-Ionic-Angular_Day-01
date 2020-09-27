import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebDesignStep11Page } from './web-design-step11.page';

describe('WebDesignStep11Page', () => {
  let component: WebDesignStep11Page;
  let fixture: ComponentFixture<WebDesignStep11Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebDesignStep11Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebDesignStep11Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
