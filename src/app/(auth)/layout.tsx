import React from "react"

interface AuthLayoutProps {
  children: React.ReactNode
}

export default function AuthLayout(props: AuthLayoutProps) {
  return <div className="flex items-center justify-center h-full">{ props.children }</div>
}