// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCbwSVU5UrsRaoXr1xT_hH7U6tgjxG7KU0',
    authDomain: 'fptest-cf53d.firebaseapp.com',
    databaseURL: 'https://fptest-cf53d.firebaseio.com',
    projectId: 'fptest-cf53d',
    storageBucket: 'fptest-cf53d.appspot.com',
    messagingSenderId: '202743205688'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
