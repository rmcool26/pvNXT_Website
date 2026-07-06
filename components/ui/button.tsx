import * as React from "react"; import Link from "next/link";
type BtnProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {variant?:"primary"|"secondary"; href?:string};
export function Button({variant="primary",className="",children,href,...props}:BtnProps){ const base = variant==="primary" ? "btn-primary" : "btn-secondary"; if(href){return <Link href={href} className={`${base} ${className}`}>{children}</Link>} return <button className={`${base} ${className}`} {...props}>{children}</button> }
export default Button
