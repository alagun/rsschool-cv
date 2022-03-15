# Alexey Lagun

## Contacts:

> - Location: Brest, Belarus
> - E-mail: alexej.lagun@gmail.com
> - GitHub: alagun
> - Discord: alagun
> - Telegram: @AlexeyLagun
> - Tel: +375 33 674 08 53

---

## About myself

**I have strong willingness to learn and develop skills in IT sphere**

Personal Qualities:

- determined;
- accurate;
- cooperative;
- imeginative.

## Skills

- VS Code
- JS
- HTML&CSS
- Git
- Figma

And, now I'm level up my skills

## Code example

[Base Conversion kata from Codewars](https://www.codewars.com/kata/base-conversion)
In this kata you have to implement a base converter, which converts positive integers between arbitrary bases / alphabets.

```
convert('1010',bin,dec)

function convert(input,source,target) {
	let arr= [];
	let inDec = 0 ;

	for (let i = 0; i < input.length; i++) {
		len = input.length-1-i
		inDec += source.indexOf(input[len])*Math.pow(source.length,i);
	}

	while (inDec >= target.length) {
		symb = inDec % target.length;
		arr.unshift(target[symb])
		inDec = Math.floor(inDec / target.length)
	}

	arr.unshift(target[inDec])
	return arr.join('')
}
```

> I'm hardly working on it yet

## Education

- University:
  - Brest State Technical University. Industrial electronics. Electronics engineer
  - Brest branch Minsk State University. Logistic. Economist
- Courses:
  - [JS, CSS, HTML, Git video courses on Stage0 RSSchool](https://rs.school/js-stage0/)
  - [JavaScript](https://learn.javascript.ru/)
  - [Basic JS, CSS, HTML](https://ru.code-basics.com/)

## Experience

- CV https://alagun.github.io/rsschool-cv/cv
-
-

## Language

- Russian (lvl. C2)
- English (lvl. A2)
- Polish (lvl. A2)
