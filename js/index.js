$(document).ready(function() {
    var navwrap=$('.nav-wrap');
    //��õ�����������ҳԭ���ƫ����
    var navPos=navwrap.offset().top;
    //��õ�������ʵ�ʸ߶�
    var navHeight=navwrap.outerHeight();

    //���topcontrol�ص�����
    $('#topcontrol').click(function(event) {
        $('html,body').animate({scrollTop:0},1000);
    });

    //��������
    $(window).scroll(function() {

    //��ȡ��ǰ������λ��
        var sTop=$(window).scrollTop();

    //    �ж��������������100px������ʾ�ص�������ť
        if(sTop >=100) {
            $('#topcontrol').fadeIn('slow');
        }else {
            $('#topcontrol').fadeOut('slow');
        }

        //������������������λ�ã�������fixed
        if(sTop>=navPos) {
            if(!navwrap.hasClass('fixed')) {
                navwrap.addClass('fixed');
                $('.banner').css('margin-bottom',navHeight);//��margin��������հ���ռλ
            }
        }else {
            if(navwrap.hasClass('fixed')) {
                navwrap.removeClass('fixed');
                $('.banner').css('margin-bottom',0);//ȥ��marginռλ
            }
        }
        //����������
        var intro= {
            offsetTop:$('#post-intro').offset().top,
            height:$('#post-intro').outerHeight()
        }
        var usage= {
            offsetTop:$('#post-usage').offset().top,
            height:$('#post-usage').outerHeight()
        }
        var choiceness= {
            offsetTop:$('#choiceness').offset().top,
            height:$('#choiceness').outerHeight()
        }
        if(sTop>=intro.offsetTop-navHeight && sTop<intro.height+intro.offsetTop-navHeight) {
            if(!$('.intro').hasClass('active'))
            $('.intro').addClass('active');
        }else {
            $('.intro').removeClass('active');
        }

        if(sTop>=usage.offsetTop-navHeight && sTop<usage.height+usage.offsetTop-navHeight) {
            if(!$('.usage').hasClass('active'))
                $('.usage').addClass('active');
        }else {
            $('.usage').removeClass('active');
        }

        if(sTop>=choiceness.offsetTop-navHeight && sTop<choiceness.height+choiceness.offsetTop-navHeight) {
            if(!$('.choice').hasClass('active'))
                $('.choice').addClass('active');
        }else {
            $('.choice').removeClass('active');
        }
    });
    /*������ӹ���*/
    $('.nav-wrap a').click(function() {

        var offsetTop=$(this.hash).offset().top-navHeight;//��ö�Ӧ����ƫ����
        //    ���topcontrol�ص�����
        $('html,body').animate({scrollTop:offsetTop},1000);

        return false;
    });
});
