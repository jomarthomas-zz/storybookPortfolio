import './card.css'
import './arrows.css'

export function createCard () {
    return `<div class="card">
                <div class="card-image">
                    <img src="https://source.unsplash.com/random/?coffee"/>
                </div>
                <div class="card-content">
                    <h4>Benefits of Drinking Coffee, 
                    Can Lower the Risk of Cancer 
                    to Stroke</h4>
                    <p>Coffee is the most popular drink in the world and drinking coffee in the morning has become a routine for many people before their activities. Besides being considered to be able to provide energy intake, it turns out that the ...</p>
                </div>
                <div class="arrows">
                    <div class="circle">
                        <span class="arrow">&#60;</span> 
                    </div>
                    <div class="circle">
                        <span class="arrow">&#62;</span> 
                    </div>
                </div>
            </div>`;
};
