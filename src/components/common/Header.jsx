const Header = (props) => {
    return (
        <div 
            className="d-flex flex-column align-items-center text-cente" 
            style={{
                backgroundImage: `url("https://img.freepik.com/premium-photo/meat-samosa-photoshoot-kitchen_1001626-553.jpg?w=740")`,  // Your food image URL
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                minHeight: '100vh',
                color: 'white',
                paddingTop: '2rem',  // Reduced padding to bring the text closer to the top
                paddingBottom: '5rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                height: '100vh',
                textAlign: 'center',
            }}
        >
            <h1 className="display-2 fw-bold mb-4 my-5" style={{
                fontFamily: 'Dancing Script, cursive', // A more elegant script font
                fontSize: '4rem',  // Larger font size for impact
                textShadow: '3px 3px 10px rgba(0, 0, 0, 0.6)', // Stronger shadow for better contrast
                color: '#FFD700', // A warm gold color for the title to make it pop
                letterSpacing: '3px', // Slight spacing between letters for elegance
            }}>
                {props.title}
            </h1>
            <p className="lead mb-4" style={{
                maxWidth: '700px',
                lineHeight: '1.8',
                fontSize: '1.3rem',
                color: '#FFF',
                textShadow: '2px 2px 8px rgba(0, 0, 0, 0.5)', // Soft shadow for a subtle effect
                fontFamily: 'Quicksand, sans-serif',
                letterSpacing: '1px',
            }}>
                Uncover regional Indian recipes, bursting with flavors and spices. From rich curries to aromatic rice dishes, bring the heart of India to your table.
            </p>
            {props.children}
        </div>
    );
}

export default Header;