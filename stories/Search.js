import './search.css';
import './button.css'

export function createSearch (backgroundColor, label) {
    return `<div class="search-wrapper">
                <div class="search-group">
                    <input placeholder="Search for something"/>
                    <button type="button" class="button button--medium button--primary">Search</button>
                </div>
            </div>`;
};
