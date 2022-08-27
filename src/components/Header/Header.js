import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <header>
      <SuperHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <ActionGroup>
            <UserLogo>
              <button>
                <User size={24} />
              </button>
            </UserLogo>
            <Subscribe>
              <Button>Subscribe</Button>
              <a href='blank'>Already a subscriber?</a>
            </Subscribe>
          </ActionGroup>
        </Row>
      </SuperHeader>
      <MainHeader>
        <Logo />
      </MainHeader>
    </header>
  );
};

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;

  @media ${QUERIES.desktopAndUp} {
    background: var(--color-gray-100);
    color: var(--color-black);
    margin-top: 20px;
  }
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
`;

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const UserLogo = styled.span`
  @media ${QUERIES.desktopAndUp} {
    display: none;
  }
`;

const Subscribe = styled.span`
  display: none;

  @media ${QUERIES.desktopAndUp} {
    display: flex;
    flex-direction: column;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;

  @media ${QUERIES.desktopAndUp} {
    margin-top: -72px;
  }
`;

export default Header;
