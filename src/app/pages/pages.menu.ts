export const PAGES_MENU = [
  {
    path: 'pages',
    children: [
      {
        path: 'dashboard',
        data: {
          menu: {
            title: 'Dashboard',
            icon: 'ion-android-home',
            selected: false,
            expanded: false,
            order: 0
          }
        }
      },

      {
        path: 'users',
        data: {
          menu: {
            title: 'Users',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 250,
          }
        }

      },

      {
        path: 'houses',
        data: {
          menu: {
            title: 'Houses',
            icon: 'ion-gear-a',
            selected: false,
            expanded: false,
            order: 251,
          }
        }
      },

      {
        path: 'trans',
        data: {
          menu: {
            title: 'Transactions',
            icon: 'ion-gear-a',
            order: 252
          }
        }
      },
      {
        path: 'maps',
        data: {
          menu: {
            title: 'Maps',
            icon: 'ion-gear-a',
<<<<<<< HEAD
            order: 260
=======
            order: 253
>>>>>>> 5785612b1e62b34421aa7c89e68aeab9b25219e2
          }
        }
      },

    ]
  }
];
