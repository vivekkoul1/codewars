//Your task is to write a function that takes a string and return a new string with all vowels removed.

//For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

disemvowel = (str) => {
	vowels = ['a', 'e', 'i', 'o', 'u']
	return str.split("").filter(x => !vowels.includes(x)).join("")
}

console.log(disemvowel("hello there"))

