export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

//subclass for basic items
export class Basic extends Item {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  degrade() {
    if (this.sellIn < 0) {
      this.quality = this.quality - 2;
    } else {
      this.quality = this.quality - 1;
    }
    if(this.quality < 0){
      this.quality = 0
    }
  }
  age() {
    this.sellIn = this.sellIn - 1
  }
}

// subclass for Brie
export class Brie extends Basic {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  degrade() {
    if (this.quality >= 48) {
      this.quality = 50;
    } else if(this.sellIn < 0) {
      this.quality = this.quality + 2
    }else{
      this.quality = this.quality + 1
    }
  }
  age() {
    super.age()
  }
}

// subclass for legendary items 
export class Legendary extends Basic {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  degrade() {
  }
  age() {
  }
}

// subclass for tickets 
export class Ticket extends Basic {
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  degrade() {
    if (this.sellIn <= 0) {
      this.quality = 0
    } else if (this.sellIn <= 5) {
      this.quality = this.quality + 3;
    } else if (this.sellIn <= 10) {
      this.quality = this.quality + 2;
    } else {
      this.quality = this.quality + 1;
    }
    if (this.quality > 50) {
      this.quality = 50
    }
  }
  age() {
      super.age();
    }
}

//subclass for Conjured items 
export class Conjured extends Basic{
  constructor(name, sellIn, quality) {
    super(name, sellIn, quality);
  }
  degrade(){
    if (this.sellIn < 0) {
      this.quality = this.quality - 4;
    } else {
      this.quality = this.quality - 2;
  }
  if(this.quality < 0){
    this.quality = 0
  }
}
age(){
  super.age();
}
}

export let items = [];

items.push(new Basic("+5 Dexterity Vest", 10, 20));
items.push(new Brie("Aged Brie", 2, 0));
items.push(new Basic("Elixir of the Mongoose", 5, 7));
items.push(new Legendary("Sulfuras, Hand of Ragnaros", 0, 80));
items.push(new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20));
items.push(new Conjured("Conjured Mana Cake", 3, 6));


export const updateQuality = () => {
  for (let item of items) {
    item.age();
    item.degrade();
  }
};


