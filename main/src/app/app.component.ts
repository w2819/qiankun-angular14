import {Component, NgZone, OnInit} from '@angular/core';
import {registerMicroApps, runAfterFirstMounted, start} from 'qiankun';

function activeRoute(prefix: string) {
  return (location: Location) => {
    console.log(location);
    return location.pathname.startsWith(prefix);
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  constructor(
    private ngZone: NgZone,
  ) {
    (window as any).ngZone = this.ngZone;
  }

  title = 'main';

  ngOnInit(): void {
    this.initQiankun();
  }

  initQiankun() {
    registerMicroApps([{
        name: 'sub1',
        entry: '//localhost:4201',
        container: '#subApp',
        activeRule: activeRoute('/sub1'),
      }],
      {
        beforeLoad: [
          app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        beforeMount: [
          app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
        afterUnmount: [
          app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
            return Promise.resolve();
          },
        ],
      });

    start();

    runAfterFirstMounted(() => {
      console.log('[MainApp] first app mounted');
    });
  }
}
