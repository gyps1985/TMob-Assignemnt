import { expect, Assertion } from 'chai';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedTestingModule } from '@tmo/shared/testing';

import { BooksFeatureModule } from '../books-feature.module';
import { BookSearchComponent } from './book-search.component';

describe('ProductsListComponent', () => {
  let component: BookSearchComponent;
  let fixture: ComponentFixture<BookSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, NoopAnimationsModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).to.exist;
  });

  it('should search books with result on form submit',()=>{
    component.searchForm.controls['term'].setValue('Javascript');
    component.searchBooks();

    expect(component.books.length).to.equals(true);
  })

  it('should give empty result on form submit with no text value',()=>{
    component.searchForm.controls['term'].setValue('');
    component.searchBooks();

    expect(component.books.length).to.equals(0);
  })
});
