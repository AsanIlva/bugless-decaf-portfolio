      let skillBtn = document.querySelectorAll(".skill");
let description = document.querySelectorAll('.description');

skillBtn.forEach(function(element, index){
    element.addEventListener("click", function(e){
        skillBtn.forEach(function(skillBtnBox){
            skillBtnBox.style.outline = 'none';
        })
        this.style.outline = '2px solid #f00';
        description.forEach(function(descriptionBox){
            descriptionBox.style.display = 'none';
        })
        description[index].style.display = 'block';
    })
})