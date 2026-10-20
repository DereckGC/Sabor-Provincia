import './HoverText.css';

export default function HoverText({ text, hoverColor = 'var(--color-primary)' }) {
    const words = text.split(' ');

    return (
        <div className='hover-text'>
            {words.map((word, wordIndex) => (
                <div key={wordIndex} className="hover-word">
                    {Array.from(word).map((character, charIndex) => (
                        <span
                            key={charIndex}
                            className="hover-letter"
                            style={{ '--hover-color': hoverColor }}
                        >
                            {character}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}