import Image from 'next/future/image';

import logo from '@/assets/images/cqt-mark.png';

export const Logo: React.FC<{ className: string }> = ({ className }) => {
    return <Image src={logo} alt='Logo' className={className} />;
};
