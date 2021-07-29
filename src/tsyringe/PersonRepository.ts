class PersonRepository {
  persons = [
    {
      id: 1,
      name: "Janac Meena",
    },
    {
      id: 2,
      name: "Pradeega",
    },
  ];

  getPersons() {
    return this.persons;
  }
}
export default PersonRepository;