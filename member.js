function skillsMember() {
    var skills = document.getElementById('skills');
    var skillsMember = document.getElementById('skillsMember');
    var skillsMemberValue = skillsMember.value;
    var skillsMemberText = skillsMember.options[skillsMember.selectedIndex].text;

    if (skillsMemberValue == 1) {
        skills.style.display = "block";
    } else {
        skills.style.display = "none";
    }
}