var findThreadsParent = document.querySelectorAll(".structItem--thread");
var counterToShowOnlyThreads = 0; // We need a counter because it also shows new messages, that is an unwanted behaviour. 
var logoChanged = false;
//Bir sayaca ihtiyacımız var çünkü yeni mesajları da gösteriyor, bu istenmeyen bir davranış. 

for (var thread of findThreadsParent) {
    if(counterToShowOnlyThreads <= 15) {
        if(thread.getAttribute("data-author") === "Linux Forever" && logoChanged == false) {
            alert("Eyvaah, Linux Forever konu açmış! Kaçın beyler...");
            var iconElement = document.getElementsByClassName("p-header-logo p-header-logo--image"); 
            var iconParent = iconElement.item("a");
            var iconChild = iconElement.item("a").childNodes[1];
            var diniconeLogo = document.createElement("img");
            diniconeLogo.src = "https://i.imgur.com/kdkgLjo.png";
            iconParent.appendChild(diniconeLogo);
            iconChild.remove();
            logoChanged = true;
        }
        counterToShowOnlyThreads++;
    }
}
