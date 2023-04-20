$(document).ready(function(){
    var idValidate = false;
    $('#id').keyup(function(event){
        if ($('#id').val().length == 0) {
            $('#id_msg').removeClass('id_success');
            $('#id_msg').removeClass('id_fail');
            $('#id_msg').addClass('id_init');
            idValidate = false;
        } else if ($('#id').val().length < 4) {
            $('#id_msg').text('아이디는 4자 이상입니다.');
            $('#id_msg').removeClass('id_init');
            $('#id_msg').removeClass('id_success');
            $('#id_msg').addClass('id_fail');
            idValidate = false;
        } else {
            $('#id_msg').text('정상적인 아이디입니다.');
            $('#id_msg').removeClass('id_init');
            $('#id_msg').removeClass('id_fail');
            $('#id_msg').addClass('id_success');
            idValidate = true;
        }
    });
    $('#login_form').submit(function(event){
        if(idValidate == false){
            alert('아이디를 확인하세요.');
            event.preventDefault();
            return false;
        }
        if ($('#pw').val() == '') {
            alert('비밀번호를 입력하세요.');
            event.preventDefault();
            return false;
        }
    });
});