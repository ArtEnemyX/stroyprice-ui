/* global document */
import {storiesOf} from '@storybook/html';
import {withDesign} from 'storybook-addon-designs'

let designParams = {
    design: {
        type: 'figma',
        url: 'https://www.figma.com/file/kuXOOnLDbWwUC8lG6wESVf/%D0%9D%D0%BE%D0%B2%D1%8B%D0%B9-2020?node-id=908%3A3',
    }
};

storiesOf('Кнопки', module)
    .addDecorator(withDesign)
    .add('Обычная кнопка', () => '<button class="btn" type="button"><span class="btn__cap">Текст кнопки</span></button>', designParams)
    .add('Ссылка как кнопка', () => '<a href="javascript:void(0)" class="link link_btn"><span class="link__cap">Hello link</span></a>', designParams);

storiesOf('Остальное', module)
    .add('Заголовок h1', () => '<h1>Hello World (h1)</h1>')
    .add('Заголовок h2', () => '<h2>Hello World (h1)</h2>')
    .add('Обычный текст', () => '<p class="text">Text</p>')
    .add('Ссылка', () => '<a href="javascript:void(0)" class="link"><span class="link__cap">Hello link</span></a>')
    .add('Выпадающий список', () => '<div class="select-block">\n' +
        '            <div class="select-block__grp">\n' +
        '                <label class="select-block__label" tabIndex="-1">\n' +
        '                    <select class="select-block__field" name="<NAME>">\n' +
        '                        <option value="product-1">Обычный список с выбором</option>\n' +
        '                        <option value="product-2">Нечто ужасное</option>\n' +
        '                        <option value="product-3">Бесполезный балласт</option>\n' +
        '                        <option value="product-4">Кусок влажной фанеры</option>\n' +
        '                        <option value="product-5">Шалом</option>\n' +
        '                        <option value="product-6">Пункт, который умрёт первым</option>\n' +
        '                        <option value="product-7">*пошлый анекдот*</option>\n' +
        '                    </select>\n' +
        '                </label>\n' +
        '                <button class="btn btn_icon btn_reverse select-block__btn" type="button">\n' +
        '                    <i class="btn__icon select-block__btn-icon">\n' +
        '                        <svg class="btn__svg" height="18" viewBox="0 0 24 24" width="18"\n' +
        '                             xmlns="http://www.w3.org/2000/svg">\n' +
        '                            <path d="M7.41 7.84L12 12.42l4.59-4.58L18 9.25l-6 6-6-6z"></path>\n' +
        '                            <path d="M0-.75h24v24H0z" fill="none"></path>\n' +
        '                        </svg>\n' +
        '                    </i>\n' +
        '                    <span class="btn__cap select-block__btn-cap">Кнопка</span>\n' +
        '                </button>\n' +
        '            </div>\n' +
        '            <p class="select-block__cap">Выпадающий вниз</p>\n' +
        '        </div>');