puts "Write a sentence..."
phrase = gets.chomp

def order_nosym(sentence)

	#remove punctuation characters ||  ^ -> Matches any single character not in brackets ; \w -> all letters upcase and downcase and numbers ; \s -> spaces
	sentence.gsub!(/[^\w\s]/,'')  

	#Convert string to array(split) and order using upcase
	sentence.split(' ').sort! { |x,y| x.upcase <=> y.upcase}

end

puts order_nosym(phrase)