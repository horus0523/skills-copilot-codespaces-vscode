function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = document.getElementById("member-skills");
    var memberSkillsBtn = document.getElementById("member-skills-btn");
    var memberSkillsBtnIcon = document.getElementById("member-skills-btn-icon");
    var memberSkillsBtnText = document.getElementById("member-skills-btn-text");
    var memberSkillsBtnTextShow = "Show Skills";
    var memberSkillsBtnTextHide = "Hide Skills";
    var memberSkillsBtnIconShow = "fa fa-chevron-down";
    var memberSkillsBtnIconHide = "fa fa-chevron-up";
    if (memberSkills.style.display === "none") {
        memberSkills.style.display = "block";
        memberSkillsBtnText.innerHTML = memberSkillsBtnTextHide;
        memberSkillsBtnIcon.className = memberSkillsBtnIconHide;
    } else {
        memberSkills.style.display = "none";
        memberSkillsBtnText.innerHTML = memberSkillsBtnTextShow;
        memberSkillsBtnIcon.className = memberSkillsBtnIconShow;
    }
}