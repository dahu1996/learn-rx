// var { of } = require("rxjs");
// const { map } = require("rxjs/operators");

// const source$ = of(1, 2, 3).pipe(
//   map((x) => {
//     return x + "!!!";
//   })
// ); // etc

// source$.subscribe(console.log);

const { Observable } = require("rxjs/Observable");

const source$ = Observable.create(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete();
    observer.next(3);
});

source$.subscribe({
    next: console.log,
    complete: f => f
})