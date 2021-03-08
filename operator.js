const { bindCallback } = require("rxjs");
const { Observable } = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/filter");
require("rxjs/add/operator/let");

// const source$ = new Observable((observer) => {
//     let timer = null;
//     timer = setInterval(() => {
//         observer.next(parseInt(Math.random()*100));
//     }, 1000);
//     return () => {
//         clearInterval(timer);
//         timer = null;
//     }
// });

// const subscribtion = source$
//                         .filter(v => v >= 50)
//                         .map(v => v * 2)
//                         .subscribe(console.log);
// setTimeout(() => {
//     subscribtion.unsubscribe();
// }, 1000 * 60);

// 自定义操作符
/**
 * 
 * 打补丁
 * this bind, let/pipe operator
 * 使用this绑定会影响函数式编程（一个函数返回的结果仅与它的输入有关）
 */

function myMap(callback) {
  return (opt$) => {
    return new Observable((observer) => {
      return opt$.subscribe(
        value => {
          try {
            observer.next(callback(value));
          } catch (e) {
            observer.error(e);
          }
        },
        err => observer.error(err),
        complete => observer.complete()
      );
    });
  };
}

const source$ = new Observable(observer => {
  observer.next(1);
  observer.next(2);
  observer.next(3);
});
const subscribtion = source$.let(
  myMap((x) => {
    throw new Error('1111');
  })
).subscribe(console.log, f => f, f => f);
