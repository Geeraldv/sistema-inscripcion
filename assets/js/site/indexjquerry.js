$(document).ready(function(){
    

let nameValue = $('#name').val()
let provinciaValue = $('#provincia').val()
let ciudadValue = $('#ciudad').val()
let sectorValue = $('#sector').val()
let calleValue = $('#calle').val()
let contactValue = $('#contact-type').val()





//eventos

$('#card-container').on('click','#validar', function(){
    createSelection()

})

$('#card-container').on('click','#clear', function(){
    clear()

})

$('#card-container').on('click','#Volver',function() {
  crearPaginaPrincipal()
})

$('#card-container').on('click','#seleccionar',function(){
  confirmacionPage()
})


$('#card-container').on('click','#listo',function(){
  crearPaginaPrincipal();
  clear();
})





$('#card-container').on('click','#volvelCarrera',function() {

  if(contactValue == 'redes'){
    crearSelecionRedes()
  }if(contactValue == 'software'){
    crearSelecionSoftware()
  }if(contactValue == 'multimedia'){
    crearSelecionMulti()
  }

  
})







//funciones

function createSelection(){

    if(validate()){
      toastr.success('Datos completados correctamente','Todo correcto',{timeOut:1500})
        if(contactValue == 'software'){
          crearSelecionSoftware()
        }if(contactValue == 'redes') {
          crearSelecionRedes()
        }if(contactValue == 'multimedia') {
          crearSelecionMulti()
        }
    }else{
        toastr.error('Debe completar Toda la info','Opss ha ocurrido un error imprevisto',{timeOut:1500})
    }
}




function crearSelecionMulti() {

  const cardMulti = `<div class="card mt-5 mb-5rounded-4">
  <div class="card-header bg-info text-light">
      <h4 class="">Seleccion de materia Multimedia</h4>
  </div>
  <div class="card-body">




    <div class="accordion" id="accordionPanelsStayOpenExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Introduccióna la Multimedia
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
                <input class="form-check-input" name="horario" type="radio" >
                <label for="horario" class="form-text mx-1">Lu 18:00-22:00</label>
                <input class="form-check-input" name="horario" type="radio">
                <label for="horario" class="form-text mx-1">Ma 14:00-18:00</label>
                <input class="form-check-input" name="horario" type="radio">
                <label for="horario" class="form-text mx-1">Sa 16:00-20:00</label>
          </div>
        </div>
      </div>


      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Fotografía
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-1" type="radio" >
                <label for="horario-sis-1" class="form-text mx-1">Lu 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-1" type="radio">
                <label for="horario-sis-1" class="form-text mx-1">Ju 18:00-20:00</label>
                <input class="form-check-input" name="horario-sis-1" type="radio">
                <label for="horario-sis-1" class="form-text mx-1">Ma 15:00-19:00</label>

          </div>
        </div>
      </div>



      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Marketing
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-2" type="radio" >
                <label for="horario-sis-2" class="form-text mx-1">Lu 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-2" type="radio">
                <label for="horario-sis-2" class="form-text mx-1">Ju 18:00-20:00</label>
                <input class="form-check-input" name="horario-sis-2" type="radio">
                <label for="horario-sis-2" class="form-text mx-1">Ma 15:00-19:00</label>

          </div>
        </div>
      </div>


      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            Gráficos Vectoriales
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-3" type="radio" >
                <label for="horario-sis-3" class="form-text mx-1">Ma 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-3" type="radio">
                <label for="horario-sis-3" class="form-text mx-1">Ju 20:00-22:00</label>
                <input class="form-check-input" name="horario-sis-3" type="radio">
                <label for="horario-sis-3" class="form-text mx-1">Mi 18:00-19:00</label>

          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
            HTML y Creación de Web Sites
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-ele" type="radio" >
                <label for="horario-ele" class="form-text mx-1">Ju 16:00-20:00</label>
                <input class="form-check-input" name="horario-ele" type="radio">
                <label for="horario-ele" class="form-text mx-1">Mi 20:00-22:00</label>
                <input class="form-check-input" name="horario-ele" type="radio">
                <label for="horario-ele" class="form-text mx-1">Sa 18:00-19:00</label>

          </div>
        </div>
      </div>





    </div>

    <button id="seleccionar" class="btn float-end mt-4 btn-primary" href="">Listo</button>
    <button id="Volver" class="btn float-end mt-4 btn-warning mx-2" href="">Volver</button>
  </div>



</div>`

$('#card-container').html(cardMulti)
  
}





function crearSelecionRedes() {
  
  const redesCard = `
  <div class="card mt-5 mb-5rounded-4">
  <div class="card-header bg-success text-light">
      <h4 class="">Seleccion de materia Redes</h4>
  </div>
  <div class="card-body">




    <div class="accordion" id="accordionPanelsStayOpenExample">

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingOne">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
            Redes Inalámbricas
          </button>
        </h2>
        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
          <div class="accordion-body">
                <input class="form-check-input" name="horario" type="radio" >
                <label for="horario" class="form-text mx-1">Lu 18:00-22:00</label>
                <input class="form-check-input" name="horario" type="radio">
                <label for="horario" class="form-text mx-1">Ma 14:00-18:00</label>
                <input class="form-check-input" name="horario" type="radio">
                <label for="horario" class="form-text mx-1">Sa 16:00-20:00</label>
          </div>
        </div>
      </div>


      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
            Sistemas Operativos
          </button>
        </h2>
        <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-1" type="radio" >
                <label for="horario-sis-1" class="form-text mx-1">Lu 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-1" type="radio">
                <label for="horario-sis-1" class="form-text mx-1">Ju 18:00-20:00</label>
                <input class="form-check-input" name="horario-sis-1" type="radio">
                <label for="horario-sis-1" class="form-text mx-1">Ma 15:00-19:00</label>

          </div>
        </div>
      </div>



      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingThree">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
            Sistema Operativo II
          </button>
        </h2>
        <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-2" type="radio" >
                <label for="horario-sis-2" class="form-text mx-1">Lu 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-2" type="radio">
                <label for="horario-sis-2" class="form-text mx-1">Ju 18:00-20:00</label>
                <input class="form-check-input" name="horario-sis-2" type="radio">
                <label for="horario-sis-2" class="form-text mx-1">Ma 15:00-19:00</label>

          </div>
        </div>
      </div>


      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFour">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
            Sistema Operativo III
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-sis-3" type="radio" >
                <label for="horario-sis-3" class="form-text mx-1">Ma 16:00-20:00</label>
                <input class="form-check-input" name="horario-sis-3" type="radio">
                <label for="horario-sis-3" class="form-text mx-1">Ju 20:00-22:00</label>
                <input class="form-check-input" name="horario-sis-3" type="radio">
                <label for="horario-sis-3" class="form-text mx-1">Mi 18:00-19:00</label>

          </div>
        </div>
      </div>

      <div class="accordion-item">
        <h2 class="accordion-header" id="panelsStayOpen-headingFive">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
            Fundamentos de Electrónica
          </button>
        </h2>
        <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
          <div class="accordion-body">
            
                <input class="form-check-input" name="horario-ele" type="radio" >
                <label for="horario-ele" class="form-text mx-1">Ju 16:00-20:00</label>
                <input class="form-check-input" name="horario-ele" type="radio">
                <label for="horario-ele" class="form-text mx-1">Mi 20:00-22:00</label>
                <input class="form-check-input" name="horario-ele" type="radio">
                <label for="horario-ele" class="form-text mx-1">Sa 18:00-19:00</label>

          </div>
        </div>
      </div>





    </div>

    <button id="seleccionar" class="btn float-end mt-4 btn-primary" href="">Listo</button>
    <button id="Volver" class="btn float-end mt-4 btn-warning mx-2" href="">Volver</button>
  </div>



</div>`;

$('#card-container').html(redesCard)

}







function crearSelecionSoftware(){
    const softwareCard = `
    <div class="card mt-5 mb-5rounded-4">
    <div class="card-header bg-primary text-light">
        <h4 class="">Seleccion de materia Software</h4>
    </div>
    <div class="card-body">




      <div class="accordion" id="accordionPanelsStayOpenExample">

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
              Programacion-1
            </button>
          </h2>
          <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
            <div class="accordion-body">
                  <input class="form-check-input" name="horario" type="radio" >
                  <label for="horario" class="form-text mx-1">Lu 18:00-22:00</label>
                  <input class="form-check-input" name="horario" type="radio">
                  <label for="horario" class="form-text mx-1">Ma 14:00-18:00</label>
                  <input class="form-check-input" name="horario" type="radio">
                  <label for="horario" class="form-text mx-1">Sa 16:00-20:00</label>
            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
              Programacion-2
            </button>
          </h2>
          <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
            <div class="accordion-body">
              
                  <input class="form-check-input" name="horario-2" type="radio" >
                  <label for="horario-2" class="form-text mx-1">Lu 16:00-20:00</label>
                  <input class="form-check-input" name="horario-2" type="radio">
                  <label for="horario-2" class="form-text mx-1">Ju 18:00-20:00</label>
                  <input class="form-check-input" name="horario-2" type="radio">
                  <label for="horario-2" class="form-text mx-1">Ma 15:00-19:00</label>

            </div>
          </div>
        </div>



        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
              Programacion-3
            </button>
          </h2>
          <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
            <div class="accordion-body">
              
                  <input class="form-check-input" name="horario-3" type="radio" >
                  <label for="horario-3" class="form-text mx-1">Lu 16:00-20:00</label>
                  <input class="form-check-input" name="horario-3" type="radio">
                  <label for="horario-3" class="form-text mx-1">Ju 18:00-20:00</label>
                  <input class="form-check-input" name="horario-3" type="radio">
                  <label for="horario-3" class="form-text mx-1">Ma 15:00-19:00</label>

            </div>
          </div>
        </div>


        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFour">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="false" aria-controls="panelsStayOpen-collapseFour">
              Programacion Web
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFour" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFour">
            <div class="accordion-body">
              
                  <input class="form-check-input" name="horario-web" type="radio" >
                  <label for="horario-web" class="form-text mx-1">Ma 16:00-20:00</label>
                  <input class="form-check-input" name="horario-web" type="radio">
                  <label for="horario-web" class="form-text mx-1">Ju 20:00-22:00</label>
                  <input class="form-check-input" name="horario-web" type="radio">
                  <label for="horario-web" class="form-text mx-1">Mi 18:00-19:00</label>

            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header" id="panelsStayOpen-headingFive">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="false" aria-controls="panelsStayOpen-collapseFive">
              Programacion Mobile
            </button>
          </h2>
          <div id="panelsStayOpen-collapseFive" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingFive">
            <div class="accordion-body">
              
                  <input class="form-check-input" name="horario-mob" type="radio" >
                  <label for="horario-mob" class="form-text mx-1">Ju 16:00-20:00</label>
                  <input class="form-check-input" name="horario-mob" type="radio">
                  <label for="horario-mob" class="form-text mx-1">Mi 20:00-22:00</label>
                  <input class="form-check-input" name="horario-mob" type="radio">
                  <label for="horario-mob" class="form-text mx-1">Sa 18:00-19:00</label>

            </div>
          </div>
        </div>





      </div>

      <button id="seleccionar" class="btn float-end mt-4 btn-primary" href="">Listo</button>
      <button id="Volver" class="btn float-end mt-4 btn-warning mx-2" href="">Volver</button>
    </div>



</div>
    `

    $('#card-container').html(softwareCard)


}



function crearPaginaPrincipal() {

  const paginaPrincipal = `
  <div class="card mt-5 mb-5rounded-4">
                    <div class="card-header bg-black text-light">
                        <h4 class="text-center">Registre sus datos</h4>
                    </div>
                    <div class="card-body">
                        <div class="card-title">
                            <h4 class="text-center">Complete toda la informacion</h4>
                        </div>


                        <div class="mb-3">
                            <label for="name" class="form-label">Nombre:</label>
                            <input type="text" class='form-control'  id="name">
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label">Provincia:</label>
                            <input type="text" class='form-control'  id="provincia">
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label">Ciudad:</label>
                            <input type="text" class='form-control'  id="ciudad">
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label">Sector:</label>
                            <input type="text" class='form-control'  id="sector">
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label">Calle:</label>
                            <input type="text" class='form-control'  id="calle">
                        </div>

                        <div class="mb-3">
                            <label for="name" class="form-label">Carrera:</label>
                            <select class="form-select" id="contact-type" aria-label="Default select example">
                                <option value='' selected>Selecciona una carrera</option>
                                <option value="software">Software</option>
                                <option value="redes">Redes</option>
                                <option value="multimedia">Multimedia</option>
                              </select>
                        </div>

                    


                        <button id="validar" class="btn float-end mt-4 btn-outline-primary" href="">Registrar</button>

                        <button id="clear" class="btn float-end mt-4 btn-warning mx-2" href="">Limpiar</button>
                    </div>
                </div>
            </div>
  `
  
  $('#card-container').html(paginaPrincipal)

  $('#name').val(nameValue)
  $('#provincia').val(provinciaValue)
  $('#ciudad').val(ciudadValue)
  $('#sector').val(sectorValue)
  $('#calle').val(calleValue)
  $('#contact-type').val(contactValue)
}

function confirmacionPage() {

  const confirPage = `<div class="card mt-5 mb-5rounded-4">
  <div class="card-header bg-success text-light">
    <h4 class="text-center">Confirmacion de datos</h4>
  </div>
  <div class="card-body">
    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Nombre:${nameValue}</h6>
    </div>

    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Provincia:${provinciaValue}</h6>
    </div>
    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Ciudad:${ciudadValue}</h6>
    </div>
    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Sector:${sectorValue}</h6>
    </div>
    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Calle:${calleValue}</h6>
    </div>
    <div class="card-title p-3 bg-info bg-opacity-10 border border-info border-start-0 rounded-end">
      <h6 class="mt-3">Carrera:${contactValue}</h6>
    </div>

    <button
      id="listo"
      class="btn float-end mt-4 btn-primary"
      href=""
    >
      Finalizar
    </button>

    <button
      id="volvelCarrera"
      class="btn float-end mt-4 btn-warning mx-2"
      href=""
    >
      Volver
    </button>
  </div>
</div>` 
  
$('#card-container').html(confirPage)



}





function clear() {

    $('#name').val('').removeClass('input-err').removeClass('input-sucess').focus()
    $('#provincia').val('').removeClass('input-err').removeClass('input-sucess')
    $('#ciudad').val('').removeClass('input-err').removeClass('input-sucess')
    $('#sector').val('').removeClass('input-err').removeClass('input-sucess')
    $('#calle').val('').removeClass('input-err').removeClass('input-sucess')
    $('#contact-type').val('').removeClass('input-err').removeClass('input-sucess')

    
}


function validate(){

    nameValue = $('#name').val()
    provinciaValue = $('#provincia').val()
    ciudadValue = $('#ciudad').val()
    sectorValue = $('#sector').val()
    calleValue = $('#calle').val()
    contactValue = $('#contact-type').val()

    let isvalid = true;

    if(nameValue == '' || nameValue == undefined || nameValue == null){
        isvalid = false;
        $('#name').addClass('input-err')
        $('#name').removeClass('input-sucess')
    }else{
        $('#name').addClass('input-sucess')
        $('#name').removeClass('input-err')

    }if(provinciaValue == '' || provinciaValue == undefined || provinciaValue == null){
        isvalid = false;
        $('#provincia').addClass('input-err')
        $('#provincia').removeClass('input-sucess')
        
    }else{
        $('#provincia').addClass('input-sucess')
        $('#provincia').removeClass('input-err')

    }if(ciudadValue == '' || ciudadValue == undefined || ciudadValue == null){
        isvalid = false;
        $('#ciudad').addClass('input-err')
        $('#ciudad').removeClass('input-sucess')
    }else{
        $('#ciudad').addClass('input-sucess')
        $('#ciudad').removeClass('input-err')
    }if(sectorValue == '' || sectorValue == undefined || sectorValue == null){
        isvalid = false;
        $('#sector').addClass('input-err')
        $('#sector').removeClass('input-sucess')
    }else{
        $('#sector').addClass('input-sucess')
        $('#sector').removeClass('input-err')

    }if(calleValue == '' || calleValue == undefined || calleValue == null){
        isvalid = false;
        $('#calle').addClass('input-err')
        $('#calle').removeClass('input-sucess')
    }else{
        $('#calle').addClass('input-sucess')
        $('#calle').removeClass('input-err')

    }if(contactValue == '' || contactValue == undefined || contactValue == null){
        isvalid = false;
        $('#contact-type').addClass('input-err')
        $('#contact-type').removeClass('input-sucess')
    }else{
        $('#contact-type').addClass('input-sucess')
        $('#contact-type').removeClass('input-err')
    }

    return isvalid
}





})