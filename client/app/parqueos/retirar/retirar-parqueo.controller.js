'use strict';

(function() {

class RetirarParqueoController {

  constructor(parqueosService) {
    this.parqueosService = parqueosService;
    this.valor = undefined;
    this.parqueo;
  }

  $onInit() {

  }

  buscar(){
    this.parqueosService.buscar({codigo: this.codigo}).$promise
    .then(response =>{
      this.parqueo = response;
      this.cobrar();
    })
  }
  /*cobrar(){
  if(this.parqueo.horas <= 3){
    this.valor = this.parqueo.horas * 2;
  }
  else if (this.parqueo.horas<=5) {
    this.parqueo.valor=((this.parqueo.horas-3)*1.5)+6
  }
  else if (this.parqueo.horas>5) {
    this.parqueo.valor= ((this.parqueo.horas-5)*1.5)+9
    this.descuento=this.parqueo.valor*0.5
    this.parqueo.valor=this.parqueo.valor-this.descuento
  }
*/
  cobrar(){
    if(this.parqueo.horas <= 3){
      this.valor = this.parqueo.horas * 2;
    }else{
      this.valor = 3 * 2;
      this.valor += (this.parqueo.horas - 3) * 1.5;
      if(this.parqueo.horas > 5){
        this.valor -= this.valor * 0.05;
      }
    }

     this.parqueosService.save(parqueo).$promise
      .then(response =>{
          this.parqueosService.query().$promise
          .then(response =>{
          this.parqueos = response;
          console.log(this.parqueos);
        })
      })

  }

}

angular.module('paraisoCiclistaApp')
  .component('retirarParqueo', {
    templateUrl: 'app/parqueos/retirar/retirar.html',
    controller: RetirarParqueoController,
    controllerAs: 'vm'
  });

})();
