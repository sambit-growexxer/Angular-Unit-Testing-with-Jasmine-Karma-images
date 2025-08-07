import {
  By,
  init_platform_browser
} from "./chunk-32YG22XU.js";
import {
  CommonModule,
  Component,
  TestBed,
  __decorate,
  init_common,
  init_core,
  init_testing,
  init_tslib_es6
} from "./chunk-BJ2N3SOH.js";
import {
  __async,
  __commonJS,
  __esm
} from "./chunk-TTULUY32.js";

// angular:jit:template:src\app\counter\counter.component.html
var counter_component_default;
var init_counter_component = __esm({
  "angular:jit:template:src\\app\\counter\\counter.component.html"() {
    counter_component_default = '<h2 *ngIf="count !== 0">Count: {{ count }}</h2>\r\n<h2 *ngIf="count === 0">No count yet</h2>\r\n\r\n<div class="btn-group">\r\n  <button (click)="increment()">Increment</button>\r\n  <button (click)="decrement()">Decrement</button>\r\n  <button (click)="reset()">Reset</button>\r\n</div>\r\n';
  }
});

// angular:jit:style:src\app\counter\counter.component.css
var counter_component_default2;
var init_counter_component2 = __esm({
  "angular:jit:style:src\\app\\counter\\counter.component.css"() {
    counter_component_default2 = "/* src/app/counter/counter.component.css */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: Arial, sans-serif;\n  margin-top: 50px;\n}\nh2 {\n  font-size: 24px;\n  font-weight: bold;\n  margin-bottom: 20px;\n}\nbutton {\n  padding: 10px 20px;\n  margin: 5px;\n  font-size: 16px;\n  font-weight: 500;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.3s ease-in-out;\n}\nbutton:first-of-type {\n  background-color: #4CAF50;\n  color: white;\n}\nbutton:last-of-type {\n  background-color: #f44336;\n  color: white;\n}\nbutton:hover {\n  transform: scale(1.05);\n  opacity: 0.9;\n}\n/*# sourceMappingURL=counter.component.css.map */\n";
  }
});

// src/app/counter/counter.component.ts
var CounterComponent;
var init_counter_component3 = __esm({
  "src/app/counter/counter.component.ts"() {
    "use strict";
    init_tslib_es6();
    init_counter_component();
    init_counter_component2();
    init_core();
    init_common();
    CounterComponent = class CounterComponent2 {
      count = 0;
      increment() {
        this.count++;
      }
      decrement() {
        this.count--;
      }
      reset() {
        this.count = 0;
      }
    };
    CounterComponent = __decorate([
      Component({
        standalone: true,
        imports: [CommonModule],
        template: counter_component_default,
        styles: [counter_component_default2]
      })
    ], CounterComponent);
  }
});

// src/app/counter/counter.spec.ts
var require_counter_spec = __commonJS({
  "src/app/counter/counter.spec.ts"(exports) {
    init_testing();
    init_platform_browser();
    init_counter_component3();
    describe("CounterComponent (DOM)", () => {
      let fixture;
      beforeEach(() => __async(null, null, function* () {
        yield TestBed.configureTestingModule({
          imports: [CounterComponent]
        }).compileComponents();
        fixture = TestBed.createComponent(CounterComponent);
        fixture.detectChanges();
      }));
      it('should increase count when "+" button is clicked', () => {
        const button = fixture.debugElement.query(By.css("button:first-of-type"));
        button.triggerEventHandler("click", null);
        fixture.detectChanges();
        const counterText = fixture.nativeElement.querySelector("h2").textContent;
        expect(counterText).toContain("1");
      });
      it('should decrease count when "-" button is clicked', () => {
        const decrementButton = fixture.nativeElement.querySelector("button:nth-child(2)");
        decrementButton.click();
        fixture.detectChanges();
        const h2 = fixture.nativeElement.querySelector("h2");
        expect(h2.textContent).toContain("-1");
      });
    });
  }
});
export default require_counter_spec();
//# sourceMappingURL=spec-counter.spec.js.map
