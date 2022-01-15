<?php
global $DIR;
$DIR = '..';
//$DIR = '../html';
?>

<?php include("parts/header.php"); ?>

    <div class="container-fluid section-step1-top">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h1 class="text-center">Надежный онлайн-сервис <span class="text-blue">Studentu.ru</span></h1>
                    <div class="text-wrapper">
                        <div class="subtitle text-center">[Имя], мы получили Вашу заявку <span class="fw-normal">и уже создали для Вас личный кабинет</span></div>
                        <div class="text text-center"><strong>Свяжемся с вами в течение 5-10 минут,</strong> расскажем о сроках и вариантах стоимости вашей работы и ответим на все вопросы</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="gradient-white"></div>
    </div>

    <div class="container-fluid section-step1-bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="block-consultation-blue">
                        <h2><span class="text-green-light">Кстати,</span> обещанный подарок</h2>
                        <div class="row">
                            <div class="col-xl-7 col-lg-8 col-md-10">
                                <h3 class="text-white">После консультации в течение суток вы <span class="text-green-light">бесплатно получите план для вашей дипломной работы.</span></h3>
                                <p><span class="text-green">Это вас ни к чему не обязывает.</span> Просто согласуйте план со своим научным руководителем — он порадуется, что вы уже начали работать над дипломом ;)</p>
                                <p>А потом, если захотите — приходите к нам за помощью. Заключим договор и начнем писать диплом!</p>
                            </div>

                        </div>
                    </div>
                    <h2 class="text-center"><span class="text-red">А пока вы ждете звонка</span></h2>
                    <div class="subtitle text-center"><span><strong>Расскажите чуть больше о своей работе,</strong> чтобы мы могли сразу сообщить вам точную стоимость</span></div>

                    <div class="form-block text-center">
                        <div class="form-wrapper">
                            <form action="">
                                <div class="form-group">
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected>Дипломная работа</option>
                                        <option value="1">Курсовая работа</option>
                                        <option value="2">Реферат</option>
                                        <option value="3">Доклад</option>
                                        <option value="4">Эссе</option>
                                        <option value="5">Контрольная работа</option>
                                        <option value="6">Практическая работа</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <input type="text" id="user-phone" class="form-control"
                                           placeholder="Тема">
                                </div>
                                <div class="form-group-button">
                                    <button type="submit" class="btn btn-green-dashed">Узнать стоимость</button>
                                    <div class="privacy-policy text-center text-black">Нажимая на кнопку, вы соглашаетесь с
                                        <a href="#">политикой конфиденциальности</a></div>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


<?php include("parts/footer.php"); ?>