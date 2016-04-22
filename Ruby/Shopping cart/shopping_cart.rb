class ShoppingCart

  def initialize
    @items = []
  end

  def add_item(item)
  	@items.push(item)
  end

  def price_all

  	price_all = 0
  	@items.each do |x|
  		price_all += x.price
  		
  	end

  	if @items.length >= 5
  		price_all = price_all * 0.9
  	end

  	"Your total today is #{'%.2f' %price_all}€, have a nice day!" 

	end
end


class Item 
	attr_reader :price
  def initialize(name, price)
      @name = name
      @price = price
  end

end

class Houseware < Item
  def price
      if @price > 100
      	price = @price * 0.95
      end
	price
  end
end

class Fruit < Item
  def price
  		time = Time.now
  		if time.wday > 5
  			price = @price * 0.9
  		elsif 
  			time.wday <= 5
  			price = @price
  		end
  		price
  end
end



banana = Fruit.new("Banana", 10)
orange_juice = Fruit.new("Orange juice", 10)
rice = Item.new("Rice", 1)
vacuum_cleaner = Houseware.new("Vacuum Cleaner", 150)
anchovies = Item.new("Anchovies", 2)

jorge_peris = ShoppingCart.new
jorge_peris.add_item(orange_juice)
jorge_peris.add_item(banana)
jorge_peris.add_item(vacuum_cleaner)
jorge_peris.add_item(rice)
jorge_peris.add_item(anchovies)



puts jorge_peris.price_all


