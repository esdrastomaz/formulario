function validarFormulario(){
    var validar = true;
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senha").value;
    var email = document.getElementById("email").value;
    var datanasc = document.getElementById("datanasc").value;
    var idade1 = document.getElementById("idade1").checked;
    var idade2 = document.getElementById("idade2").checked;
    var idade3 = document.getElementById("idade3").checked;
    var concordo = document.getElementById("concordo").checked;
    var enviar = document.getElementById("enviar");

    alert(enviar) = ("Cadastro Efetuado com Sucesso");

    if(nome.length == 0){
        alert('Campo nome em branco. Verifique!');
        validar = false;
    }

    if(nome.length > 10 && validar){
        alert('Campo nome maior que 10 caracteres. Verifique!');
        validar = false;
    }

    if(senha.length < 6 && validar){
        alert('A senha deve conter 10 caracteres. Verifique!');
        validar = false;
    }

    if(datanasc.length == 0 && validar){
        alert('Campo data de nascimento vazia. Verifique!')
        validar = false;
    }

    if(email.length == 0 && validar){
        alert('Campo e-mail em branco. Verifique!')
        validar = false;
    }

    if(
        (!idade1 && idade2 && idade3) && validar
    ){
        alert('Selecione uma opção de Idade');
        validar = false;
    }

    if(!concordo && validar){
        alert('Você não aceita os termos');
        validar = false;
    }

    if(validar){
        alert('Todos os campos Validados!!');
        
    }

    return validar;
}

(
    function(){
        'use strict';
        window.addEventListener('load', function(){
            var forms = document.getElementsByClassName('needs-validation');
            var validation = Array.prototype.filter.call(forms, function(form){
                form.addEventListener('submit', function(event){
                    if(form.checkValidity() === false){
                        event.preventDefault();
                        event.stopPropagation();
                    }
                    form.classList.add('was-validated');                    
                    
                },false);
            });
        }, false);
    }
)();
