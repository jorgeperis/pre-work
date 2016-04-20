puts "Write a sentence..."
phrase = gets.chomp

def order_nosym(sentence)

	#remove punctuation characters ||  ^ -> starts ; \w -> all letters upcase and downcase and numbers ; \s -> spaces
	result = sentence.gsub(/[^\w\s]/,'')  

	#Convert string to array(split) and order using upcase
	result = result.split(' ').sort { |x,y| x.upcase <=> y.upcase}

end

puts order_nosym(phrase)