'use strict';
(function(){

class ParqueoComponent {
  constructor(parqueoService) {
    this.parqueoService = parqueoService;
  }

   $onInit(){
      this.parqueoService.query().$promise
      .then(response=>{
        console.log('Parqueo lista', response);
        this.parqueo=response;
      })
      .catch(err=>{console.log('error',err);
      });
  }

 selectedParqueo(){
  for(var i = 0; i<this.parqueo.length; i++){
    if(this.parqueo[i].codigoFicha == this.parqueo.codigoFicha){
      this.itemCodigo = this.parqueo[i];
    }
  }
  
  this.valorParqueo();
 }
  valorParqueo(){
  	if(this.itemCodigo.horas<=3){
  		this.itemCodigo.precio=this.itemCodigo.horas*2000
  	}
  	else if(this.itemCodigo.horas<=5){
  		this.itemCodigo.precio=((this.itemCodigo.horas-3)*1500)+6000
  	}
  	else if(this.itemCodigo.horas>5){
  		this.itemCodigo.precio=(((this.itemCodigo.horas-5)*1500)+9000)
  		this.descuento=this.itemCodigo.precio*0.05
  		this.itemCodigo.precio=this.itemCodigo.precio-this.descuento
    }
  }  
}

ParqueoComponent.$inject = ['parqueoService'];
angular.module('paraisoCiclistaApp')
  .component('parqueo', {
    templateUrl: 'app/parqueo/parqueo.html',
    controller: ParqueoComponent,
    controllerAs: 'vm'
  });

})();
