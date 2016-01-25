describe('Contact', function(){
  it("Creates a new contact with the given properties", function(){
    var testContact = new Contact("Rita", "Moreno");
    expect(testContact.firstName).to.equal("Rita");
    expect(testContact.lastName).to.equal("Moreno");
    expect(testContact.addresses).to.eql([]);
  });
  it("adds the fullName method to a contact", function(){
    var testContact = new Contact("Peter", "Pan");
    expect(testContact.fullName()).to.equal("Peter Pan");
  });

});
