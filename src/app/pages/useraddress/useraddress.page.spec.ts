import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UseraddressPage } from './useraddress.page';

describe('UseraddressPage', () => {
  let component: UseraddressPage;
  let fixture: ComponentFixture<UseraddressPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UseraddressPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
