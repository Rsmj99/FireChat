import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

// 1. Import the libs you need
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

//Servicios
import { ChatService } from './providers/chat.service';

//Componentes
import { ChatComponent } from './components/chat/chat.component';
import { LoginComponent } from './components/login/login.component';

// 2. Add your credentials from step 1
const firebaseConfig = {
  apiKey: "AIzaSyAO3ush-n7hL29fhoQ39zyvXS48Ugc4AdM",
  authDomain: "firechat-b41ab.firebaseapp.com",
  databaseURL: "https://firechat-b41ab.firebaseio.com",
  projectId: "firechat-b41ab",
  storageBucket: "firechat-b41ab.appspot.com",
  messagingSenderId: "221609706817",
  appId: "1:221609706817:web:4575eece3e4baeed4e8dc0",
  measurementId: "G-G76VCEM36Y"
};

/* <!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.14.6/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAO3ush-n7hL29fhoQ39zyvXS48Ugc4AdM",
    authDomain: "firechat-b41ab.firebaseapp.com",
    databaseURL: "https://firechat-b41ab.firebaseio.com",
    projectId: "firechat-b41ab",
    storageBucket: "firechat-b41ab.appspot.com",
    messagingSenderId: "221609706817",
    appId: "1:221609706817:web:4575eece3e4baeed4e8dc0",
    measurementId: "G-G76VCEM36Y"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script> */

@NgModule({
  declarations: [
    AppComponent,
    ChatComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // 3. Initialize
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, // firestore
    AngularFireAuthModule, // auth
    AngularFireStorageModule, // storage
    FormsModule
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
