import { Logo } from "./_components/logo"

interface Props {
  children: React.ReactNode
}

export default function AuthLayout({ children }: Props) {
  return (
    <div className="flex flex-col justify-center items-center h-full space-y-6">
      <Logo />

      {children}
    </div>
  )
}