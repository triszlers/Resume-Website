window.onload = () => {
    const transition_el = document.querySelector('.transition');
    const anchors = document.querySelectorAll('a:not(a.subBtn):not(a.sub-item)');  //selects a (links) that are not of the listed classes (excluded from transitions)

    setTimeout(() => {         //executes function once timer expires
        transition_el.classList.remove('is-active');   //after 3 seconds, terminate transition and just show page
    }, 300)

    for (let i = 0; i < anchors.length; i++) {
        const anchor = anchors[i];
        
        anchor.addEventListener('click', e => {
            e.preventDefault();
            let target = e.target.href;
            
            transition_el.classList.add('is-active');
            setTimeout(() => {
                window.location.href = target;
            }, 300);
        });
    }
}