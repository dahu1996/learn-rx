/**
 * @File    : dataflow.js
 * @Desc    : rxjs 数据流
 * @Date    : 2021/03/08 08:51:12
 * @Author  : lishuhang
 * @Version : 1.0
 */

// import { Observable } from 'rxjs/Observable';
const { Observable } = require('rxjs/Observable');

// RxJs一切都已数据流为中心

// 与数据流相关操作符（绝大部分为静态操作符） -- 任何一个操作符都会返回Observable对象，创建类操作符不依赖于其他Observable对象

// 同步数据流
// create函数，于直接 new Observable(subscribe) 效果一致

// of  列举数据
require('rxjs/add/observable/of');
const source1$ = Observable.of(1, 2, 3);
source1$.subscribe(console.log);
