/*----------------------------------------------ACTIVAR PESTAÑAS DEL MENU--------------------------------------------------------------*/
$(document).ready(function(){
    $('ul.tabs li a:first').addClass('active');
    $('.secciones article').hide();
    $('.secciones article:first').show();

    $('ul.tabs li a').click(function(){
        $('ul.tabs li a').removeClass('active');
        $(this).addClass('active');
        $('.secciones article').hide();

        var activeTab = $(this).attr('href');
        //console.log(activeTab);
        $(activeTab).show();
        return false;
    });
});


/*----------------------------------------------MODAL--------------------------------------------------------------*/
$(document).ready(function(){
    let modal = document.querySelectorAll('.modal-background');
    let abrir = document.querySelectorAll('.abrir');
    let cerrar = document.querySelectorAll('.cerrar, .aceptar'); //regresa un arreglo de elementos

    //elemento = document.getElementById('0');
    //alert(elemento);

    abrir.forEach(element => {
        element.addEventListener('click',function(){
            //alert(element);
            for (var i = 0; i < abrir.length; i++) {
                var item = abrir[i];
                if(item == element){
                    var aux = i;
                }
            }
            modal.forEach(element => {
                modal[aux].classList.add('show');
            });
        });
    });

    cerrar.forEach(element => {
        element.addEventListener('click',function(){
            modal.forEach(element => {
                element.classList.remove('show');                
            });

        });
    });
});