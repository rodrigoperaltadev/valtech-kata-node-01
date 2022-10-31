const {Shop, Item} = require("../src/gilded_rose");

describe("Gilded Rose", function() {
  it("should common item", function () {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 10, 20),]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(19);
  });

  it("should Aged Bire", function () {
    const gildedRose = new Shop([ new Item("Aged Brie", 2, 0),]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(1);
    expect(items[0].quality).toBe(1);
  });

  it("should Sulfuras", function () {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", -1, 80)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(80);
  });

  /// BACKSTAGE 

  it("should Backstage when sellIn to be over than 10", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 15, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(14);
    expect(items[0].quality).toBe(21);
  });

  it("should Backstage when sellIn to be between 5 and 10", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(9);
    expect(items[0].quality).toBe(22);
  });

  it("should Backstage when sellIn to be between 0 and 5", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(4);
    expect(items[0].quality).toBe(23);
  });

  it("should Backstage when sellIn to be 0", function () {
    const gildedRose = new Shop([new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20)]);
    let items = gildedRose.updateQuality();
    expect(items[0].sellIn).toBe(-1);
    expect(items[0].quality).toBe(0);
  });

});
