import Link from 'next/link'
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NamedIcon(link, icon, text, className=undefined) {
    return (
      <Link href={link} className={clsx("flex items-center gap-2 text-white py-2 px-4 rounded-full",
                    {
                        "bg-blue-500 hover:bg-blue-700": className !== undefined,
                    }
                    )}
      >
        {icon && <FontAwesomeIcon icon={icon}/>}
        <small>{text}</small>
      </Link>        
    )
}