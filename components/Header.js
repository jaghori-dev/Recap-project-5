import Link from "next/link";
import { Fredoka } from 'next/font/google';
import styled from "styled-components";

export default function Header() {
  return (
    <HeaderItem>
      <HeaderHeadline>
        Art Gallery
      </HeaderHeadline>
      <NavItem>
        <UlItem>
          <li>
            <NavLink href="/">
              Spotlight
              <Arrow viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </Arrow>
            </NavLink>
          </li>
          <li>
            <NavLink href="/gallery" className="nav-link">
              Gallery
              <Arrow viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </Arrow>
            </NavLink>
          </li>
          <li>
            <NavLink href="/favorites" className="nav-link">
              Favorites
              <Arrow viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 10l5 5 5-5z" />
              </Arrow>
            </NavLink>
          </li>
        </UlItem>
      </NavItem>
    </HeaderItem>
  );
}

const fredoka = Fredoka({
  subsets: ['latin'],
  weight: '400',
  display: 'swap'
});

const HeaderItem = styled.header`
  background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
  padding: 1rem 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e2e8f0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  font-family: ${fredoka.style.fontFamily}, cursive;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`;

const HeaderHeadline = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  background: linear-gradient(135deg, #3b82f6, #8b5cf6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const NavItem = styled.nav`
  max-width: 800px;
  margin: 0 auto;
`;

const UlItem = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  font-size: 1.1rem;
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  
  &:hover {
    background: linear-gradient(135deg, #3b82f6, #8b5cf6);
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(59, 130, 246, 0.3);

    .arrow {
      transform: rotate(180deg);
      opacity: 1;
    }
  }
`;

const Arrow = styled.svg.attrs({ className: 'arrow' })`
  width: 1.2rem;
  height: 1.2rem;
  transition: transform 0.3s ease;
  opacity: 0.7;
`;