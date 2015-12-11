angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
      
        
    .state('ፎቶያንሱ', {
      url: '/page13',
      templateUrl: 'templates/ፎቶያንሱ.html',
      controller: 'ፎቶያንሱCtrl'
    })
        
      
    
      
        
    .state('ፎቶ-ያረጋግጡ', {
      url: '/photoConfirmation',
      templateUrl: 'templates/ፎቶ-ያረጋግጡ.html',
      controller: 'ፎቶ-ያረጋግጡCtrl'
    })
        
      
    
      
        
    .state('ማርጋገጫ', {
      url: '/confirmation',
      templateUrl: 'templates/ማርጋገጫ.html',
      controller: 'ማርጋገጫCtrl'
    })
        
      
    
      
    .state('mainController', {
      url: '/main',
      abstract:true,
      templateUrl: 'templates/mainController.html'
    })
      
    
      
        
    .state('mainController.ምርጫዎቼ', {
      url: '/favourites',
      views: {
        'tab3': {
          templateUrl: 'templates/ምርጫዎቼ.html',
          controller: 'ምርጫዎቼCtrl'
        }
      }
    })
        
      
    
      
        
    .state('mainController.አዲስ', {
      url: '/addItem',
      views: {
        'tab1': {
          templateUrl: 'templates/አዲስ.html',
          controller: 'አዲስCtrl'
        }
      }
    })
        
      
    
      
        
    .state('mainController.ፍለጋ', {
      url: '/search',
      views: {
        'tab5': {
          templateUrl: 'templates/ፍለጋ.html',
          controller: 'ፍለጋCtrl'
        }
      }
    })
        
      
    
      
        
    .state('mainController.ፈርጅ', {
      url: '/categories',
      views: {
        'tab2': {
          templateUrl: 'templates/ፈርጅ.html',
          controller: 'ፈርጅCtrl'
        }
      }
    })
        
      
    
      
        
    .state('ዝርዝር', {
      url: '/itemDetail',
      templateUrl: 'templates/ዝርዝር.html',
      controller: 'ዝርዝርCtrl'
    })
        
      
    
      
        
    .state('mainController.መልእክት', {
      url: '/messages',
      views: {
        'tab6': {
          templateUrl: 'templates/መልእክት.html',
          controller: 'መልእክትCtrl'
        }
      }
    })
        
      
    ;

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/main/favourites');

});