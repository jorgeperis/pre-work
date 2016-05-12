
class Draw
	def initialize
		@rleg = '\\'
		@lleg = '/'
		@trunk = '|'
		@rarm = '\\'
		@larm = '/'
		@head = 'o'
		@list =[@rleg,@lleg,@trunk,@rarm,@larm,@head]
	end
	def draw(attempt)
		
		(0..(5-attempt)).each do |x|
			@list[x]= ''
		end

		puts "   #{@list[5]}"
		puts "  #{@list[4]} #{@list[3]}"
		puts "   #{@list[2]}"
		puts "  #{@list[1]} #{@list[0]}"
		puts "\n"
	end
	
end
class Player
	attr_accessor :name
	def initialize(name)
    	@name = name
   	end
   	def typeToGuess
   		puts "(EX) Exit\n(SA) Save"
   		puts "#{@name} type a letter or the entire sentence..."
		letter = gets.chomp
	end
	def writeWords1
		read_txt = IO.read('Adj929.txt')
		wordsArray = read_txt.split(",")
		word = wordsArray[rand(0..928)].strip
		if word.length < 5 && word.length > 12
			writeWords1
		else
			word
		end
	end
	def writeWords2
		puts "#{@name}, write the word..."
		word = gets.chomp
		word = word.downcase
	end

end
class Game
	
	def initialize
		@guess=""
		@word = ""
		@attempts = 6
		@lettersNot = Array.new
	end

	def start
		initialize
		puts '¡Welcome to HangMan game!'
		choosegametype
	end
	def choosegametype
		puts "Choose:\n(1) One player\n(2) Two players\n(L) Load game"
		players = gets.chomp
		while players != '1' && players != '2' && players.upcase != 'L'
		puts 'Just type 1 or 2, or L'
		players = gets.chomp
		end
		if players.upcase == 'L'
			loadProgress
		else
			gametype(players)
		end
	end

	def gametype(type)
		case type
		when '1'
			puts 'Ok, one player, write your name...'
			name0 = gets.chomp
			@player = Player.new(name0)
			@noplayer = Player.new('Computer')	
			@word = @noplayer.writeWords1	
		when '2'
			puts 'Ok, two players, write the name of the player who put the word...'
			name1 = gets.chomp
			@noplayer = Player.new(name1)
			puts 'Now the name of the player who will try to guess the word...'
			name2 = gets.chomp
			@player = Player.new(name2)	
			@word = @noplayer.writeWords2
		end
		
		(0..(@word.length-1)).each do |x|
			@guess[x] = '_'
		end
		i = 0
		while @word.index(' ',i) != nil
			i = @word.index(' ',i) + 1
			@guess[i-1] = ' '
		end
		principalScreen(@guess)
		insertText
	end

	def principalScreen(textToShow)
		puts "\e[H\e[2J"
		puts textToShow
		puts "Attempts left: #{@attempts}"
		print "Failed letters:"
		(0..(5-@attempts)).each do |x|
			print " #{@lettersNot[x]},"
		end
		puts "\n"
		hangman = Draw.new
		hangman.draw(@attempts)
	end

	def insertText
		@letter = @player.typeToGuess
		validate
	end
	def validate
		if @letter.length == 1
			workALetter
		elsif @letter.upcase == 'EX'
			return
		elsif @letter.upcase == 'SA'
			saveProgress
			return
		elsif @letter.length == @word.length
			workEntire
		else
			principalScreen(@guess)
			insertText
		end
	end

	def workALetter
		i = 0
		unless @lettersNot.include? @letter.upcase

		if @word.index(@letter) == nil
			@attempts-= 1
			@lettersNot << @letter.upcase
		else
			while @word.index(@letter,i) != nil
				i = @word.index(@letter,i) + 1
				@guess[i-1] = @letter.upcase
			end
			
		end
		end
		checkAdvance
	end

	def workEntire
		if @letter.downcase == @word
			final(@player,@noplayer)
		else
			@attempts -=1
			@lettersNot << '*'
			checkAdvance
		end
	end
	def checkAdvance
		if @attempts == 0
			final(@noplayer,@player)
		elsif @guess.index('_') == nil
			final(@player,@noplayer)
		else
			principalScreen(@guess)
			insertText
		end
	end

	def final(win,lose)
		principalScreen(@word.upcase)
		puts "#{win.name} win!"
		puts "#{lose.name} lose!"
		again
	end

	def again
		puts "Play again?Yes/No"
		ans = gets.chomp
		if ans.upcase == 'YES' || ans.upcase == 'Y'
			start
		end
	end
	def saveProgress
		save = [@word,@guess,@attempts,@player.name,@noplayer.name,@lettersNot].join(',')
		IO.write('progress.txt', save)
	end
	def loadProgress
		r = IO.read('progress.txt').split(",")
		@word = r[0]
		@guess = r[1]
		@attempts = r[2].to_i
		@player = Player.new(r[3])
		@noplayer = Player.new(r[4])
		(5..(r.length - 1)).each do |y|
			@lettersNot << r[y]
		end
		principalScreen(@guess)
		insertText
	end

end

mygame = Game.new
mygame.start
