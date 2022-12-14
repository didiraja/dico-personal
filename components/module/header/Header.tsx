import React, { FunctionComponent } from 'react';

const Header: FunctionComponent = () => {
  return (
    <header className="p-5">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>Logo</div>
          <div>
            <nav>
              <ul className="flex items-center space-x-6">
                <li>Home</li>
                <li>About</li>
                <li>
                  <button>Sign Up</button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
