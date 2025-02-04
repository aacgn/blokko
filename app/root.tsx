import '@mantine/core/styles.css';

import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import { AppShell, ColorSchemeScript, MantineProvider, mantineHtmlProps, NavLink as MantineNavLink, Burger, Group, Stack, em, Center, Loader, Avatar, Text, Kbd } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';

import type { Route } from "./+types/root";
import { ActivitiesProvider } from '~/contexts/ActivitiesContex';


export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <ColorSchemeScript  />
        <Meta />
        <Links />
      </head>
      <body>
        <MantineProvider>
          {children}
        </MantineProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <Center style={{ minHeight: '100dvh' }}>
      <Loader size="xl" type="dots" />
    </Center>
  );
}

export default function App() {
  const isMobile = useMediaQuery(`(max-width: ${em(750)})`);
  const [opened, { toggle }] = useDisclosure();

  return (
    <ActivitiesProvider>
      <AppShell
        header={{ height: 30, collapsed: !isMobile }}
        navbar={{ width: 300, breakpoint: 'sm',  collapsed: { mobile: !opened }, }}
        padding="md"
      >
        <AppShell.Header>
          <Group>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
            <div>Logo</div>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar p="md">
          <Stack>
            <Group>
              <Avatar src="https://i.pravatar.cc/300" radius="xl"/>
              <Text>Nome Aleatório</Text>
            </Group>
            <MantineNavLink
              href="/"
              label="Focar"
              onClick={toggle}
              renderRoot={(props) => (
                <NavLink to="/" {...props} />
              )}
            />
            <MantineNavLink
              label="Organizar"
              onClick={toggle}
              renderRoot={(props) => (
                <NavLink to="/add" {...props} />
              )}
            />
            <MantineNavLink
              label="Histórico"
              onClick={toggle}
              renderRoot={(props) => (
                <NavLink to="/history" {...props} />
              )}
            />
          </Stack>
        </AppShell.Navbar>
        <AppShell.Main>
          <Outlet />
        </AppShell.Main>
      </AppShell>
    </ActivitiesProvider>
  );
};


export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
