# Css3
display: inline-block
    gebruiken om elementen inline te gebruiken maar toch een width en height te kunnen geven

relatieve afmetingen
    %: gebruikt parent-element als referentie
    em: gebruikt parent-element als referentie, parent-element een vaste waarde geven in px
        dit is dan gemakkelijk als je de hoogte wil aanpassen, je moet dan enkel in de parent de waarde aanpassen. 
        CSS also allows you to define relative unit sizes for font-sizes:
The em unit size will be relative to the parent's font-size.
For example, if our page's body has a font size of 16px, using 1.5em will be equal to 24px (16*1.5):
    rem: It stands for Root Em, meaning that it only looks at the font-size of the root element, which is the html element. 
    dan moet je niet elk parent-element een waarde geven

responsive: 
    @media screen and (max-width: 480px){mobile}
    Here are some of the most common practices to follow when building a responsive web page:
- Use relative units (such as percentages) for the sizes of the elements and fonts.
- Use CSS media queries to define breakpoints and layout changes.
- Define the viewport to adapt to mobile screens.
- Use CSS Flexbox to make it easier to create flexible layouts.

submenu:
    We used a CSS hack in order to position our submenu in the center of the screen. The combination of absolute positioning, using the left and transform property, results in our submenu being positioned in the center of the screen and opened over the page elements.
        left: 50%;
        transform: translate(-50%, 0);
        text-align:center;
        position: absolute;
