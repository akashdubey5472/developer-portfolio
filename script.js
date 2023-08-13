//scroll section

Let Sections = document.querySelectorAll('section');
Let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () => {

    sections.forEach(sec => {
        Let top = window.scrollY;
        Let offset = sec.offsetTop - 100;
        Let height = sec.offsetHeight;
        Let id = sec.getAttributes('id');

        if(top >= offset && top < offset + height){
            //active navbar navLinks

            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
        
    });
    //sticky heaader
    Let header = document.querySelector('header');

    header.classlist.toggle('sticky',window.scrollY)
}