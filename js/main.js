// 

$(function () {



    $('.contact .terms_box .terms_text > p:first-child').click(function () {
        $('.contact .terms_box .terms_text .text').toggleClass('active')
    });

    $('.contact .terms_box .terms_text .text .close').click(function () {
        $('.contact .terms_box .terms_text .text').removeClass('active')
    });



    $('.section3 .table .product_list .list').click(function () {
        $(this).addClass('active');
        $(this).siblings().removeClass('active')
    });

    $('.section3 .table .product_list .list1').click(function () {
        $('.table_content1').css('display', 'block');
        $('.table_content2').css('display', 'none');
        $('.table_content3').css('display', 'none');
        $('.table_content4').css('display', 'none');
    });


    $('.section3 .table .product_list .list2').click(function () {
        $('.table_content1').css('display', 'none');
        $('.table_content2').css('display', 'block');
        $('.table_content3').css('display', 'none');
        $('.table_content4').css('display', 'none');
    });

    $('.section3 .table .product_list .list3').click(function () {
        $('.table_content1').css('display', 'none');
        $('.table_content2').css('display', 'none');
        $('.table_content3').css('display', 'block');
        $('.table_content4').css('display', 'none');
    });

    $('.section3 .table .product_list .list4').click(function () {
        $('.table_content1').css('display', 'none');
        $('.table_content2').css('display', 'none');
        $('.table_content3').css('display', 'none');
        $('.table_content4').css('display', 'block');
    });




    var bullet = ['특수물건 대출', '토지 대출', '지분 대출', '아파트,상가,오피스텔 대출', '경매 및 단기자금 대출'];
    var swiper = new Swiper(".mySwiper", {
        effect: "fade",
        loop: true,
        // autoplay: {
        //     delay: 3500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: "ture",
            renderBullet: function (index, className) {
                return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
            },
        },

    });

})