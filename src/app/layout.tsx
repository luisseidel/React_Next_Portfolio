import '../app/globals.css'

export const metadata = {
    title: 'SPA by Luis Seidel',
    description: 'SPA by Luis Seidel',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
            <body>
                {children}
            </body>
        </html>
    )
}
