export default function Toggle() {
    function toggleMe() {
        const text = document.querySelector('h2');
        if (text.style.display === 'none') {
            text.style.display = 'block';
            button.textContent = 'Hide me';
        } else {
            text.style.display = 'none';
            button.textContent = 'Show me';
        }
    }
    return (

        <div>
            <h2>I will be vanished if you click below</h2>
            <button onClick={toggleMe}>Show me</button>
        </div>
    );
}