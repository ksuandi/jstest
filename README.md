### 1. Задача

Реализовать функцию checkBraces($str), проверяющую на синтаксическую верность последовательность скобок

- Необходимо учитывать вложенность
- Обратите внимание на производительность вашего решения
- В случае ошибки возвращаем 1, в противном случае 0

Минимальный набор тестов:

```
checkBraces("---(++++)----") == 0
checkBraces("") -> 0
checkBraces("before ( middle []) after ") == 0
checkBraces(") (") == 1
checkBraces("} {") == 1
checkBraces("<(   >)") == 1
checkBraces("(  [  <>  ()  ]  <>  )") == 0
checkBraces("   (      [)") == 1
```

**Ответ:** [код](https://github.com/ksuandi/jstest/blob/master/src/task1_refactoring.js),
[тесты](https://github.com/ksuandi/jstest/blob/master/tests/1.test.js)

### 3. Рефакторинг

```
function func(s, a, b) {

	if (s.match(/^$/)) {
		return -1;
	}

	var i = s.length -1;
	var aIndex =     -1;
	var bIndex =     -1;

	while ((aIndex == -1) && (bIndex == -1) && (i > 0)) {
	    if (s.substring(i, i +1) == a) {
	    	aIndex = i;
    	}
	    if (s.substring(i, i +1) == b) {
	    	bIndex = i;
    	}
	    i = i - 1;
	}

	if (aIndex != -1) {
	    if (bIndex == -1) {
	        return aIndex;
	    }
	    else {
	        return Math.max(aIndex, bIndex);
	    }
	}

	if (bIndex != -1) {
	    return bIndex;
	}
	else {
	    return -1;
	}
}
```
- Как бы вы переписали этот код?

**Ответ:** [код](https://github.com/ksuandi/jstest/blob/master/src/task3_refactoring.js),
[тесты](https://github.com/ksuandi/jstest/blob/master/tests/3.test.js)

### 4. Практическая задача
Разработать компонент Country Suggest: компонент подсказки названия страны с флагами

- Для тестовой реализации использовать API https://restcountries.eu/#api-endpoints-name
- Компонент должен быть переиспользуемым, то есть не завязанным на конкретный API. Конфигурация должна включать как минимум:
  - apiURL: string
  - flagField: string | function(resp) Коллбек позволяет указать их какого поля ответа получать изображение с флагом
- Реализация клавиатурных событий - стрелок вверх-вниз - на ваше усмотрение
- Вы можете использовать свой любимый фрейворк(React, VueJS, etc) или Vanilla JS - на ваше усмотрение
- Проект должен иметь все необходимое для работы в репозитории, включая Readme с документацией по сборке и пример использования

**Ответ:** [код](https://github.com/ksuandi/vue-typeahead/blob/master/src/components/CountrySuggest.vue),
[пример использования](https://ksuandi.github.io/vue-typeahead/#/countrysuggest)





