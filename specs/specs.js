describe("translator", function(){

  it("check to see if the word starts with a vowel. if true, add 'ay' to the end", function(){
    expect(translator("apple")).to.equal("appleay");
  });

  it("check to see if the word starts with a 'qu'. if true, move to end and add 'ay'", function(){
    expect(translator("quilt")).to.equal("iltquay");
  });

  it("check to see if the word starts with a 'squ'. if true, move to end and add 'ay'", function(){
    expect(translator("squeal")).to.equal("ealsquay");
  });

  it("check to see if it starts with a consonant. if true, move consecutive consonants to end until you hit a vowel and add 'ay'", function(){
    expect(translator("llama")).to.equal("amallay");
  });

  it("takes a sentence and splits each word into a string and runs all functions above", function(){
    expect(translator("good luck")).to.equal("oodgay ucklay");
  });
});
