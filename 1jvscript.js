function Person(f_name, l_name, office_address) {
    this.firstName = f_name;
    this.lastName = l_name;
    this.officeAdress = office_address;
  }
  const details = new Person('firstName','lastName','officeAdress');
  const person_1 = new Person('Saraswati', 'Kumari', 'Pune');
  const person_2 = new Person('Sneha', 'Priya','Mumbai');
  const person_3 = new Person('Muskan','Gupta','Indore');
  console.log(details.firstName+" "+details.lastName+" "+details.officeAdress);
  console.log(person_1.firstName+" "+person_1.lastName+" "+person_1.officeAdress);
  console.log(person_2.firstName+" "+person_2.lastName+" "+person_2.officeAdress);
  console.log(person_3.firstName+" "+person_3.lastName+" "+person_3.officeAdress);
