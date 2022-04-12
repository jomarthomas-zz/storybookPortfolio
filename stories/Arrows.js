import './arrows.css';

export function createArrows (backgroundColor, label) {
    return `<div class="arrows">
                <div class="circle">
                    <span class="arrow">&#60;</span> 
                </div>
                <div class="circle">
                    <span class="arrow">&#62;</span> 
                </div>
            </div>`;
};
