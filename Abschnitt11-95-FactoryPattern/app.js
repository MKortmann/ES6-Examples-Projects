// Factory Pattern or Factory Method: a way of create a interface to create objects! We can let subclasses defined which classes to instanciate. The methods are often used in application to manage, maintain and manipulate colection of objects that are diff. but at same time have same properties/methods...

function MemberFactory() {
  this.createMember = function(name, type) {
    let member;

    if(type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    return member;
  }
}

const SimpleMembership = function(name) {
  this.name = name;
  this.cost = "$5";
}
const StandardMembership = function(name) {
  this.name = name;
  this.cost = "$15";
}
const SuperMembership = function(name) {
  this.name = name;
  this.cost = "$25";
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember("Marcelo Zert", "super"));
members.push(factory.createMember("Carlos Xesr", "simple"));
members.push(factory.createMember("John Doe", "super"));
members.push(factory.createMember("Tom Smith", "standard"));
members.push(factory.createMember("Janie Williams", "super"));

// console.log(members);

members.forEach(function(member) {
  member.define();
})
