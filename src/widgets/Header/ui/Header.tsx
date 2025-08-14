import { FC } from 'react';
import { Link } from '@tanstack/react-router';
import ToggleThemeButton from '@features/theme/ui/ToggleThemeButton';

const Header: FC = () => {
  return (
    <div className='p-2 flex gap-2'>
      <Link to='/' className='[&.active]:font-bold'>
        Home
      </Link>{' '}
      <Link to='/user-profile' className='[&.active]:font-bold'>
        Personal Info
      </Link>
      <ToggleThemeButton />
    </div>
  );
};

export default Header;
