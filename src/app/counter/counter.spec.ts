import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'; // <-- Add this
import { CounterComponent } from './counter.component';

describe('CounterComponent (DOM)', () => {
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(CounterComponent);
    fixture.detectChanges();
  });

  it('should increase count when "+" button is clicked', () => {
    const button = fixture.debugElement.query(By.css('button:first-of-type'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    const counterText = fixture.nativeElement.querySelector('h2').textContent;
    expect(counterText).toContain('1');
  });

it('should decrease count when "-" button is clicked', () => {
  const decrementButton = fixture.nativeElement.querySelector('button:nth-child(2)');
  decrementButton.click();
  fixture.detectChanges();

  const h2 = fixture.nativeElement.querySelector('h2');
  expect(h2.textContent).toContain('-1');
});
});
