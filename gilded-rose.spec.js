import { expect, describe, it } from "vitest";
import { Item, items, updateQuality, Basic, Brie, Legendary, Ticket, Conjured } from "./gilded-rose.js";

// --- test to ensure that quality and sellIn degrade by one on basic items (passing)
describe("updateQuality", () => {
  it("reduces quality and sellIn of basic items by 1", () => {
    const testItem = new Basic("sword", 5, 3);
    items.push(testItem);

    updateQuality();


    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(4);
  });
});


// --- test to ensure that quality degrades twice as fast on items with a sellIn of 0 (passing)
describe("updateQuality2", () => {
  it("reduces quality and sellIn of basic items by 2 once sellIn reaches 0", () => {
    const testItem = new Basic("sword", -1, 4);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(2);
    expect(testItem.sellIn).toBe(-2);
  });
});


//--- test to ensure that quality of brie rises as it gets older (passing)
  describe("updateQuality(aged brie)", () => {
  it("Aged Brie actually increases in quality the older it gets", () => {
    const testItem = new Brie("Aged Brie", 0, 50);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(-1);
  });
});


//test to ensure the functionality of ticket quality to sellIn formula (passing)
//quality increases by 2 when there are 10 days or less left before the concert.
//quality increases by 3 when there are 5 days or less left before the concert.
//quality drops to 0 after the concert.
describe("updateQuality(ticket)", () => {
  it("Ticket price quality increases based on days left in concert (10 + days", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 15, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(21);
    expect(testItem.sellIn).toBe(14);
  });
});

describe("updateQuality(ticket)", () => {
  it("Ticket price quality increases based on days left in concert (10 or less)", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 10, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(22);
    expect(testItem.sellIn).toBe(9);
  });
});

describe("updateQuality(ticket)", () => {
  it("Ticket price quality increases based on days left in concert (5 or less)", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 5, 48);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(50);
    expect(testItem.sellIn).toBe(4);
  });
});

describe("updateQuality(ticket)", () => {
  it("Ticket price quality should automatically drop to 0 after the concert has passed", () => {
    const testItem = new Ticket("Backstage passes to a TAFKAL80ETC concert", 0, 20);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(0);
    expect(testItem.sellIn).toBe(-1);
  });
});


//test to ensure that legendary items do not degrade in quality or sellIn (passing)
describe("updateQuality(legendary)", () => {
  it("Legendary items do not need to be sold and quality does not change", () => {
    const testItem = new Legendary("Sulfuras, Hand of Ragnaros", 0, 80);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(80);
    expect(testItem.sellIn).toBe(0);
  });
});

// //test to ensure that conjured items degrade at twice the normal rate(passing) 
describe("updateQuality(conjured)", () => {
  it("conjured items should degrade at twice the normal rate", () => {
    const testItem = new Conjured("Conjured Mana Cake", 3, 6);
    items.push(testItem);

    updateQuality();

    expect(testItem.quality).toBe(4);
    expect(testItem.sellIn).toBe(2);
  });
});