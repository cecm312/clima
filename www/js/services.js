angular.module('starter.services', [])

.factory('Chats', function($http) {
  // Might use a resource here that returns a JSON array
  // Some fake testing data¡
  /*function getConfig(){
    $http.get("js/config.json").then(function(resp) {
    console.log(resp);
    units=resp.data.units;
    cnt=resp.data.cnt;
    }, function(err) {
      console.error('ERR', err);
      // err.status will contain the status code
    });
  }*/
  servicio= {
    chats:[],
    all: function() {
      return chats;
    },
    getAllData:function(){
      $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?cnt='+servicio.config.cnt+'&id=3822762&APPID=143ffc47ae963adf95c8e2a4ccf660e3&units='+servicio.config.units+'&lang=es').then(function(resp) {
            for(var a=0;a<resp.data.cnt;a++){
              servicio.chats=resp.data.list;
            }
        }, function(err) {
          console.error('ERR', err);
          // err.status will contain the status code
        });
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    config:{cnt:5,units:"metric"},
    get: function(chatId) {
      for (var i = 0; i < servicio.chats.length; i++) {
        if (servicio.chats[i].dt === parseInt(chatId)) {

          return servicio.chats[i];
        }
      }
      return null;
    }
  };
  servicio.getAllData();
  return servicio
});
