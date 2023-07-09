import './globals.css'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar';
import Theme from '@/components/Theme';
import Wrapper from '@/components/Wrapper';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Open Keep',
  description: 'Open source notes & reminder app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme>
          <div className="flex">
            <Sidebar />
              <Wrapper>
                {children}
              </Wrapper>
          </div>
        </Theme>
      </body>
    </html>
  )
}
