class ShakeShop

	def initialize
		@milkshake = []
	end

	def add_milkshake(milkshake)
		@milkshake.push(milkshake)
	end

	def checkout_milkshake
		list=[]
		@milkshake.each do |x|
			list << "#{x.name} #{x.price_of_milkshake}$ (#{x.ingredients_list})"
		end
		list
	end
end

class MilkShake
	attr_reader :name

  	def initialize(name)
   		@base_price = 3
    	@ingredients = [ ]
    	@name = name
  	end

  	def add_ingredient(ingredient)
    	@ingredients.push(ingredient)
  	end

  	def price_of_milkshake
  
  		total_price_of_milkshake = @base_price
  
  		@ingredients.each do |ingredient|
    	total_price_of_milkshake += ingredient.price
  	end
  
   		total_price_of_milkshake
	end

	def ingredients_list
		list=[]
		@ingredients.each do |x|
			list << x.name
		end

		list.join(' & ')

		end


end

class Ingredient

	attr_reader :name, :price

  def initialize(name, price)
    @name = name
    @price = price
  end

end




shop = ShakeShop.new

classic_m = MilkShake.new("Classic")
sweet_m = MilkShake.new("Sweet")
fruits_m = MilkShake.new("Fruits")

banana_i = Ingredient.new("Banana", 2)
smarties_i = Ingredient.new("Smarties", 1)
mango_i = Ingredient.new("Mango",2)
kiwi_i = Ingredient.new("Kiwi",2)
candy_i = Ingredient.new("Candy",1)
cream_i = Ingredient.new("Cream",1)
chocolate_i = Ingredient.new("Chocolate",2)

classic_m.add_ingredient(smarties_i)
classic_m.add_ingredient(cream_i)
classic_m.add_ingredient(chocolate_i)

sweet_m.add_ingredient(chocolate_i)
sweet_m.add_ingredient(candy_i)
sweet_m.add_ingredient(smarties_i)

fruits_m.add_ingredient(mango_i)
fruits_m.add_ingredient(kiwi_i)
fruits_m.add_ingredient(banana_i)

shop.add_milkshake(classic_m)
shop.add_milkshake(sweet_m)
shop.add_milkshake(fruits_m)

puts shop.checkout_milkshake


