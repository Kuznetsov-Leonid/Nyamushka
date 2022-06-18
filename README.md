# Nyamushka
Responsive app, pet products store.

__Ответы на вопросы из первой части ниже во второй половине документа__

# Test task for FanBox (Level II)

__Task:__ Make up the page shown in the picture. Appearance must be completely
match the layout, and the behavior matches the description of the task.

1. The background occupies the entire screen area, the block is vertically centered and
horizontally.
2. On tablets, the packages are arranged in a triangle, on smartphones, one under
friend.
3. Product information is subject to change.
4. Each of the packages may or may not be selected. Choice
by clicking on the package or on the text "buy" in the description.
5. You can select multiple packages at the same time, as well as cancel your
selection by pressing the package again.
6. The hover state is not applied to the selected package immediately, but after
how the cursor left it after the initial selection.

__Browsers:__ Chrome, Firefox, Safari, IE11;

# Информация по сборке и запуску

__node version 16.15.1__

1. npm install --save-dev sass-loader@7.1.0
2. npm install react-bootstrap@next bootstrap@5.1.0
3. npm start 

# Старт приложения 

![plot](/IMG/InJob.png)

# Поведение выбранного элемента при наведении

__Стандартное состояние__

![plot](/IMG/noHover.png)

__При наведении__

![plot](/IMG/inHover.png)

Изменяются сообщения в блоке. Обращаю внимание, 
что состояние при наведении меняется только тогда, 
когда при выборе элемента, курсор удаляется из поля блока элемента. 

# Поведение элемента при изменении статуса в data

![plot](/IMG/codeStatus.png)

При изменении состояния на __disable__ применяются соответсвующие стили и блокирование блока 

![plot](/IMG/codeStatusDisable.png)

![plot](/IMG/disable.png)

При изменени состояния на __Selected__ (применяется при нажатии на элемент или при изменении состояния в data)
так же применяются соответсвующие стили и изменяется информация под блоком элемента

![plot](/IMG/codeStatusSelected.png)

![plot](/IMG/Selected.png)

Стандартное состояние при __notSelected__

![plot](/IMG/noSelected.png)

# Поведение при разных разных разрешениях экранов

__1200x1200__

![plot](/IMG/format.png)

__От 1200__

![plot](/IMG/hightFormat.png)

__Tablets 820x1180__

![plot](/IMG/tablet.png)

__Mobile 360x855__

![plot](/IMG/phone.png)

# ///////////////////////////////////////////////////////////////////////////////////////////////

# Level I

# Q1
## Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения: 

1. __пользователя__

    С точки зрения пользователя можно дать ответ по разному, для каждого человека 
есть своё представление о том что выглядит хорошо, а что плохо, сколько людей 
столько и мнений. В данном случае можно говорить об общих вещах, соответсвующим 
сложившемуся пользовательскому опыту и здравому смыслу. Пользователь - это конечный 
потребитель, который в подавляющем большинстве далёк от технологий реализации продукта.
Для пользователя важно, чтобы проект работал, успешно и безошибочно предоставлял 
спектор заявленных ценностей продукта и больше. Хорошая вёрстка - удобный и простой, нативный, 
интуитивно понятный интерфейс, UI соответсвует времени. На любых современных устройствах и браузерах интерфейс и контроллеры
отображаются корректно как для мобильного клиента, так и для десктопа. Опять же, реализация должна 
соответсвовать заявленному функционалу и дизайну. Также, стоит принимать во внимание целевую аудиторию.
Хорошая вёрстка - та, которая продаёт и увеличивает конверсию.

2. __Менеджера проекта__

    С точки зрения менеджера проекта, вёрстка дожна соответствовать ТЗ, код должен быть удобно читаемым.

3. __Дизайнера__

    Поведение приложения и вёрстка должны максимально точно отражать задумку дизайнера.

4. __Верстальщика__

    Хорошая верстка должна одинаково хорошо выглядеть во всех браузерах и на всех устройствах, для которых проектировался интерфейс. 
Интерфейс не должен "разваливаться". В вёрстке используются общие для компании правила написания кода.

5. __Клиентского программиста__

    Для фронтенд-программиста хорошая верстка должна быть легко читаема, иметь чёткую структуру.

6. __Серверного программиста__

    Верстка не нагружает сервер большим количеством запросов, применяется при возможности кэширование.

## P.S.

    Зачастую, на практике каждый из вышеперечисленных пунктов имеет свои представления о хорошей вёрстке.
Например, дизайнер и менеджер проекта хотят иметь очень "гибкую" вёрстку для быстрых внедрений изменений во внешний вид.
Программисту - чем проще код и меньше костылей, тем лучше. В идеале - это блочная, адаптивная, эластичная, резиновая, кроссбраузерная и оптимизированная
вёрстка, которая быстро обрабатывается браузером. При этом от вёрстки может зависеть мнение поисковых систем.
Решение не должно быть "хорошим" или "плохим". 
Любое решение и реализация должны быть взвешенными.


# Q2
## Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике:

Верстка должна быть выполнена отдельными, независимыми компонентами или блоками, которые можно многократно использовать. Обязательно использовать переменные для стилей. Этим можно моментально изменить на всем сайте шрифт, высоту и начертание текста, заголовков, различных элементов интерфейса – например, кнопок.
Для более-менее крупных проектов нужно использовать методологии web-разработки, например, Agile. В верстке избегать дублирования стилей с помощью  БЭМ.

# Q3
## Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.

    Прежде всего нужно обращать внимание на формат и разрешение экрана. Применения стилей в этом случае настраивается с помощью
медиазапросов. При проектировании проекта надо учитывать какие браузеры поддерживают те или иные стили. Я в этом случае использую 
справочник CSS свойств по поддержке браузеров на ресурсе https://schoolsw3.com/cssref/css3_browsersupport.php
Для контроля корректности вёрстки под устройства можно использовать эмуляторы, например на Макбуках они встроенные. Зачастую достаточно использовать 
встроенную консоль разработчика в браузере. Его функционал позволяет использовать отзывчивое устройство, что очень полезно при тестировании поведения приложения. 
Я при разработке сайтов использую живые устройства, подключаю свой телефон к локальному серверу внутри своей локальной сети. Иногда прошу своих знакомых с ios устройствами их одолжить для тестирования. Можно воспользоваться https://www.lambdatest.com/ios-simulator-online
В моей практике был случай, когда я столкнулся с некорректным отображением стилей на ios устройствах. Узнал я об этом после ввода приложения в эксплуатацию на прод, когда об этом рассказали мои знакомые, изображения некорректно растягивались по дисплею. С помщью эмулятора на lambdatest и поиска решения задачи, работа приложения была исправлена. 

# Q4 
##  Расскажите, какие инструменты помогают вам экономить время в процессе написания, проверки и отладки кода.

Я использую Visual Studio Code, в нём много встроенных сниппетов и поддержка git и dev-server. Панель разработчика в Google Chrome или dev-сборку Firefox. Для JavaScript – console.log(). Люблю работать с Bootstrap и UiKit, в этих фремворках много инструментов, которые можно использовать для решения задач. 

# Q5 
## Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?

В указанных браузерах есть инструменты разработчика, которые позволят оперативно посмотреть на проблему. Если проблема в CSS, нужно дописать стили для каждого проблемного браузера.

# Q6
## Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?

    Те элементы, при наведении на которые подразумевается какая-то логика, должны иметь соответсвующую обратную связь. В данном случае, нужно проследить за тем, 
чтобы значение cursor было соответсвующим, например pointer. С помощью такого стандарта пользователь с лёгкостью сможет понять интерактивность элемента. 
Затем можно уточнить у дизайнера, что он имел в виду, когда прислал такой вариант макета.

# Q7а
## Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS-верстка или что-то ещё? Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?

    Для развития я использую различные видеоресурсы на YouTube, открытые источники и документацию. Общаюсь с окружением людей, работающих в сфере IT, иногда узнаю тренды от них в том числе. Хабр и Стаковерфлоу, https://getuikit.com/ https://react-bootstrap.github.io/, книги: Марейн Хавербек «Выразительный JavaScript»,
    Николас Закас «Принципы объектно-ориентированного программирования в JavaScript», Кирупа Чиннатамби «JavaScript с нуля». Обучаюсь самостоятельно, большинство навыков и знаний осваиваются по мере решения задач. 

# Q8
## Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.

Все представленные работы вы може увидеть на профиле github. 