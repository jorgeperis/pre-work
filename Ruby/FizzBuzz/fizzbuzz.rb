(1..100).each do |x|

	
	result = ""

	if x%3 == 0
		result = result + "Fizz"
	end

	if x%5 == 0
		result = result + "Buzz"
	end

	if x.to_s[0] == "1"
		result = result + "Bang"
	end


	if result == ""
		result = x
	end

puts x.to_s + " => " + result.to_s
			
end










