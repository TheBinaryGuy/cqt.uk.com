import Image from "next/image";

import logo from '@/assets/images/cqt-mark.png';

export const Logo: React.FC<{ className: string }> = ({ className }) => {
    return <Image src={logo} alt='Logo' className={className} />;
};
