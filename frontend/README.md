## This project refers to official NgRx example

> https://github.com/ngrx/platform/tree/master/projects/example-app

#### File structure:
* `core` provide global and one-time components or services.
* `features` provide all features.
  * ***Every feature may include:***
  * `containers` state manage of components.
  * `components` the pure components.
  * `services` the feature services.
  * `models` data models.
  * `actions` actions of source events.
  * `reducers` feature state and sub states.
  * `effects` features side effects.
* `shared` provide sheared components and directives.
```
├─app
│  ├─core
│  │  ├─components
│  │  │  └─layout
│  │  ├─containers
│  │  │  └─app
│  │  ├─guards
│  │  ├─models
│  │  ├─reducers
│  │  └─services
│  ├─features
│  │  ├─auth
│  │  │  ├─actions
│  │  │  ├─containers
│  │  │  │  └─login
│  │  │  ├─effects
│  │  │  ├─guards
│  │  │  ├─reducers
│  │  │  └─services
│  │  ├─schedule
│  │  │  ├─actions
│  │  │  ├─components
│  │  │  ├─containers
│  │  │  │  └─schedule-list-page
│  │  │  ├─models
│  │  │  ├─reducers
│  │  │  └─services
│  │  └─transaction
│  │      ├─actions
│  │      ├─components
│  │      │  ├─txn-create
│  │      │  └─txn-list-table
│  │      ├─containers
│  │      │  ├─txn-create-page
│  │      │  └─txn-list-page
│  │      ├─effects
│  │      ├─models
│  │      ├─reducers
│  │      └─services
│  └─shared
├─assets
└─environments
```

