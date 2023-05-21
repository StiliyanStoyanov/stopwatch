export function createTimeTrackerElement(laps: number, lapTime: string, totalTime: string) {
    const template = document.createElement('template');
    const templateString = `
    <div id="times-tracker">
        <section>
            <h3>Laps</h3>
            <ul id="laps">
                <li>
                    <span>${laps}</span>
                    <span id="fastest">Fastest</span>
                    <span id="slowest">Slowest</span>
                </li>
            </ul>
        </section>
        <section>
            <h3>Time</h3>
            <ul id="time">
                <li>${lapTime}</li>
            </ul>
        </section>
        <section>
            <h3>Total</h3>
            <ul id="total">
                <li>${totalTime}</li>
            </ul>
        </section>
    </div>
    `
    templateString.trim();
    template.innerHTML = templateString
    return template.content;
}

export function createElementWithText(tagName: keyof HTMLElementTagNameMap, textContent: number | string) {
    const element = document.createElement(tagName);
    element.textContent = textContent.toString()
    return element;
}