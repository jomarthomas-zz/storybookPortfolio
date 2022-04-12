import './badge.css';

export const createBadge = ({
    backgroundColor,
    label
}) => {
    const div = document.createElement('div');
    const child = document.createElement('span');
    const secondChild = document.createElement('span');
    const thirdChild = document.createElement('span');


    div.className = 'badge';
    div.style.backgroundColor = backgroundColor;

    child.className = 'badges';
    child.innerText = label;

    secondChild.className = 'badges';
    secondChild.innerText = label;

    thirdChild.className = 'badges';
    thirdChild.innerText = label;

    div.appendChild(child);
    div.appendChild(secondChild);
    div.appendChild(thirdChild);
    
    return div;
};
