import React from 'react';
import logo from './logo-hollow.png';



function Nav() {
    /* document.addEventListener("DOMContentLoaded", () => {
        // Responsive nav
        const navSlide = () => {
            const burger = document.querySelector('.burger');
            const nav = document.querySelector('.nav-links');
            const navLinks = document.querySelectorAll<HTMLElement>('.nav-links__list__items__link__item');
            var i;

            console.log(nav);
            console.log(burger);
            console.log(navLinks);



            burger!.addEventListener("click", () => {
                nav!.classList.toggle("nav-active");

                //animate links
                navLinks.forEach((link, index) => {
                    if (link.style.animation) {
                        link.style.animation = "";
                    } else {
                        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5
                            }s`;
                    }
                });

                //burger animation
                burger!.classList.toggle('toggle');
            });



            //Remove animation on links to add them again later
            for (i = 0; i < navLinks.length; i++) {
                navLinks[i].addEventListener('click', () => {
                    nav!.classList.remove('nav-active');
                    burger!.classList.toggle('toggle');

                    for (i = 0; i < 4; i++) {
                        navLinks[i].style.animation = "";
                    }
                });
            }
        };

        navSlide();
    } */



    return (
        <div>
            
        </div>
    );
}



export default Nav;