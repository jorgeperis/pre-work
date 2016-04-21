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


down = ('a'..'z').to_a				#Create array of downcase
up = ('A'..'Z').to_a				#Create array of upcase
digit = ('0'..'9').to_a				#Create array of digits
rest = ((33.chr)..(126.chr)).to_a	#Create array of rest of characters

#Hash with the relation between array and regular expressions.[^\w\s] match all characters 
#minus downcase letters, upcase letters, digits(\w) and spaces(\s)
hash = {down => /[a-z]/, up => /[A-Z]/ , digit => /[0-9]/, rest => /[^\w\s]/}	

#function to change the character 'x' by the new cipher character, creating loops in downcase letters, upcase letters, digits and rest
# the function does ..x,y,z,a,b,c.. ; ..X,Y,Z,A,B,C.. ; ..7,8,9,0,1,2.. ; ..|,},~,!,",# 
def cipher(range,name,num,x)

	res = x.ord + num							#.ord of the future character
	ope = range.last.ord - range.first.ord + 1		#the operation to do for drive the new character into the range
		if res < range.first.ord					
			(ope + res).chr
		elsif res > range.last.ord
			(- ope + res).chr
		else
			res.chr									#the return of the function is the new character		
		end		

end


(0..(hash.length - 1)).each do |y|					# 4 iterations, one for each range (down,up,digit,rest)

	name.gsub!(hash.values[y]).each do |x|		# the necesary iterations according with the characters that 
												# the regular expressions defines (/[a-z]/, /[A-Z]/ , /[0-9]/, /[^\w\s]/)
	cipher(hash.keys[y],name,num,x)				

	end
end

puts name



		

		
	

	 

	


