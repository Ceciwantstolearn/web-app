// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://localhost:5001/humanitarian-making-test-abb29/us-central1/api/v1/',
  mapbox: {
    accessToken: 'pk.eyJ1IjoiYWRtaW4taHVtYW5pdGFyaWFuLW1ha2luZyIsImEiOiJjazkxY3p2dDcwMnU4M2dwYXV6NG5xY3FvIn0.oRelXCGLzlFFlwOfASPqIw'
  },
  firebase: {
    apiKey: 'AIzaSyD7NveTz9RqC-vXrhIZpN8Ku5lPDMkTMQM',
    authDomain: 'humanitarian-making-test-abb29.firebaseapp.com',
    databaseURL: 'https://humanitarian-making-test-abb29.firebaseio.com',
    projectId: 'humanitarian-making-test-abb29',
    storageBucket: 'humanitarian-making-test-abb29.appspot.com',
    messagingSenderId: '1076225681578',
    appId: '1:1076225681578:web:311cd10d7159841e1808d3',
    measurementId: 'G-1CMZ23HD7F'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
