function skillsMember() {
  return {
    name: 'John Doe',
    skills: ['JavaScript', 'React'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}
