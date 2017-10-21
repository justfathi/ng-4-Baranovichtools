// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCqHbHTHFsvbnPaOKmLUXUVbFMVry5egh4',
    authDomain: 'tlbaranovichy.firebaseapp.com',
    databaseURL: 'https://tlbaranovichy.firebaseio.com',
    projectId: 'tlbaranovichy',
    storageBucket: 'tlbaranovichy.appspot.com',
    messagingSenderId: '50769553167'
  }
};
