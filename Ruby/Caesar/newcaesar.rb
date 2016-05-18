puts 'Write a sentence...'
name = gets.chomp
print 'Caesar always used a left shift of 3(-3), do you want to change?(y/n)'
num = gets.chomp

	if num == 'y'
		print 'Write the new cipher number...'
		num = gets.chomp.to_i
	else
		num = -3
	end

def cipher(sentence,parameter)

	sentenceResult=[]
	sentenceSplit = sentence.split('')
	
	(0..(sentenceSplit.length - 1)).each do |x|

		sentenceResult[x] = sentenceSplit[x].ord + parameter

		if sentenceSplit[x] == ' '
			sentenceResult[x] == ' '
		elsif sentenceResult[x] < 97
			sentenceResult[x] = 26 + sentenceResult[x]	
		elsif sentenceResult[x] > 122
			sentenceResult[x] = sentenceResult[x] - 26
		end

		sentenceResult[x] = sentenceResult[x].chr
	end

	return sentenceResult.join('')

end

puts cipher(name,num)