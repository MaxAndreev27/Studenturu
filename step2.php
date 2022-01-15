<?php
global $DIR;
$DIR = '..';
//$DIR = '../html';
?>

<?php include("parts/header.php"); ?>

<div class="container-fluid section-step2">
    <div class="container">
        <div class="row steps-row d-none d-lg-flex">
            <div class="col-lg-4">
                <div class="item active">
                    <span class="number">1</span><span class="text">Тип работы</span>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="item active">
                    <span class="number">2</span><span class="text">Детали работы</span>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="item">
                    <span class="number">3</span><span class="text">Готово</span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-12">
                <h2 class="text-center"><span class="text-red">Отлично,</span> вы уже почти в личном кабинете!</h2>
                <div class="subtitle text-center">
                    Пожалуйста, <span class="text-blue">уточните еще несколько деталей,</span> чтобы мы могли сразу рассчитать максимально точную цену вашей работы:
                </div>
                <div class="form-block">
                    <div class="form-wrapper">
                        <form action="">
                            <div class="form-group">
                                <input type="text" id="user-subject" class="form-control"
                                       placeholder="Укажите предмет">
                            </div>
                            <div class="form-group" >
                                <label for="user-file" class="form-label">Прикрепите файл с заданием или методичкой <span class="text-blue-bold">(необязательно)</span>
                                    <div class="type-file">.doc, .docx, .pdf, .jpg, и .png</div>
                                </label>
                                <input type="file" multiple class="form-control form-control-file" lang="ru">
                            </div>
                            <div class="form-group">
                                <label for="user-requirements" class="form-label">Напишите пожелания или требования к работе <span class="text-blue-bold">(необязательно)</span></label>
                                <textarea class="form-control" name="user-requirements" cols="30" rows="3" placeholder="Например: 60-70 стр., оформление по ГОСТу, уникальность от 70% по антиплагиат.ру, до 20.10"></textarea>
                            </div>
                            <div class="form-group-button">
                                <button type="submit" class="btn btn-green-dashed">Далее</button>
                                <a href="#" class="skip-link">Пропустить этот шаг</a>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <div class="gradient-white"></div>
</div>
<div class="container-fluid section-step2-bottom d-none d-sm-block">

</div>




<?php include("parts/footer.php"); ?>
