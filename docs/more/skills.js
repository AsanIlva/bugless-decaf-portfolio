let skillBtn = document.querySelectorAll(".skill");
let description = document.querySelectorAll('.description');

skillBtn.forEach(function(element, index){
    element.addEventListener("click", function(e){
        
        // 1. Remove the green active background from ALL boxes
        skillBtn.forEach(function(skillBtnBox){
            skillBtnBox.classList.remove('active__skill');
        });
        
        // 2. Add the green active background ONLY to the box you just clicked
        this.classList.add('active__skill');
        
        // 3. Hide all right-side descriptions
        description.forEach(function(descriptionBox){
            descriptionBox.classList.remove('active__description');
        });
        
        // 4. Show the matching right-side description (and trigger fade animation)
        description[index].classList.add('active__description');
    });
});