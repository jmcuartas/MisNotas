(function(){
    'use strict';

    angular
        .module('app.notes')
        .factory('notesService', notesService);

        function notesService($localStorage){

            initNotas();

            var service = {
                list: list,
                get: get,
                create: create,
                update: update,
                remove: remove
            };

            return service;

            function initNotas() {
                if (angular.isUndefined($localStorage.notas)) {
                    $localStorage.notas = [];
                }
            }

            function list(){
                return $localStorage.notas;
            }

            function get(id){
                return $localStorage.notas.filter(function(nota){
                    return nota.id === id;
                })[0];
            }

            function create(nota){
                $localStorage.notas.push(nota);
            }

            function update(nota){
                $localStorage.notas = $localStorage.notas.map(function(notaToUpdate) {
                    if (nota.id === notaToUpdate.id) {
                        return nota;
                    }
                    return notaToUpdate;
                });            
            }

            function remove(id){
                $localStorage.notas = $localStorage.notas.filter(function(nota) {
                    return nota.id !== id;
                });
                return $localStorage.notas;
            }
        }
})();
