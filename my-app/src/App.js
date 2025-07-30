import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import { CleverTap } from '@awesome-cordova-plugins/clevertap';
import clevertap from 'clevertap-web-sdk';

function App() {

  useEffect(() => {
    const onDeviceReady = () => {
      if (CleverTap) {
        CleverTap.notifyDeviceReady();
        CleverTap.registerPush();
        CleverTap.createNotificationChannel("CtCS", "Clever Tap Cordova Testing", "CT Cordova Testing", 1, true);
        CleverTap.setDebugLevel(3);
        console.log('CleverTap initialized');
      } else {
        console.warn('CleverTap plugin not available');
      }
    };

      document.addEventListener('onCleverTapPushNotificationClicked', (data) => {
        console.log('Notification clicked:', data.notification);
        // Example: Navigate to offers page
        // history.push('/offers');
      });

      // Notification with extras clicked
      document.addEventListener('onCleverTapPushNotificationClickedWithCustomExtras', (data) => {
        console.log('Notification with extras:', data.extras);
        if (data.extras && data.extras.product_id) {
          // history.push(`/product/${data.extras.product_id}`);
        }
      });

    return () => {
      document.removeEventListener('deviceready', onDeviceReady);
      document.removeEventListener('onCleverTapPushNotificationClicked');
      document.removeEventListener('onCleverTapPushNotificationClickedWithCustomExtras');
    };
  }, []);

  const handleClick = () => {
    var props = {
        'Name': 'Jack Montana',                    // String
        'Identity': '610233334446032',                    // String or number
        'Email': 'jack@gmail.com'
    }
    document.addEventListener('deviceready', () => {
    CleverTap.onUserLogin(props);
    });
    CleverTap.setcl
    console.log('pressed');
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
      <button onClick={handleClick}>Login</button>
    </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
