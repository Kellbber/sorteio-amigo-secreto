import Link from 'next/link'
interface ButtonProps {
  label: string
  className?: string
  href?: string
  onClick?: ()=> void;
}
const ButtonLink = ({ label, className, href, onClick }: ButtonProps) => {
  return (
    <>
      {href ? (
        <button
          className={` bg-green-900/60  rounded-full ${className} hover:bg-green-900/80 transition-all ease-in-out duration-150 text-white font-semibold uppercase tracking-wide`}
        >
          <Link href={href}>{label}</Link>
        </button>
      ) : (
        <button
        className={` bg-green-900/60  rounded-full ${className} hover:bg-green-900/80 transition-all ease-in-out duration-150 text-white font-semibold uppercase tracking-wide`}
        onClick={onClick}
      >
      {label}
      </button>
      )}
    </>
  )
}

export default ButtonLink
