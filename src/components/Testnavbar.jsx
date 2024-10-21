import React from 'react';

const TestNavbar = () => {
  return (
    <div>
      <nav className="sticky top-0 w-full bg-white shadow-md z-50">
        <div className="container mx-auto px-4 py-2">
          <h1>Sticky Navbar</h1>
        </div>
      </nav>
      <div className="content">
        {/* Add enough content to make the page scroll */}
        <div style={{ height: '2000px', backgroundColor: '#f0f0f0' }}>
          <p>Scroll down to see the sticky navbar in action.</p>
        </div>
      </div>
    </div>
  );
};

export default TestNavbar;
