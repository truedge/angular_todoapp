import { TestBed, async } from '@angular/core/testing';
import { TodoListComponent } from './todolist.component';
describe('TodoListComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TodoListComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(TodoListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('To Do App');
  }));
  /*it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(TodoListComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to The Angular Portal!');
  }));*/
});
