<h1 align="center">
<a href="https://lectrum.io" target="_blank" rel="noopener noreferrer"> <img src="./static/favicon/favicon-woodsmoke.svg" alt="Lectrum favicon" width="25" /></a> Интенсив по Redux: персональный проект</h1>

<br>

<div align="center">
  <!-- Package version -->
    <img src="https://img.shields.io/github/package-json/v/lectrum/redux-personal-project.svg?longCache=true&style=flat-square"
      alt="Package version" />
  <!-- Last commit -->
    <img src="https://img.shields.io/github/last-commit/lectrum/redux-personal-project.svg?longCache=true&style=flat-square"
      alt="Last commit" />
  <!-- Dependencies -->
    <img src="https://img.shields.io/badge/dependencies-up%20to%20date-brightgreen.svg?longCache=true&style=flat-square"
      alt="Dependencies" />
  <!-- Contributors welcome -->
    <img src="https://img.shields.io/badge/contributions-welcome-orange.svg?longCache=true&style=flat-square"
      alt="Last update" />
</div>
<div align="center">
  <!-- Наш Facebook -->
    <a href="https://www.facebook.com/lectrum">
        <img src="https://img.shields.io/badge/%D0%9F%D0%BE%D0%B4%D0%BF%D0%B8%D1%81%D1%8B%D0%B2%D0%B0%D0%B9%D1%81%D1%8F%20%D0%BD%D0%B0%20%D0%BD%D0%B0%D1%88-Facebook-blue.svg?longCache=true&style=for-the-badge&link=https://www.facebook.com/lectrum"
        alt="Подписывайся на наш Facebook" />
    </a>
</div>

<br>
<br>

<table align="center">
    <tbody>
        <tr>
            <td>
                <h3 align="center">👋🏼 Добро пожаловать на интенсив!</h3>
                <p>
                    🏎&nbsp;Данный репозиторий — это стартовая точка твоего персонального проекта. Целью самостоятельного выполнения персонального проекта является закрепление полученных тобой знаний. Так что не медли. Клонируй репозиторий, и начинай кодить! 🔥
                </p>
                <br>
                <p>👨🏽‍🔬&nbsp;В этой инструкции ты узнаешь как настроить и использовать проект.</p>
            </td>
        </tr>
    <tbody>
</table>

<br>

## 📜 Содержание

<img align="right" width="80" src="./static/logos/Redux.png">

-   [🚀 Для запуска проекта выполни следующие шаги](#-Для-запуска-проекта-выполни-следующие-шаги)
-   [🤖 Краткий обзор команд для проекта](#-Краткий-обзор-команд-для-проекта)
-   [🎨 Концептуальное задание](#-Концептуальное-задание)
-   [👨🏼‍💻 Техническое задание](#-Техническое-задание)
-   [🤔 FAQ](#-faq)

<br>

### 🚀 Для запуска проекта выполни следующие шаги

1. [Скачай и установи](https://nodejs.org/en/) последнюю LTS-версию Node.js.
2. Выполни в консоли `node -v` — убедись, что установлена последняя версия Node.js не ниже `v8.11.3`;
3. Введи в консоли `npm -v` — убедись, что установлена последняя версия npm не ниже `5.6.0`;
4. [Скачай и установи Git](https://git-scm.com/downloads), если его нет на компьютере;
5. Введи `git --version` — проверь версию установленного Git, должно быть не ниже `2.18.0`;
6. Склонируй и запусти этот проект: `git clone https://github.com/Lectrum/redux-personal-project.git`;
7. После клонирования выполни команду `cd redux-personal-project`;
8. Выполни команду `npm install`;
9. Самое время выполнить `npm start`;
10. Перейди в браузер и открой страничку [http://localhost:3000](http://localhost:3000/). Когда страничка загрузится, ты увидишь страницу с сообщением «Персональный проект: стартовая точка».
11. Открой Chrome Dev Tools и перейди на вкладку Console, там не должно быть каких-либо ошибок.

<br>
<br>

### 🤖 Краткий обзор команд для проекта

> Заметка: запускать через `yarn «имя команды»` или `npm run «имя команды»`.

| Команда           | Описание                                                          |
| ----------------- | ----------------------------------------------------------------- |
| `start`           | запустить проект для разработки                                   |
| `build:prod`      | сбилдить проект                                                   |
| `build:analyze`   | сбилдить проект и запустить режим детального анализа сборки       |
| `lint`            | провести анализ всего исходного кода на стилистически ошибки      |
| `lint:javascript` | провести анализ исходного JavaScript-кода на стилистически ошибки |
| `lint:css`        | провести анализ исходного CSS-кода на стилистически ошибки        |
| `test`            | запустить тесты                                                   |
| `test:watch`      | запустить тесты в watch-режиме                                    |
| `test:debug`      | запустить тесты в debug-режиме                                    |
| `soundcheck`      | запустить все линтеры и тесты                                     |
| `prettier`        | отформатировать исходный код с помощью prettier                   |
| `deploy`          | задеплоить приложение на свой github pages                        |

> Заметка: после деплоя на github pages приложение будет доступно по адресу:\
> https://`имя-твоего-пользователя-гитхаб`.github.io/`имя-твоего-репозитория-с-приложением`

<br>

### 🎨 Концептуальное задание:

Для успешного выполнения персонального проекта нужно удовлетворить следующие критерии:

- Приложение должно уметь выполнять следующие операции с задачами:
    - ✅ Создавать новую;
    - ✅ Получать все задачи;
    - ✅ Удалять задачу;
    - ✅ Редактировать текст задачи;
    - ✅ Отметить задачу как «выполненную»;
    - ✅ Отметить задачу как «приоритетную»;
    - ✅ Отметить все задачи как «выполненные».
- ✅ Все операции с задачами нужно подключить к API;
- ✅ Нужно сделать фильтр по задачам;
- ✅ При входе в режим редактирования, фокус ввода должен сместиться в поле с задачей;
- ✅ Редактирование задачи можно «применить» нажатием на клавишу Enter;
- ✅ Редактирование задачи можно «отменить» нажатием на клавишу Escape;
- ✅ Длина сообщения новой и редактируемой задачи не должна превышать 50 символов;
- ✅ Задачи должны сортироваться: сперва приоритетные, затем — обычные, и в конце — выполненные.

<br>

### 👨🏼‍💻 Техническое задание

Чтобы получить наивысшую оценку нужно правильно выполнить технические требования в деталях. Техническое задание разделено на несколько уровней сложности для удобства.

> P.S.: качество кода также является критерием в оценивании качества выполнения персонального проекта.

###### Легкий режим:

1. Суть задания: сделать хорошо работающий **Планировщик задач**, основываясь на предоставленном примере;
2. **Все** данные приложения должны проходить через полный redux flow (store, actions, reducers), локального состояния React в приложении быть не должно (в **normal mode** можно оставить только состояние редактирования задачи);
3. Все данные должны быть иммутабельными начиная с reducer'ов. Реализация − `immutable.js`;
4. Добавлять задачи нужно через поле сверху («Описание моей новой задачи»), длинной не более `50 символов`;
5. При нажатии на кнопку «Добавить задачу» или "Enter" поле ввода должно стать пустым, а новая задача добавиться в начало списка задач;
6. Задачу с пустой строкой добавить нельзя;
7. Порядок отображения задач:
    1. Приоритетные;
    2. Обычные;
    3. Выполненные.
8. **Задачу** можно отметить как приоритетную, нажав на звёздочку. А также — как не приоритетную при повторном нажатии:
    1. При этом, приоритетная задача должна переместиться в самый верх списка (сперва приоритетные);
    2. А не приоритетная — обратно в список не приоритетных.
9. Задачу можно отметить как выполненную, нажав на чекбокс слева, и как не выполненную при повторном нажатии:
    1. При этом, задачи, отмеченные как выполненные должны перемещаться в конец списка;
    2. При перемещении из выполненных в не выполненные задача должна располагаться после приоритетных — если задача не приоритетная, или вместе с остальными приоритетными — если задача приоритетная;
    3. Главное — сохранять консистентность групп задач, сохранять точное расположение внутри группы не обязательно, но желательно
10. Текст задачи можно редактировать, нажав на карандашик, максимальная длинна сообщение — `50 символов`:
    1. При входе в режим редактирования ввод пользователя должен сфокусировать на элементе `<input />`;
    2. При повторном нажатии на клавишу `Enter`, новый текст задачи должен сохраниться в состоянии, а режим редактирования выключится;
    3. При нажатии на `Escape`, или при повторном нажатии на карандашик текст задачи должен вернуться в исходное состояние, до входа в режим редактирования, а режим редактирования должен выключиться.
11. Задачу можно удалить, нажав на крестик;
12. При нажатии на чекбокс «Все задачи выполнены», все задачи должны быть отмечены как выполненные (отмечать задачи как «все не выполненные» в обратную сторону не нужно);
13. При вводе сообщения в поле «Поиск», задачи должны фильтроваться:
    1. Поиск должен быть синхронным, с мгновенным откликом;
    2. API для поиска использовать не нужно.

###### Обычный режим:

1. Подключить к API все инфраструктурные операции приложения. Транспортное средство — `redux-saga`. `redux-thunk` использовать нельзя.
2. Показывать спиннер на каждую инфраструктурную операцию.

###### Режим «Рэмбо»:

1. Вынести состояние редактирования задачи в redux — на этом этапе 100% состояния приложения должно быть в redux;
2. Покрыть Redux-составляющую приложения тестами;
3. Aнимировать добавление и удаление задач;
3. Aнимировать перемещение задач в приоритетные, выполненные и обратно.

<br>

---

В директории `source/instruments` находится компонент высшего порядка `withSvg` — с его помощью можно использовать SVG-разметку в качестве React-компонентов. Декорированные компоненты-SVG находятся в директории `source/theme/assets`.

Пример использования:

![svg-example](./static/assets/svg-example.png)

---

<br>

### 🤔 FAQ

Ответы на часто задаваемые вопросы можно найти [здесь](https://github.com/Lectrum/FAQ#-faq).

<br>

<div align="center">
  <!-- Сделано с любовь -->
    <img src="**https**://img.shields.io/badge/%D0%A1%D0%B4%D0%B5%D0%BB%D0%B0%D0%BD%D0%BE%20%D1%81-%F0%9F%96%A4-red.svg?longCache=true&style=for-the-badge&colorA=000&colorB=fedcba"
      alt="Сделано с любовь" />
</div>
